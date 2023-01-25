import React from "react";
import style from "./styles/404.module.scss";

function NotFoundRoute() {
  // const error: any = useRouteError();

  return (
    <div className={style.root}>
      <h1>Are you sure that exists? 🙁</h1>
      <p>
        <strong>{location.pathname as string}</strong> does not seem to be a
        valid path.
      </p>
    </div>
  );
}

export default NotFoundRoute;
