import { UseQueryResult, useQuery } from "react-query";
import { ManifestInterface, PostInterface } from "../ts/interfaces";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

function checkUID(manifest: ManifestInterface | undefined, uid: string) {
  let r: PostInterface | undefined = undefined;

  manifest?.posts.forEach((post, index) => {
    if (post.uid === uid) r = post;
  });

  return r;
}

function PostArea() {
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
  const [openedPost, setOpenedPost] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  function handleHashChange(e: HashChangeEvent) {
    const hash: string = window.location.hash.slice(1);
    console.log("new hash=", hash);
    console.log("new hash check=", checkUID(data, hash.toLowerCase()));
  }

  function handlePreload() {
    //if there is a post hash in the url; load the post
    const hash: string = window.location.hash.slice(1);
    console.log("loaded hash=", hash);
    console.log("load hash check=", checkUID(data, hash.toLowerCase()));
  }

  const onWindowMount = () => {
    handlePreload();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", () => {});
  };

  useEffect(onWindowMount, []);

  if (status === "error")
    return (
      <>
        <p>An error was met when attempting to fetch the manifest.json file.</p>
      </>
    );
  if (status === "loading")
    return (
      <>
        <p>Attempting...</p>
      </>
    );

  const postsData: PostInterface | PostInterface[] | undefined = data?.posts;

  return (
    <div className="post_grid">
      <p>{JSON.stringify(data)}</p>
      <iframe
        src={iframeSrc}
        className={`iframe_view ${iframeSrc === "" ? "active-loaded" : ""}`}
      />
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