import { UseQueryResult, useQuery } from "react-query";
import { ManifestInterface, PostInterface } from "../ts/interfaces";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import IFrameView from "./iframe.view";
import "./styles/myp1.style.scss";

function PostArea() {
  const [openedPost, setOpenedPost] = useState(true);
  const [postUrl, setPostUrl] = useState("");
  const [datHook, setDatHook] = useState({});

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

  const postsData: PostInterface | PostInterface[] | undefined = data?.posts;

  if (JSON.stringify(datHook) === "{}") {
    // setDatHook(data as {});
    console.log("datHook is empty");
    console.log(data);
  }

  return (
    <div className="post_grid">
      <div>
        {postsData?.map((val, i) => (
          <div
            key={i}
            style={
              {
                "--background": `url("${val.thumbnail}")`,
              } as React.CSSProperties
            }
          >
            <a href={`#${val.uid}`}>
              <h1>{val.title}</h1>
              <p>{val.description}</p>
            </a>
          </div>
        ))}
      </div>
      <div className={`mock_iframe_view ${openedPost ? "view_open" : ""}`}>
        <button onClick={() => setOpenedPost(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <IFrameView fileName={postUrl} />
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
