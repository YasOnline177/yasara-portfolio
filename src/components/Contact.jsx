import { label } from "framer-motion/client";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Icon } from "lucide-react";

const links = [
  { icon: FaEnvelope, label: "Email", href: "mailto:yasarasamaraweera@gmail.com "},
  { icon: FaGithub, label: "GitHub", href: "https://github.com/YasOnline177", target: "_blank"},
  {icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/yasara-samaraweera-3a4341333", target: "_blank"},
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-muted mb-10 text-sm">
          Open to internship opportunities — I'd be happy to connect.
        </p>
        <div className="flex justify-center gap-10">
          {links.map(({ icon: Icon, label, href, target }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white/60 hover:text-accent transition"
            >
              <Icon size={28} />
              <span className="text-xs font-mono">{label}</span>
            </a> 
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}