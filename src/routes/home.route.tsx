import style from "./styles/home.module.scss";
import HoverFocusDiv from "../components/hover_focus-div.component";
import AboutMePhoto from "../assets/about-me-foto.jpg";
import { MutableRefObject, useEffect, useRef } from "react";
import { Waypoint } from "react-waypoint";
import Typewriter from "typewriter-effect";
import anime from "animejs";

function handleTrackscroll(dom: MutableRefObject<any>) {}

function HomeRoute() {
  const trackRef = useRef(null);
  const trackAnim = () => {
    anime({
      targets: trackRef.current,
      scale: [0, 1],
      opacity: [0, 1],
      delay: 300,
      duration: 1000,
      easing: "easeInOutQuint",
    });
  };
  useEffect(() => {
    window.document.title = `Home / art.mnis.xyz`;
    trackAnim();
  }, []);

  return (
    <div className={style.root}>
      {/* <h1>This is the home route</h1> */}
      <div className={style.image}>
        <div>
          <h1>Hi! I'm Andrew.</h1>
          <h3>
            I am
            <Typewriter
              options={{
                strings: [
                  "an artist",
                  "a programmer",
                  "a problem solver",
                  "a learner",
                  "a photographer",
                  "a technology enthusiast",
                  "a friend",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
      <div className={style.track} ref={trackRef}>
        <HoverFocusDiv title="Who am I?">
          <img
            className={style.about_me_photo}
            src={AboutMePhoto}
            alt="selfie taken in Serbia"
          />
          <p>
            My name is Andrew. I am a freshman at International Academy East and
            partake in the art's program here.
          </p>
        </HoverFocusDiv>
        <HoverFocusDiv title="Why did I take art?">
          <p>
            I took art mostly due to the fact that I have never in the past and
            I wanted to try something new for once. It was a choice I had and I
            could pick, and so I chose it.
          </p>
        </HoverFocusDiv>
        <HoverFocusDiv title="What is art?">
          <p>
            Art is a language spoken before any. It is a source for history,
            culture, religion, and other ideas that can simply not be spoken,
            but only shown. Art is the proxy between ideas and understanding; it
            can turn ideas into a median language known as "art" which can then
            be understood. It was, and still is, the language with no words.
          </p>
        </HoverFocusDiv>
        <HoverFocusDiv title="What is MYP Arts?">
          <p>
            MYP Arts (stands for Middle Year Program Arts) is a program offered
            by International Academy to teach students about art. MYP, more
            precisely, MYP1, is the first year of Art at International Academy.
            This is an intro to art, both for those who have past experience and
            those who don't. It teaches the fundamentals of art, analyzing art,
            and the process and mindset needed to create a work.
          </p>
        </HoverFocusDiv>
        {/* <>
          {new Array(10).fill(<></>).map((v, i: number) => (
            <HoverFocusDiv title={`random xd ${i}`}>
              <p>Just some content :) ${i}</p>
            </HoverFocusDiv>
          ))}
        </> */}
      </div>
      <footer className={style.footer}>
        <p>legal blah blah blah</p>
      </footer>
    </div>
  );
}

export default HomeRoute;
