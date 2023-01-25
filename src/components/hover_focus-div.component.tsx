import { ReactNode } from "react";
import style from "./styles/hover_focus-div.module.scss";

interface props {
  title: string;
  children: ReactNode | ReactNode[];
}

function HoverFocusDiv(props: props) {
  return (
    <div className={style.root + " hover_card"} key={props.title}>
      <span>
        <p>{props.title}</p>
      </span>
      <div>{props.children}</div>
    </div>
  );
}

export default HoverFocusDiv;
