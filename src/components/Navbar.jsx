import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50 p-4 flex justify-between items-center">
            <Link to="hero" smooth className="text-accent font-mono cursor-pointer">Yasara</Link>

            <div className="hidden md:flex space-x-6 items-center">
                {["about", "skills", "projects", "certificates","contact"].map((item) => (
                    <Link key={item} to={item} smooth offset={-80} className="capitalize text-sm text-white/70 hover:text-accent transition cursor-pointer">
                        {item}
                    </Link>
                ))}
            </div>

            <a href="/assets/Yasara_Samaraweera_CV_Public.pdf" className="border border-accent text-accent text-sm px-4 py-1.5 rounded-lg hover:bg-accent hover:text-black transition">
                CV
            </a>
        </nav>
    );
}