import React from "react";
import Long from "../Cards/Long";
import Back from "../Cards/Back";
import Slide from "../Cards/Slide";
import Arive from "../Cards/Arive";
import Realtime from "../Cards/Realtime";

function FeatureSection() {
  return (
    <div className=" bg-neutral-950 w-full min-h-screen p-8 flex justify-center items-center flex-col gap-8">
      <div className="flex gap-8 ">
        <Long />
        <Back />
      </div>
      <div className="flex gap-8">
        <Slide />
        <Arive />
        <Realtime />
      </div>
    </div>
  );
}

export default FeatureSection;
