import { ReactNode, useState } from "react";
import IslamPhoto from "../assets/final/islam.jpg";
import EgyptPhoto from "../assets/final/egypt.jpg";
import GreecePhoto from "../assets/final/greece.jpg";
import RomePhoto from "../assets/final/rome.jpg";
import IndiaPhoto from "../assets/final/india.jpg";
import TombstonePhoto from "../assets/final/artwork/tombstone.jpg";
import StelophorousFrontPhoto from "../assets/final/artwork/stelophorous-front.jpg";
import StelophorousBackPhoto from "../assets/final/artwork/stelophorous-back.jpg";
import LimestoneCoffinPhoto from "../assets/final/artwork/limestone-coffin.jpg";
import MarbleFront from "../assets/final/artwork/marble-cinerary-front.jpg";
import MarbleSide from "../assets/final/artwork/marble-cinerary-side.jpg";
import Marble34 from "../assets/final/artwork/marble-cinerary-34ths.jpg";
import GaneshaPhoto from "../assets/final/artwork/seated-ganesha.jpg";
import style from "./styles/final-exhibit.module.scss";

function ArtworkSection(props: {
  children?: any;
  artworkTitle: string;
  location: string;
  period: string;
  date: string;
  culture: string;
  medium: string;
  dimensions: {
    h: string;
    w: string;
    d: string;
  };
  classification: string;
  element: string | string[];
  principle: string | string[];
  func: string;
}) {
  let [page, setPage] = useState(0);

  const minusPage = () => {};
  const forwardPage = () => {};

  return (
    <div className={style["image-section"]}>
      <div className={style["image-slideshow"]}>
        {/* image selection */}
        <div>
          <button onClick={minusPage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={forwardPage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div>{props.children}</div>
      </div>
      <div className={style["text-section"]}>
        <h4>{props.artworkTitle}</h4>
        <ul>
          <li title="Geographic Location">
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span>{props.location}</span>
          </li>
          <li title="Time Period">
            <span>
              <i className="fa-solid fa-timeline"></i>
            </span>
            <span>{props.period}</span>
          </li>
          <li title="(Estimated) Date">
            <span>
              <i className="fa-solid fa-calendar-days"></i>
            </span>
            <span>{props.date}</span>
          </li>
          <li title="Culture">
            <span>
              <i className="fa-solid fa-language"></i>
            </span>
            <span>{props.culture}</span>
          </li>
          <li title="Medium of Creation">
            <span>
              <i className="fa-solid fa-pencil"></i>
            </span>
            <span>{props.medium}</span>
          </li>
          <li title="Dimensions">
            <span>
              <i className="fa-solid fa-ruler"></i>
            </span>
            <span>
              H. {props.dimensions.h} x W. {props.dimensions.w} x H.{" "}
              {props.dimensions.h} in.
            </span>
          </li>
          <li title="Classification">
            <span>
              <i className="fa-solid fa-scroll"></i>
            </span>
            <span>{props.classification}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function CivilizationCard({
  children,
  civilizationName,
  civilizationImage,
}: {
  children?: ReactNode;
  civilizationName: string;
  civilizationImage: string;
}) {
  return (
    <div key={civilizationName} className={style["focus-grid-item"]}>
      <div
        style={
          { "--img": `url("${civilizationImage}")` } as React.CSSProperties
        }
      ></div>
      <p>{civilizationName}</p>
    </div>
  );
}

function FinalExhibit() {
  return (
    <div>
      <div>
        <h1>Art of The Ages</h1>
        <h3>An exhibit composed by Andrew Li</h3>
      </div>

      <div>
        <h1>Central Theme/Question</h1>
        <h3>How was stone used in artwork throughout time and cultures?</h3>
      </div>

      <div>
        <h1>Cultural Rationale</h1>
        <p>
          The idea behind my art show is the connection of different arts’
          across cultures and time periods to the common element of stone(s).
          Stones, which include rock, granite, quartz, etc. have been used in
          many arts for many purposes. Stone is a versatile medium that can be
          used for both aesthetic and application purposes. That is what
          interests me. I decided to pick my art pieces across five different
          civilizations at differing time periods. The five civilizations I
          decided to pick are: Egypt, Indian, Islamic, Greece, and Rome. I
          decided these civilizations as they were all located in differing
          locations and their peak of arts were in all different time periods,
          which I will use to display the changing and similar uses for stones
          across art.
        </p>

        <h1>Description</h1>
        <p>
          I believe that the best method of presenting my exhibition would be in
          a granite or quartz room that is dimly lit and has most of the light
          focused on the artwork. Stones have a unique quality when light is
          focused upon it. Rock has the reflection that is not eye-brightening
          nor too dim, rather, light perfectly lights rock, especially within a
          dark environment. Regardless, it has an aesthetic that I enjoy – I
          enjoy both the dark and the light, especially how they interact with
          each other and bring emphasis and disinterest to certain things.
        </p>
      </div>

      <div>
        <h1>Civilizations of Focus</h1>
        <div className={style["focus-grid"]}>
          <CivilizationCard
            civilizationName="Islam"
            civilizationImage={IslamPhoto}
          />
          <CivilizationCard
            civilizationName="Egypt"
            civilizationImage={EgyptPhoto}
          />
          <CivilizationCard
            civilizationName="Greece"
            civilizationImage={GreecePhoto}
          />
          <CivilizationCard
            civilizationName="Rome"
            civilizationImage={RomePhoto}
          />
          <CivilizationCard
            civilizationName="India"
            civilizationImage={IndiaPhoto}
          />
        </div>
      </div>

      <div>
        <h1>Artworks</h1>
        <ArtworkSection
          artworkTitle="Tombstone in the Form of an Architectural Niche"
          location="Yazd, Iran"
          period="After Hijra"
          date="1352 C.E."
          culture="Islamic"
          medium="Marble; carved"
          dimensions={{
            h: "32 3/4",
            w: "21 3/4",
            d: "3 1/2",
          }}
          classification="Stone"
          element={["form", "texture"]}
          principle={"pattern"}
          func=""
        >
          <img src={TombstonePhoto} />
        </ArtworkSection>
        <ArtworkSection
          artworkTitle="Stelophorous Statue of Bay"
          location="Egyptian"
          period="Dynasty 19"
          date="1294 – 1250 B.C.E."
          culture="Egyptian"
          medium="Limestone"
          dimensions={{
            h: "11 1/16",
            w: "4",
            d: "5 7/8",
          }}
          classification="Stone"
          element={["form", "texture", "line"]}
          principle={["emphasis", "proportion"]}
          func=""
        >
          <img src={StelophorousFrontPhoto} />
          <img src={StelophorousBackPhoto} />
        </ArtworkSection>
        <ArtworkSection
          artworkTitle="Limestone coffin model"
          location="Cypriot"
          period="Cypro-Geometric I"
          date="1050 – 950 B.C.E."
          culture="Greek"
          medium="Limestone"
          dimensions={{
            h: "4 3/16",
            w: "4 1/4",
            d: "3",
          }}
          classification="Miscellaneous-Stone"
          element={["form", "shape"]}
          principle={["unity"]}
          func=""
        >
          <img src={LimestoneCoffinPhoto} />
        </ArtworkSection>
        <ArtworkSection
          artworkTitle="Marble cinerary urn"
          location="Unknown"
          period="Early Imperial, Julio-Claudian"
          date="1 - 50 C.E."
          culture="Roman"
          medium="Marble"
          dimensions={{
            h: "14 1/4",
            w: "21 1/4",
            d: "16 1/8",
          }}
          classification="Stone Sculpture"
          element={["form", "texture", "space"]}
          principle={["variety"]}
          func=""
        >
          <img src={MarbleFront} />
          <img src={MarbleSide} />
          <img src={Marble34} />
        </ArtworkSection>
        <ArtworkSection
          artworkTitle="Seated Ganesha"
          location="Kashmir, India"
          period="Late Classical Age"
          date="850 - 859 C.E."
          culture="Indian"
          medium="Stone"
          dimensions={{
            h: "6",
            w: "4",
            d: "n/a",
          }}
          classification="Sculpture"
          element={["form"]}
          principle={["emphasis", "balance"]}
          func=""
        >
          <img src={GaneshaPhoto} />
        </ArtworkSection>
      </div>
    </div>
  );
}

export default FinalExhibit;
