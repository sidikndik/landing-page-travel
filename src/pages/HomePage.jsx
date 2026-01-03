import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#D9FBFF]">
            <div className="max-w-6xl mx-auto px-6">
                <Navbar />
                <Hero />
            </div>
        </div>
    );
}
