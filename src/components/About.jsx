import SectionWrapper from "./SectionWrapper";

export default function About() {
    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl mb-12">About</h2>

            <div className="grid md:grid-cols-2 gap-10 items-start">
                <p className="text-muted leading-relaxed">
                    Computer Science undergraduate at IIT affiliated with the
                    University of Westminster, UK. Experienced in full-stack
                    development using React and FastAPI, with a focus on backend
                    systems and AI/NLP applications.
                </p>

                <div className="space-y-4 cursor-default">
                    <div className="bg-surface p-4 rounded-xl border border-white/10 hover:border-accent/30 transition">
                        <p className="font-medium">BSc Computer Science</p>
                        <p className="text-muted text-sm">IIT - 2024-Present</p>
                    </div>

                    <div className="bg-surface p-4 rounded-xl border border-white/10 hover:border-accent/30 transition">
                        <p className="font-medium">Foundation Certificate</p>
                        <p className="text-muted text-sm">IIT - 2023-2024</p>
                    </div>

                    <div className="bg-surface p-4 rounded-xl border border-white/10 hover:border-accent/30 transition">
                        <p className="font-medium">GCE O/L</p>
                        <p className="text-muted text-sm">Hillwood College - 2023</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}