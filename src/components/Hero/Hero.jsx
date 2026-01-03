import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
    return (
        <section className="grid lg:grid-cols-2 gap-10 items-center py-10">
            <HeroLeft />
            <HeroRight />
        </section>
    );
}