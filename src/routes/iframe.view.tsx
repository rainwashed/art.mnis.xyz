import { ReactNode } from "react";
import { marked } from "marked";
import { useQuery } from "react-query";

interface props {
  children?: ReactNode[];
  fileName: string;
}

function IFrameView(props: props) {
  const { status, data } = useQuery("iframe", async () => {
    const res = await fetch(
      `${window.document.location.origin}/posts/${props.fileName}`
    );
    return res.text();
  });

  if (status === "error") return <p>Unable to render {props.fileName}.</p>;
  if (status === "loading") return <p>Loading {props.fileName}</p>;

  return (
    <div dangerouslySetInnerHTML={{ __html: marked.parse(data as string) }} />
  );
  // using react query, fetch for the file described in the file prop and render it using marked.js render method
}

export default IFrameView;
