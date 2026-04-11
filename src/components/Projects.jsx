import projects from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="p-10">
            <h2 className="text-3xl mb-6">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <div key={p.title} className="bg-surface2 p-6 rounded">
                        <h3 className="text-x1">{p.title}</h3>
                        <p className="text-muted">{p.description}</p>

                        <div className="flex gap-2 mt-2 flex-wrap">
                            {p.tech.map((t) => (
                                <span key={t} className="text-accent text-sm">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-3 flex gap-4">
                            <a href={p.github}>GitHub</a>
                            {p.live && <a href={p.live}>Live</a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}