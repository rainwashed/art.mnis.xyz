import { useEffect, useState } from "react";
import "./styles/navbar.style.scss";

interface _navRouteEntry {
  iconName: string;
  href: string;
  routeName: string;
}

let navRoutes: _navRouteEntry[] = [
  {
    iconName: "fa-solid fa-house",
    href: "/",
    routeName: "Home",
  },
  {
    iconName: "fa-solid fa-seedling",
    href: "/myp1",
    routeName: "MYP-1",
  },
  {
    iconName: "fa-solid fa-camera",
    href: "/photography",
    routeName: "Personal Photography",
  },
];

export default function NavbarComponent() {
  let [openedNav, setOpenedNav] = useState(false);

  return (
    <nav className={`root_navbar ${openedNav ? "state_active" : ""}`}>
      <button onClick={(e) => setOpenedNav(!openedNav)}>
        <i className="fa-solid fa-bars-sort"></i>
      </button>
      <div>
        <span>
          <p>
            <i>art</i>.mnis.xyz
          </p>
        </span>
        <ul>
          {navRoutes.map((meta: _navRouteEntry, index: number) => (
            <li key={index}>
              <a href={meta.href}>
                <span>
                  <i className={meta.iconName} />
                </span>
                {meta.routeName}
              </a>
            </li>
          ))}
        </ul>
        <footer>
          <p>This is a footer element</p>
        </footer>
      </div>
    </nav>
  );
}
