import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
// import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";
import  projectOne  from "../assets/stock-market.jpg";
import projectTwo from "../assets/e-commerce.jpg"
import projectThree from "../assets/analog.jpg"
import projectFour from "../assets/search-bar.jpg"
import projectFive from "../assets/shopping-cart.jpg"
import projectSix from "../assets/speech-recognization.jpg"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="UPSTOCKS DASHBOARD"
            des="Upstock dashboard streamlines inventory management, providing real-time insights into stock levels, sales, and analytics, optimizing efficiency and decision-making for businesses."
            src={projectOne}
            links = {"https://stock-market-with-react.netlify.app/"}

          />
          <ProjectsCard
            title="E-commerce Website"
            des="
E-commerce website facilitates online buying and selling. It showcases products, enables transactions, and enhances user experience, fostering digital commerce growth."
            src={projectTwo}
            links = {"https://heroic-boba-ce79c9.netlify.app"}

          />
          <ProjectsCard
            title="ANALOG WATCH"
            des="Analog watch displays time using traditional hands on a dial. It blends classic design with precise timekeeping for a timeless accessory."
            src={projectThree}
            links = {"https://cheery-macaron-642b37.netlify.app"}
          />
          <ProjectsCard
            title="IMAGE SEARCH MENU"
            des="Image search menu allows users to find specific images by visually selecting from a menu, streamlining the search process effectively."
            src={projectFour}
            links = {"https://euphonious-monstera-fa0650.netlify.app"}

          />
          <ProjectsCard
            title="SHOPPING CART"
            des="Image shopping website integrates visual search, letting users shop by uploading or searching with images, enhancing the online shopping experience."
            src={projectFive}
            links = {"https://heroic-boba-ce79c9.netlify.app"}

          />
          <ProjectsCard
            title="SPEECH RECOGNIZATION"
            des="Speech recognition technology converts spoken language into text, enabling hands-free control, voice commands, and transcription for various applications and devices."
            src={projectSix}
            links = {"https://zingy-marshmallow-11848e.netlify.app"}

          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
