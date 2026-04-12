import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="fixed- w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50 p-4 flex justify-between items-center">
            <h1 className="text-accent font-mono">Yasara</h1>

            <div className="space-x-6" hidden md:flex>
                {["about", "skills", "projects", "contact"].map((item) => (
                    <Link key={item} to={item} smooth className="cursor-pointer">
                        {item}
                    </Link>
                ))}
            </div>

            <a href="/assets/Yasara_Samaraweera_CV_Public.pdf" className="text-accent">
                CV
            </a>
        </nav>
    );
}