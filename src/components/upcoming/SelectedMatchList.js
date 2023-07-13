import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import UpcomingMatchCard from "./UpcomingMatchCard";

export default function SelectedMatchList() {
  const matchList = useSelector((state) => state.matchList);

  const getTotalRating = () => {
    let rate = 1;

    for (const obj of matchList.selectedMatches) {
      rate *= obj.selectedRate;
    }
    return rate;
  };

  return (
    <section className="mt-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">{matchList.selectedMatches.length == 0 ? "No Games Selected" : matchList.selectedMatches.length +" Games Selected"}</h3>
        <div className="btn-area flex items-center">
          <button className="px-5 py-2 btn-rating rounded-lg font-bold text-lg mr-4">
            Total Rate: {matchList.selectedMatches.length == 0 ? "0" : getTotalRating().toFixed(2)}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3 mt-4">
        {matchList.selectedMatches.map((match, index) => (
          <UpcomingMatchCard match={match.match} key={index} />
        ))}
      </div>
    </section>
  );
}
