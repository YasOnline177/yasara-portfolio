import SectionWrapper from "./SectionWrapper";
import { BadgeCheck } from "lucide-react";

export default function Certificates() {
    const certs = [
        { name: "Professional Advanced IT Course", issuer: "Oracle Academy via SLT Mobitel" },
        { name: "Web Design for Beginners", issuer: "University of Moratuwa" },
        { name: "Java Object-Oriented Programming", issuer: "LinkedIn Learning" },
        { name: "Learning Java 17", issuer: "LinkedIn Learning" },
        { name: "Introduction to Web Design and Development", issuer: "LinkedIn Learning" },
        { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", link: "https://www.credly.com/badges/4e51caa7-652e-475e-92a7-21fcb4033340" },
    ];

    return (
        <SectionWrapper id="certificates">
            <h2 className="text-3xl font-bold mb-12">Certificates</h2>
            <div className="grid md:grid-cols-2 p-4 gap-4">
                {certs.map((c) => {
                    const CardContent = (
                        <>
                            <BadgeCheck className="text-accent mt-0.5 shrink-0" size={18} />
                            <div>
                                <p className="font-medium text-sm">{c.name}</p>
                                <p className="text-muted text-xs mt-0.5">{c.issuer}</p>
                            </div>
                        </>
                    );

                    return c.link ? (
                        <a
                            key={c.name}
                            href={c.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-surface p-4 rounded-xl border border-white/10 hover:border-accent/40 transition flex items-start gap-3 cursor-pointer"
                        >
                            {CardContent}
                        </a>
                    ) : (
                        <div
                            key={c.name}
                            className="bg-surface p-4 rounded-xl border border-white/10 hover:border-accent/30 transition flex items-start gap-3 cursor-default"
                        >
                            {CardContent}
                        </div>
                    );
                })}
            </div>
        </SectionWrapper >
    );
}