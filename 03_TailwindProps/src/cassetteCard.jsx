import "./cassette.css";

const Screw = ({ className = "" }) => (
  <div
    className={`w-3 h-3 rounded-full bg-gray-300 border border-black flex items-center justify-center text-[8px] text-black ${className}`}
  >
    +
  </div>
);

export default function CassetteCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="w-[300px] h-[200px] bg-[#252525] rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_rgba(0,0,0,0.3),0_-3px_0_rgba(0,0,0,0.2)_inset] relative">

        {/* Top Screws */}
        <div className="flex justify-between px-2 pt-2">
          <Screw />
          <Screw />
        </div>

        {/* Label */}
        <div
          className="w-[230px] h-[115px] mx-auto mt-2 bg-[#FFFDD0] rounded"
          style={{
            clipPath:
              "polygon(5% 0,95% 0,100% 10%,100% 100%,0 100%,0 10%)",
          }}
        >
          {/* Lines */}
          <div className="w-[200px] h-px bg-black mx-auto mt-4"></div>
          <div className="w-[200px] h-px bg-black mx-auto mt-4"></div>

          {/* Yellow Section */}
          <div className="flex bg-yellow-500 h-[50px] mt-6">

            {/* Tape Roll */}
            <div className="flex items-center ml-12 w-32 h-8 rounded-full bg-[#171717]">

              <div className="wheel ml-1"></div>

              <div className="w-12 h-6 bg-[#252525] mx-3"></div>

              <div className="wheel"></div>
            </div>

            <p className="ml-6 self-center font-semibold">90</p>
          </div>

          {/* Orange Strip */}
          <div className="h-[18px] bg-orange-600 flex items-center justify-center rounded-b">
            <p className="text-[10px]">2×30min</p>
          </div>
        </div>

        {/* Bottom Piece */}
        <div className="drop-shadow-[4px_4px_14px_rgba(0,0,0,1)]">
          <div
            className="w-[150px] h-[50px] bg-[#252525] mx-auto"
            style={{
              clipPath: "polygon(10% 0%,90% 0%,100% 100%,0% 100%)",
            }}
          >
            <div className="relative">
              <div className="absolute left-6 top-8 w-2 h-2 bg-gray-400 rounded-full"></div>

              <div className="absolute left-12 top-4 w-2 h-2 bg-gray-400 rounded-sm"></div>

              <div className="absolute left-[68px] top-0">
                <Screw />
              </div>

              <div className="absolute left-24 top-2 w-2 h-2 bg-gray-400 rounded-sm"></div>

              <div className="absolute left-28 top-8 w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Screws */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between">
          <Screw />
          <Screw />
        </div>
      </div>
    </div>
  );
}