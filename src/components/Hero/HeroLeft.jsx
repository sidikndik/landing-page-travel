import SearchBar from "./SearchBar";

export default function HeroLeft() {
    return (
        <div>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-slate-800">
                Make Your Trip Memorable <br />
                Book With <span className="text-orange-500">Touravel</span>
            </h1>

            <p className="mt-4 max-w-md text-sm text-slate-500 leading-6">
                We have partners with several destinations that you might feel at home there,
                we will guide you with our best service.
            </p>

            {/* checklist */}
            <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-600/15 flex items-center justify-center text-blue-700 text-[10px]">
                        ✓
                    </span>
                    Plan your trip
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-600/15 flex items-center justify-center text-blue-700 text-[10px]">
                        ✓
                    </span>
                    Fly with us
                </div>
            </div>

            <SearchBar />
        </div>
    );
}
