import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 placeholder-opacity-20 overflow-hidden">

            {/* Dot grid background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                backgroundImage: "radial-gradient(circle, #00ff9915 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                }}
            />

            {/* Soft glow */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-96 rounded-full"
                style={{ background: "radial-gradient(circle, #00ff9910 0%, transparent 70%" }}
            />

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text">
                Yasara Samaraweera
            </h1>

            <TypeAnimation
                sequence={[
                    "Full-Stack Developer",
                    2000,
                    "Backend Engineer",
                    2000,
                    "AI/NLP Enthusiast",
                    2000,
                ]}
                repeat={Infinity}
                className="text-accent mt-4 text-lg md:text-2xl font-mono"
            />

            <p className="mt-4 text-muted max-w-md text-sm md:text-base">
                Computer Science undegraduate building full-stack applications with React, and FastAPI, focusing on backend systems and AI/NLP-powered features.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap justify-center">
                <Link to="projects" smooth className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:brightness-110 hover:scale-105 transition cursor-pointer">
                    View Projects
                </Link>

                <a href="/assets/Yasara_Samaraweera_CV_Public.pdf" className="border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-black transition font-semibold">
                    Download CV
                </a>
            </div>
        </section>
    );
}