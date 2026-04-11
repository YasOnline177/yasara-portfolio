import SectionWrapper from "./SectionWrapper";

export default function About() {
    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl mb-6">About</h2>

            <p className="text-muted max-w-2xl">
                Computer Science undergraduate at IIT affiliated with 
                the University of Westminster, UK. Experienced in 
                full-stack development using React and FastAPI, with 
                additional focus on AI/NLP systems and backend architecture.
            </p>

            <div className="mt-6 space-y-2">
                <p>BSc Computer Science - IIT (2024-Present)</p>
                <p>Foundation Certificate - IIT (2023-2024)</p>
                <p>GCE O/L - Hillwood College (2023)</p>
            </div>
        </SectionWrapper>
    );
}