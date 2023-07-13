import React from "react";

export default function CompletedMatchCard({match}) {
  return (
    <div className="finished-match-card pt-4 pb-2 px-3 rounded-lg">
      <div className="flex items-center">
        <img src="/icons/sport-icons.svg" className="h-4" />
        <p className="ml-2">{match.country}</p>
        <img src="/icons/right-arrow.svg" className="h-4 ml-2" />
        <p className="ml-2">{match.league}</p>
      </div>
      <div className="text-center pt-10">
        <h4 className="font-bold text-lg">
          {match.teamOne.name}
          <span className="px-3">-</span>{match.teamTwo.name}
        </h4>
        <div className="flex justify-center mt-3">
          <div className="h-10 w-10 mx-1 font-bold text-2xl score-box flex items-center justify-center rounded">
          {match.teamOneScore}
          </div>
          <div className="h-10 w-10 mx-1 font-bold text-2xl score-box flex items-center justify-center rounded">
          {match.teamTwoScore}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <div className="rate-box flex items-center justify-between mx-1 px-2 py-1 rounded text-sm font-bold">
          <p>1</p>
          <p>{match.teamOneRate}</p>
        </div>
        <div className="rate-box flex items-center justify-between mx-1 px-2 py-1 rounded text-sm font-bold">
          <p>Draw</p>
          <p>{match.drawRate}</p>
        </div>
        <div className="rate-box flex items-center justify-between mx-1 px-2 py-1 rounded text-sm font-bold">
          <p>2</p>
          <p>{match.teamTwoRate}</p>
        </div>
      </div>
    </div>
  );
}
