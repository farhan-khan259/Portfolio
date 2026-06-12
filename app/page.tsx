import { Navbar } from "@/components/ui/Navbar";
import { TopBar } from "@/components/ui/TopBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="relative overflow-x-hidden w-full">
            <TopBar />
            <div className="hidden sm:block">
                <Navbar />
            </div>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
        </main>
    );
}
