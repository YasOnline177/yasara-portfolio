import projects from "../data/projects";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl mb-10">Projects</h2>

            {/* Featured */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {featured.map((p) => (
                    <motion.div key={p.title} className="bg-surface2 p-6 rounded-x1">
                        <h3 className="text-x1 font-semibold">{p.title}</h3>
                        <p className="text-muted mt-2">{p.description}</p>

                        <div className="flex gap-2 mt-4 flex-wrap">
                            {p.tech.map((t) => (
                                <span key={t} className="text-xs bg-surface px-2 py-1 rounded text-accent">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex gap-4">
                            <a href={p.github}>GitHub</a>
                            {p.live && <a href={p.live}>Live</a>}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 gap-6">
                {others.map((p) => (
                    <div key={p.title} className="bg-surface p-4 rounded">
                        <h4>{p.title}</h4>
                        <p className="text-muted text-sm">{p.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}