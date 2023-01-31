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
import "./styles/myp1.module.scss";

function PostArea() {
  const [openedPost, setOpenedPost] = useState(false);
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

  const postsData: PostInterface | PostInterface[] | undefined = data?.posts;

  if (status === "error")
    return (
      <p>
        An error was encountered when attempting to fetch the manifest.json
        file.
      </p>
    );
  if (status === "loading") return <p>Attempting...</p>;

  return (
    <div className="post_grid">
      <div>
        {postsData?.map((val, i) => (
          <div key={i}>{JSON.stringify(val)}</div>
        ))}
      </div>
      <div className={`mock_iframe_view ${openedPost ? "view_open" : ""}`}>
        <IFrameView fileName="post1.md" />
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
