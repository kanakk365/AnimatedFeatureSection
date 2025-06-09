import React from "react";

function FeatureSection() {
  return (
    <div
      className="w-full min-h-screen p-8"
      style={{ backgroundColor: "#151517" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 h-[800px] grid-rows-2">
          {/* Large card - spans 3 columns and 1 row */}
          <div
            className="md:col-span-3 lg:col-span-3 row-span-1 rounded-xl border border-gray-700"
            style={{ backgroundColor: "#1b1b1b" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Large Card</p>
            </div>
          </div>

          {/* Medium card - top right */}
          <div
            className="md:col-span-3 lg:col-span-3 row-span-1 rounded-xl border border-gray-700"
            style={{ backgroundColor: "#1b1b1b" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Medium Card</p>
            </div>
          </div>

          {/* Small card - bottom left */}
          <div
            className="md:col-span-2 lg:col-span-2 row-span-1 rounded-xl border border-gray-700"
            style={{ backgroundColor: "#1b1b1b" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Small Card</p>
            </div>
          </div>

          {/* Small card - bottom center */}
          <div
            className="md:col-span-2 lg:col-span-2 row-span-1 rounded-xl border border-gray-700"
            style={{ backgroundColor: "#1b1b1b" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Small Card</p>
            </div>
          </div>

          {/* Small card - bottom right */}
          <div
            className="md:col-span-2 lg:col-span-2 row-span-1 rounded-xl border border-gray-700"
            style={{ backgroundColor: "#1b1b1b" }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Small Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
