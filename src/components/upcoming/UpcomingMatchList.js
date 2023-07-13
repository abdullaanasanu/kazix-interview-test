import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import UpcomingMatchCard from "./UpcomingMatchCard";
import Link from "next/link";

export default function UpcomingMatchList() {
  const matchList = useSelector((state) => state.matchList);

  return (
    <section className="mt-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Top Soccer Games</h3>
        <div className="btn-area flex items-center">
          <Link href="/games">
            <button className="px-5 py-3 btn-main rounded-lg font-bold text-xs mr-4">
              View All
            </button>
          </Link>

          <div className="max-md:hidden">
            <button className="px-2 py-2 btn-arrow rounded-lg mx-1">
              <img src="/icons/left-arrow.svg" className="h-5" />
            </button>
            <button className="px-2 py-2 btn-arrow rounded-lg mx-1">
              <img src="/icons/right-arrow.svg" className="h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3 mt-4">
        {matchList.matches.map((match, index) => (
          <UpcomingMatchCard match={match} key={index} />
        ))}
      </div>
    </section>
  );
}
