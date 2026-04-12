import skills from "../data/skills";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
    return (
        <SectionWrapper id="skills">

            <h2 className="text-3xl mb-12">Skills</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (

                    <div key={category} className="bg-surface p-6 rounded-xl border border-white/10 hover:border-accent/30 transition cursor-default">
                        
                        <h3 className="text-sm uppercase tracking-wide text-muted mb-4">{category}</h3>

                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span key={skill} className="text-sm px-3 py-1 rounded-full border border-white/10 text-white/70 hover:text-white transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
            ))}
            </div>
        </SectionWrapper>
    );
}