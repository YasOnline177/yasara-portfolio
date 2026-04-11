import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold">Yasara Samaraweera</h1>

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
                className="text-accent mt-4"
            />

            <div className="mt-6 space-x-4">
                <Link to="projects" smooth className="bg-accent text-black px-4 py-2 cursor-pointer">
                    View Projects
                </Link>

                <a href="/assets/Yasara_Samaraweera_CV_Public.pdf" className="border px-4 py-2">
                    Download CV
                </a>
            </div>
        </section>
    );
}