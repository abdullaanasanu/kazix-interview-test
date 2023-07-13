import React from "react";
import { useSelector } from "react-redux";
import CompletedMatchCard from "./CompletedMatchCard";

export default function CompletedMatchList() {
  const matchList = useSelector((state) => state.matchList);

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 gap-3 my-2 max-md:grid-cols-1">
        {matchList.liveMatches.map((match, index) => (
          <CompletedMatchCard match={match} key={index} />
        ))}
      </div>
    </section>
  );
}
