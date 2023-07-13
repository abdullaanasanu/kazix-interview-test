import React from "react";
import Image from "next/image";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMatches } from "@/store/actions/matchAction";
import classNames from "classnames";

export default function UpcomingMatchCard({ match }) {
  const matchList = useSelector((state) => state.matchList);
  const dispatch = useDispatch();

  const isSelectedMatch = matchList.selectedMatches.find(
    (selectedMatch) => selectedMatch.match.id == match.id
  );

  const handleSelect = (type, rate) => {
    let { selectedMatches } = matchList;
    let selectedMatchIndex = selectedMatches.findIndex(
      (selectedMatch) => selectedMatch.match.id == match.id
    );
    if (selectedMatchIndex < 0) {
      selectedMatches.push({
        match: match,
        selectedOption: type,
        selectedRate: rate,
      });
    } else {
      selectedMatches[selectedMatchIndex] = {
        match: match,
        selectedOption: type,
        selectedRate: rate,
      };
    }
    dispatch(setSelectedMatches(selectedMatches));
  };

  const removeMatch = () => {
    let { selectedMatches } = matchList;
    selectedMatches = selectedMatches.filter(
      (selectedMatch) => selectedMatch.match.id != match.id
    );
    dispatch(setSelectedMatches(selectedMatches));
  };

  return (
    <div className="match-card p-3 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/icons/sports.svg" className="h-4.5" />
          <p className="ml-2 font-bold text-sm">
            {match.country} - {match.league}
          </p>
        </div>
        <img src="/icons/chart.svg" className="h-4.5" />
      </div>
      <div className="flex items-center mt-2">
        <p className="time text-xs">
          {moment.unix(match.time).format("YYYY-MM-DD HH:mm")}
        </p>
        <img src="/icons/t-shirt.svg" className="h-4 ml-2" />
        <img src="/icons/steps.svg" className="h-4" />
      </div>
      <div className="teams my-3 ml-2">
        <div className="flex items-center my-1">
          <img src={match.teamOne.logo} className="team-logo" />
          <h5 className={classNames("text-sm ml-2", {"text-yellow-300": isSelectedMatch?.selectedOption == "One" }) }>{match.teamOne.name}</h5>
        </div>
        <div className="flex items-center my-1">
          <img src={match.teamTwo.logo} className="team-logo" />
          <h5 className={classNames("text-sm ml-2", {"text-yellow-300": isSelectedMatch?.selectedOption == "Two" }) }>{match.teamTwo.name}</h5>
        </div>
      </div>
      <h4 className="font-bold text-sm">1X2</h4>
      <div className="my-3 flex justify-between">
        <div className="w-11/12 grid grid-cols-3 gap-1.5">
          <button
            className={classNames(
              "btn-action py-2 px-3 flex justify-between items-center rounded-full text-sm font-bold",
              { "btn-selected": isSelectedMatch?.selectedOption == "One" }
            )}
            onClick={() => handleSelect("One", match.teamOneRate)}
          >
            <p>1</p>
            <p>{match.teamOneRate}</p>
          </button>
          <button
            className={classNames(
              "btn-action py-2 px-3 flex justify-between items-center rounded-full text-sm font-bold",
              { "btn-selected": isSelectedMatch?.selectedOption == "Draw" }
            )}
            onClick={() => handleSelect("Draw", match.drawRate)}
          >
            <p>Draw</p>
            <p>{match.drawRate}</p>
          </button>
          <button
            className={classNames(
              "btn-action py-2 px-3 flex justify-between items-center rounded-full text-sm font-bold",
              { "btn-selected": isSelectedMatch?.selectedOption == "Two" }
            )}
            onClick={() => handleSelect("Two", match.teamTwoRate)}
          >
            <p>2</p>
            <p>{match.teamTwoRate}</p>
          </button>
        </div>
        <div>
          {isSelectedMatch ? (
            <button
              className="btn-action mx-1 px-3 h-full flex justify-between items-center rounded-full text-sm font-bold"
              onClick={removeMatch}
            >
              X
            </button>
          ) : (
            <button className="btn-action mx-1 px-2 h-full flex justify-between items-center rounded-full text-sm font-bold">
              <img src="/icons/chevron.svg" className="h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
