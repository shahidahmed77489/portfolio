import { AiFillAppstore,AiOutlineMenuUnfold } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Business Stratagy"
            des="Business strategy involves planning and actions to achieve long-term goals. It aligns resources, capabilities, and market opportunities to create a competitive advantage, ensuring sustainable success in a dynamic environment."
            icon={<AiOutlineMenuUnfold/>}
          />
          <Card
            title="Web Development"
            des="Web development is the process of creating and maintaining websites. It encompasses designing, coding, and optimizing for functionality and user experience, using various programming languages, frameworks, and technologies."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Commercial-Websites"
            des="A commercial website is an online platform designed for business purposes, showcasing products or services, facilitating transactions, and enhancing customer engagement. Its primary goal is to drive sales and revenue."
            icon={<SiProgress />}
          />
          <Card
            title="Mobile Responsive"
            des="Mobile responsiveness ensures a website adapts seamlessly to various devices, providing an optimal viewing and interaction experience. It enhances user satisfaction, improves search rankings, and accommodates the diverse mobile landscape."
            icon={<FaMobile />}
          />
          <Card
            title="UI Design"
            des="User interface (UI) refers to the point of interaction between users and a digital device or application. It focuses on design elements, navigation, and functionality to optimize user experience and usability."
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="
Hosting a website involves storing its files and data on a server, making it accessible to users over the internet. Reliable hosting ensures site performance, security, and continuous availability."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
