import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["about", "skills", "projects", "certificates", "contact"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => setMenuOpen(false);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
            <div className="flex justify-between items-center px-6 py-4">
                <Link to="hero" smooth className="text-accent font-mono cursor-pointer" onClick={() => setMenuOpen(false)}>
                    Yasara
                </Link>

                <div className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <Link key={item} to={item} smooth spy={true} offset={-60} activeClass="!text-accent border-b border-accent" className="capitalize text-sm text-white/70 hover:text-accent transition cursor-pointer pb-0.5">
                            {item}
                        </Link>
                    ))}
                </div>

                <a href="/assets/Yasara_Samaraweera_CV_Public.pdf" className="hidden md:block border border-accent text-accent text-sm px-4 py-1.5 rounded-lg hover:bg-accent hover:text-black transition">
                    Download CV
                </a>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-white/70 hover:text-accent transition"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col px-6 pb-6 pt-2 gap-4 bg-black/80 backdrop-blur-md border-t border-white/10">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={item}
                            smooth
                            spy={true}
                            offset={-60}
                            activeClass="text-accent"
                            className="capitalize text-sm text-white/70 hover:text-accent transition cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}

                    <a 
                        href="/assets/Yasara_Samaraweera_CV_Public.pdf"
                        className="border border-accent text-accent text-sm px-4 py-2 rounded-lg hover:bg-accent hover:text-black transition text-center mt-2"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </nav>
    );
}