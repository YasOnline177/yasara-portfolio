import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl mb-6 text-center">Contact</h2>

      <div className="flex justify-center gap-6 text-accent text-2xl">
        <a href="mailto:yasarasamaraweera@gmail.com">
          <FaEnvelope className="hover:scale-110 transition" />
        </a>

        <a href="https://github.com/YasOnline177">
          <FaGithub className="hover:scale-110 transition"/>
        </a>

        <a href="https://linkedin.com/in/yasara-samaraweera-3a4341333">
          <FaLinkedin className="hover:scale-110 transition" />
        </a>
      </div>
    </SectionWrapper>
  );
}