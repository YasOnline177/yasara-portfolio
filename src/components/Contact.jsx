import SectionWrapper from "./SectionWrapper";
import { Mail, Github, LinkedIn } from "lucide-react";

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <h2 className="text-3xl mb-6 text-center">Contact</h2>

            <div className="flex justify-center gap-6 text-accent">
                <a href="mailto:yasarasamaraweera@gmail.com">
                    <Mail size={28} />
                </a>
                
                <a href="https://github.com/YasOnline177">
                    <Github size={28} />
                </a>

                <a href="https://linkedin.com/in/yasara-samaraweera-3a4341333">
                    <LinkedIn size={28} />
                </a>
            </div>
        </SectionWrapper>
    );
}