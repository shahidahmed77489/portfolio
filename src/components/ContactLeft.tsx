import { contactImg } from "../assets";
import SocialLinkd from "./SocialLinkd";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mohammed Shahid</h3>
        <p className="text-lg font-normal text-gray-400">
          Forntend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm a React developer with one 
          year of experience, specializing in 
          JavaScript and modern front-end 
          technologies. I create responsive, 
          user-friendly web applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8809487711</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ms6992902@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
         <SocialLinkd/>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
