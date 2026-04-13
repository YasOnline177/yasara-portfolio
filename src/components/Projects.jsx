import projects from "../data/projects";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>

            {/* Featured Projects */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {featured.map((p) => (
                    <motion.div 
                        key={p.title} 
                        whileHover={{ y: -6}}
                        transition={{ duration: 0.2 }}
                        className="bg-surface2 p-6 rounded-xl border border-white/10 hover:border-accent/40 cursor-default"
                    >
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-muted mt-3 leading-relaxed">{p.description}</p>

                        <div className="flex gap-2 mt-4 flex-wrap"> 
                            {p.tech.map((t) => (
                                <span key={t} className="text-xs border border-white/30 px-2 py-1 rounded-full text-accent/70">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex gap-6 text-sm">
                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">GitHub →</a>
                            {p.live && (
                                <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Live →</a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 gap-6">
                {others.map((p) => (
                    <div key={p.title} className="bg-surface p-5 rounded-xl border border-white/10 hover:border-accent/30 transition cursor-default">
                        <h4 className="font-medium">{p.title}</h4>
                        <p className="text-muted text-sm mt-2 leading-relaxed">{p.description}</p>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs border border-white/30 px-2 py-1 rounded-full text-accent/70"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 flex gap-4 text-sm">
                            {p.github && (
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition">
                                    GitHub →
                                </a>
                            )}
                            {p.live && (
                                <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition">
                                    Live →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}