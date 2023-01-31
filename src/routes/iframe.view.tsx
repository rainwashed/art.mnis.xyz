import { ReactNode } from "react";
import { marked } from "marked";

interface props {
  children?: ReactNode[];
  file: string;
}

function IFrameView(props: props) {
  // using react query, fetch for the file described in the file prop and render it using marked.js render method
}
