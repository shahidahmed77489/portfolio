import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiTailwindcss, SiHtml5, SiJavascript } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import SocialLinkd from "./SocialLinkd";
import { FaReact } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Frontend Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 500,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Md Shahid</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I'm a React developer with one 
          year of experience, specializing in 
          JavaScript and modern front-end 
          technologies. I create responsive, 
          user-friendly web applications, 
          collaborate effectively, and strive 
          for continuous improvement in 
          web development.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
           <SocialLinkd/>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiHtml5/>
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
