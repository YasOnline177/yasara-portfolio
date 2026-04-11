import SectionWrapper from "./SectionWrapper";

export default function Certificates() {
    const certs = [
        "Professional Advanced IT Course - Oracle Academy",
        "Web Design for Beginners - University of Moratuwa",
        "Java OOP - LinkedIn Learning",
        "Intro to Web Dev - LinkedIn Learning",
        "Cybersecurity Foundations - LinkedIn Learning",
    ];

    return (
        <SectionWrapper id="certificates">
            <h2 className="text-3xl mb-6">Certificates</h2>

            <div className="grid md:grid-cols-2 p-4 gap-4">
                {certs.map((c) => (
                    <div key={c} className="bg-surface p-4 rounded">
                        {c}
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}