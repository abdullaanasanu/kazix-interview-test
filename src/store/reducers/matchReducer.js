import { GET_MATCHES, SET_SELECTED_MATCH } from "../types";

const initialState = {
  matches: [
    {
      id: 1,
      league: "Premier League",
      country: "England",
      time: 1691893800,
      teamOne: {
        name: "Arsenal",
        logo: "/assets/team-logo/Arsenal.png",
      },
      teamTwo: {
        name: "Liverpool",
        logo: "/assets/team-logo/liverpool.png",
      },
      teamOneRate: 1.5,
      teamTwoRate: 1.42,
      drawRate: 1.08,
    },
    {
      id: 2,
      league: "Bundesliga",
      country: "Germany",
      time: 1691202600,
      teamOne: {
        name: "Bayern Munich",
        logo: "/assets/team-logo/Bayern_munchen.png",
      },
      teamTwo: {
        name: "Borussia Dortmund",
        logo: "/assets/team-logo/Bvb.png",
      },
      teamOneRate: 1.2,
      teamTwoRate: 1.65,
      drawRate: 1.22,
    },
    {
      id: 3,
      league: "UEFA",
      country: "Europe",
      time: 1691893800,
      teamOne: {
        name: "Arsenal",
        logo: "/assets/team-logo/Arsenal.png",
      },
      teamTwo: {
        name: "AC Milan",
        logo: "/assets/team-logo/A_C_Milan.png",
      },
      teamOneRate: 1.5,
      teamTwoRate: 2.42,
      drawRate: 1.28,
    },
    {
      id: 4,
      league: "UEFA",
      country: "Europe",
      time: 1690259400,
      teamOne: {
        name: "AC Milan",
        logo: "/assets/team-logo/A_C_Milan.png",
      },
      teamTwo: {
        name: "Real Madrid",
        logo: "/assets/team-logo/Real_madrid.png",
      },
      teamOneRate: 1.8,
      teamTwoRate: 1.42,
      drawRate: 1.15,
    },
    {
      id: 5,
      league: "La Liga",
      country: "Spain",
      time: 1691855400,
      teamOne: {
        name: "Barcelona",
        logo: "/assets/team-logo/barcelona.png",
      },
      teamTwo: {
        name: "Real Madrid",
        logo: "/assets/team-logo/Real_madrid.png",
      },
      teamOneRate: 1.6,
      teamTwoRate: 1.8,
      drawRate: 1.2,
    },
    {
      id: 6,
      league: "Serie A",
      country: "Italy",
      time: 1691862600,
      teamOne: {
        name: "Juventus",
        logo: "/assets/team-logo/Juventus.png",
      },
      teamTwo: {
        name: "Inter Milan",
        logo: "/assets/team-logo/Inter_milan.png",
      },
      teamOneRate: 1.75,
      teamTwoRate: 1.9,
      drawRate: 1.3,
    },
    {
      id: 7,
      league: "Ligue 1",
      country: "France",
      time: 1691866200,
      teamOne: {
        name: "Paris Saint-Germain",
        logo: "/assets/team-logo/PSG.png",
      },
      teamTwo: {
        name: "Olympique Lyonnais",
        logo: "/assets/team-logo/Olympique_Lyonnais.png",
      },
      teamOneRate: 1.4,
      teamTwoRate: 1.6,
      drawRate: 1.1,
    },
  ],
  loading: true,
  selectedMatches: [],
  liveMatches: [
    {
      id: 4,
      league: "UEFA",
      country: "Europe",
      time: 1690259400,
      teamOne: {
        name: "AC Milan",
        logo: "/assets/team-logo/A_C_Milan.png",
      },
      teamTwo: {
        name: "Real Madrid",
        logo: "/assets/team-logo/Real_madrid.png",
      },
      teamOneRate: 1.8,
      teamTwoRate: 1.42,
      drawRate: 1.15,
      teamOneScore: 4,
      teamTwoScore: 1,
    },
    {
        id: 4,
        league: "Premier League",
        country: "England",
        time: 1690259400,
        teamOne: {
          name: "Arsenal",
          logo: "/assets/team-logo/Arsenal.png",
        },
        teamTwo: {
          name: "Tottenham",
          logo: "/assets/team-logo/Tottenham_Hotspur.png",
        },
        teamOneRate: 1.4,
        teamTwoRate: 1.95,
        drawRate: 1.3,
        teamOneScore: 2,
        teamTwoScore: 1,
      },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
        matches: action.payload,
      };
    case SET_SELECTED_MATCH:
      return {
        ...state,
        selectedMatches: action.payload,
      };
    default:
      return state;
  }
}
