export default function SearchBar() {
    return (
        <div className="mt-10">
            {/* Wrapper supaya badge "Get the schedule" bisa nempel di atas pill */}
            <div className="relative w-full max-w-xl">
                {/* Badge di atas */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-6 py-2 rounded-full bg-blue-900 text-white text-xs font-medium shadow">
                        Get the schedule
                    </div>
                </div>

                {/* Pill container */}
                <div
                    className="
            rounded-full
            p-2
            shadow-sm
            border border-white/70
            bg-gradient-to-r from-pink-200 via-cyan-100 to-green-200
          "
                >
                    <div className="flex items-center gap-3 bg-white/60 rounded-full px-4 py-3">
                        {/* Location */}
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            {/* icon pin */}
                            <div className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center">
                                <span className="text-blue-700">📍</span>
                            </div>

                            <div className="min-w-0">
                                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                                    Location <span className="text-slate-400">▾</span>
                                </div>
                                <div className="text-xs font-medium text-slate-800 truncate">
                                    Jakarta, Indonesia
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-8 bg-white/80" />

                        {/* Date */}
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            {/* icon calendar */}
                            <div className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center">
                                <span className="text-blue-700">📅</span>
                            </div>

                            <div className="min-w-0">
                                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                                    Date <span className="text-slate-400">▾</span>
                                </div>
                                <div className="text-xs font-medium text-slate-800 truncate">
                                    28/08/2021
                                </div>
                            </div>
                        </div>

                        {/* Search button */}
                        <button
                            className="
                w-11 h-11 rounded-full
                bg-orange-400 hover:bg-orange-500
                text-white
                flex items-center justify-center
                shadow
                transition
              "
                            aria-label="Search"
                        >
                            🔍
                        </button>
                    </div>
                </div>
            </div>

            {/* Popular search */}
            <p className="mt-3 text-[11px] text-slate-500">
                Popular search :{" "}
                <span className="text-slate-600">
                    Kuta beach, Raja Ampat Beach, Borobudur temple
                </span>
            </p>
        </div>
    );
}
