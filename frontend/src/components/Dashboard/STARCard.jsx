import React from "react";
import STARSubCard from "./STARSubCard";
import { FaTools } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { GiSkeleton } from "react-icons/gi";

function STARCard({ STARTitle, starfb }) {
  return (
    <div className="col-span-1 row-span-1 flex flex-col rounded-lg duration-300 h-full w-full justify-around gap-y-10">
      <div className="col-span-2 row-span-1 h-full w-full text-center font-lg text-2xl">
        <p className="rounded-lg  py-2 border-b ">{STARTitle}</p>
      </div>
      <div className="grid grid-rows-2 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 h-full w-full rounded-md">
        <div className="col-span-1 row-span-1 h-full w-full">
          <STARSubCard
            icon={<GiBiceps />}
            title={"Strength"}
            param={starfb[1]}
          />
        </div>

        <div className="col-span-1 row-span-2 h-full w-full">
          <STARSubCard
            icon={<FaTools />}
            title={"Improvement"}
            param={starfb[3]}
          />
        </div>

        <div className="col-span-1 row-span-1 h-full w-full">
          <STARSubCard
            icon={<GiSkeleton />}
            title={"Weakness"}
            param={starfb[2]}
          />
        </div>
      </div>
    </div>
  );
}

export default STARCard;
