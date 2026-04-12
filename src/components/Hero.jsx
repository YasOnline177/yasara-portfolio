import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
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

            <div className="mt-8 flex gap-4 flex-wrap justify-center">
                <Link to="projects" smooth className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
                    View Projects
                </Link>

                <a href="/assets/Yasara_Samaraweera_CV_Public.pdf" className="border border-white/20 px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition">
                    Download CV
                </a>
            </div>
        </section>
    );
}