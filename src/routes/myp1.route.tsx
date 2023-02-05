import { UseQueryResult, useQuery } from "react-query";
import { ManifestInterface, PostInterface } from "../ts/interfaces";
import {
  CSSProperties,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import IFrameView from "./iframe.view";
import "./styles/myp1.style.scss";

function HashListener(props: {
  children?: ReactNode[];
  data: ManifestInterface;
  assignPost: Dispatch<SetStateAction<string>>;
}) {
  function checkUidExists(uid: string) {
    let r: boolean = false; // r = return value

    props.data.posts.forEach((post) => {
      if (post.uid === uid) r = true;
    });

    return r;
  }

  function searchByUid(uid: string): PostInterface | undefined {
    let r: PostInterface | undefined;

    props.data.posts.forEach((post) => {
      if (post.uid === uid) r = post;
    });

    return r;
  }

  function onHashChange() {
    let hash: string = window.location.hash.slice(1);
    if (checkUidExists(hash) === false) {
      props.assignPost("");
      return;
    }
    console.log("window eventhashchange found.");

    let obj: PostInterface = searchByUid(hash) as PostInterface;
    props.assignPost(obj.src);
  }

  useEffect(() => {
    let hash: string = window.location.hash.slice(1);
    if (checkUidExists(hash)) {
      console.log("window load hash change found.");

      let obj: PostInterface = searchByUid(hash) as PostInterface;
      props.assignPost(obj.src);
    } else {
      props.assignPost("");
    }

    window.addEventListener("hashchange", onHashChange);
    return window.removeEventListener("hashchange", () => {});
  }, []);

  return <></>;
}

function PostArea() {
  const [postUrl, setPostUrl] = useState("");

  const { data, status }: UseQueryResult<ManifestInterface, unknown> = useQuery(
    "manifest",
    async () => {
      const res = await fetch(
        `${window.document.location.origin}/manifest.json`
      );
      return res.json();
    },
    {
      refetchOnWindowFocus: false,
      cacheTime: 1 * 24 * 60 * 60 * 1000,
    }
  );

  if (status === "error")
    return (
      <p>
        An error was encountered when attempting to fetch the manifest.json
        file.
      </p>
    );

  if (status === "loading") return <p>Attempting...</p>;

  return (
    <div>
      <div className="post_grid">
        {data?.posts.map((post, index) => {
          return (
            <article
              key={index}
              style={
                { "--background": `url("${post.thumbnail}")` } as CSSProperties
              }
            >
              <a href={`#${post.uid}`}></a>
              <div>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
              </div>
            </article>
          );
        })}
      </div>
      <HashListener data={data as ManifestInterface} assignPost={setPostUrl} />
      <div className={`mock_iframe ${postUrl === "" ? "" : "iframe_active"}`}>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "";
            setPostUrl("");
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        {postUrl !== "" ? <IFrameView fileName={postUrl} /> : <></>}
      </div>
    </div>
  );
}

function MYP1Route() {
  return (
    <div>
      <h1>This is the MYP1 Route</h1>
      <PostArea />
    </div>
  );
}

export default MYP1Route;
