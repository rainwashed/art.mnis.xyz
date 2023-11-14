import { ReactNode, useEffect, useState } from "react";
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
import OpeningSound from "../assets/final/opening.mp3";
import WorksCitedMd from "../assets/final/works-cited.md";
import style from "./styles/final-exhibit.module.scss";
import { marked } from "marked";
import { motion } from "framer-motion";

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
  desc: string;
  citation: string;
}) {
  let [page, setPage] = useState(0);

  const minusPage = () => {
    setPage(--page);
  };
  const forwardPage = () => {
    setPage(++page);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        margin: "-30%",
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className={style["image-section"]}>
        <div className={style["image-slideshow"]}>
          {/* image selection */}
          <div>
            {props.children.length > 1 ? (
              <>
                <button onClick={minusPage}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button onClick={forwardPage}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </>
            ) : undefined}
          </div>
          <div>
            <motion.animate
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              {props.children.length > 1
                ? props.children[Math.abs(page) % (props.children.length || 0)]
                : props.children}
            </motion.animate>
          </div>
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
                H. {props.dimensions.h} x W. {props.dimensions.w} x D.{" "}
                {props.dimensions.d} in.
              </span>
            </li>
            <li title="Classification">
              <span>
                <i className="fa-solid fa-scroll"></i>
              </span>
              <span>{props.classification}</span>
            </li>
          </ul>
          <div>
            <h3>Description</h3>
            <p>{props.desc}</p>
            <h3>Function</h3>
            <p>{props.func}</p>
          </div>
          <div>
            <h3>Most significant:</h3>
            <p>
              Elements of Art:{" "}
              {typeof props.element === "string"
                ? props.element
                : props.element.join(", ")}
            </p>
            <p>
              Principles of Design:{" "}
              {typeof props.principle === "string"
                ? props.principle
                : props.principle.join(", ")}
            </p>
            <p>Image Source:</p>
            <p
              dangerouslySetInnerHTML={{
                __html: marked.parse(props.citation),
              }}
            ></p>
          </div>
        </div>
      </div>
    </motion.div>
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
    <div className={style["root"]}>
      <div className={style["fs-center"]}>
        <motion.animate
          initial={{
            opacity: 0,
            transform: "translateY(-150px)",
            transformOrigin: "center",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
          }}
          transition={{
            type: "tween",
            duration: 1,
            ease: [0, 0.55, 0.45, 1],
          }}
        >
          <h1>Stone Room</h1>
          <h3>An exhibit composed by Andrew Li</h3>
        </motion.animate>
      </div>

      <div className={style["fs-center"]}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "-30%",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <h1>Central Theme/Question</h1>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "-30%",
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h3>How was stone used in artwork throughout time and cultures?</h3>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          margin: "-30%",
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <div className={style["fs-center"]}>
          <h1>Curatorial Rationale</h1>
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
            I believe that the best method of presenting my exhibition would be
            in a granite or quartz room that is dimly lit and has most of the
            light focused on the artwork. Stones have a unique quality when
            light is focused upon it. Rock has the reflection that is not
            eye-brightening nor too dim, rather, light perfectly lights rock,
            especially within a dark environment. Regardless, it has an
            aesthetic that I enjoy – I enjoy both the dark and the light,
            especially how they interact with each other and bring emphasis and
            disinterest to certain things.
          </p>
        </div>
      </motion.div>

      <div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "-30%",
          }}
          transition={{
            duration: 0.6,
          }}
        >
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
        </motion.div>
      </div>

      <div>
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
          func="The tablet provides historical context based on the cursive on its inscriptions. The tablet has a religious use, having an inscription from the Qu'ran, making it affiliated with Islam. It also serves as an aesthetic formation of Islamic scripture. However, the main function of this artwork is its religious use and connection."
          desc="A tablet of stone with engravings of calligraphic script through the form of an architectural niche. The scripture is a geometric kufic inscriptions that include the profession of faith (known as the Shahada) and passages from the Qur'an. The middle framing band are the name and titles of Shaikh Mahmud ibn Sada Muhammad, a leader of a religious brotherhood."
          citation={`"Tombstone in the Form of an Architectural Niche." *The MET*, www.metmuseum.org/art/collection/search/449028.`}
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
          func="The statue is significant in the sense that it depicts a non-royal, which was non-traditional. Historically, statues only depicted royals. The statue seems to be a gift of sorts because there is no 'shrine like' attributes within this statue. Also, considering the rarity of a non-royal statue, its logcial to assume that it would be a local gift that would not be shared with others, in fear that it violates all traditional dedication of these forms of arts."
          desc="It is a statue that depicts a kneeling man holding a text inscribed towards the sun. There is an inscription on the back of the statuette that identifies it as a man named 'Bay' who worked as a scribe during the rule of Seti I."
          citation={`"Stelophorous Statue of Bay." *The MET*, www.metmuseum.org/art/collection/search/554769.`}
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
          func="The function of this piece of art is unclear. However, given the amount of precise effort put into the carving of the stone, it can be assumed that the significance of this artwork was high. It is described as a coffin, though it does not follow the size of what a real coffin would have been. Therefore, it can be believed that the function of this artwork is to represent a real coffin/death, having an emotional connection and significance to the members of the person that had died."
          desc="It is a box with inset engravings of horned animals in low relief and the Great Goddess or her priestess. It contains cutouts at its base as well as is supported with four legs. The form of the box is very geometrically rectangular, and there is a clear attention to detail on the symmetry between each face of the rectangular prism."
          citation={`"Limestone coffin model." *The MET*, www.metmuseum.org/art/collection/search/244043.`}
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
          func="The function of this artwork seems to have been a form of a tribute or dedication to the one who had died (which would have had their name written on the front). Due to it being found in a tomb, it can be assumed that this urn represented a tribute of this person's life, especially considering the 'war theme'. It can be assumed that these urn's reflect the individual that had died -- making it significant to the individual and his/hers character."
          desc="The principle of the theme of this artwork is war. There are many trophies, piles of weapons, and armor that cover the sides of the box. The faces are of high-quality, suggesting that the work was a commission of some kind. The front, where inscriptions of the name of the urn would be, is missing. The urn was excavated from a tomb near Anagni, southeast of Rome. There are many other urns similar to this one, all being a part of Roman funerary art."
          citation={`"Marble cinerary urn." *The MET*, www.metmuseum.org/art/collection/search/257610.`}
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
          func="The small size of the sculpture makes it personal to someone. It seems it was a personal shrine to whoever followed Ganesha, making it have a religious significance to Hinduism and Hindus. Therefore, this artwork served the purpose as a religious shrine and a connection to Hinduism, making it significant to particularly Hindus."
          desc="The stone is a dark black/brown colored with a figure of Ganesha, a deity in the Hindu pantheon who is the remover of obstacles. He is the son of Shiva Parvati. He is often prayed to before major changes in life. The artwork is small, being only half a foot tall and one third a foot wide. The god, Ganesha, is atop stepped pedestal on top a lotus throne, wearing a tripartite crown, which are all attributes of other images that were created in Kashmir. Kashmir was an early region for worship of Shiva."
          citation={`"Seated Ganesha." *The MET*, www.metmuseum.org/art/collection/search/38404.`}
        >
          <img src={GaneshaPhoto} />
        </ArtworkSection>
      </div>
      <div>
        <h1>Works Cited</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: marked.parse(WorksCitedMd),
          }}
        ></p>
      </div>
      <div className={style["footer"]}>
        <ul>
          <p>
            Made with{" "}
            <span>
              <i className="fa-solid fa-heart" style={{ color: "#d63031" }}></i>
            </span>{" "}
            from Andrew Li
          </p>
          <p>
            Programmed in{" "}
            <span>
              <i
                className="fa-brands fa-react"
                style={{ color: "#0984e3" }}
              ></i>
            </span>
            and{" "}
            <span>
              <i
                className="fa-brands fa-square-js"
                style={{ color: "#fdcb6e" }}
              ></i>
            </span>
          </p>
          <p>
            Hosted with{" "}
            <a href="https://surge.sh/" target="_blank">
              surge.sh
            </a>
          </p>
          <p>
            <a href="https://github.com/rainwashed/art.mnis.xyz">
              <span>
                <i className="fa-brands fa-github"></i>
              </span>{" "}
              Source Code
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
}

export default FinalExhibit;
