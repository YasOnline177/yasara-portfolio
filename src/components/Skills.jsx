import skills from "../data/skills";
export default function Skills() {
    return (
        <section id="skills" className="p-10">
            <h2 className="text-3xl mb-6">Skills</h2>

            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-4">
                    <h3 className="text-accent">{category}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {items.map((skill) => (
                            <span key={skill} className="bg-surface px-3 py-1 rounded">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}