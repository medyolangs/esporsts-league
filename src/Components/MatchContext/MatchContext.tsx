import { createContext, SetStateAction } from "react";
import { InterfaceMatchDetails } from "../Home/Matches/matchInterface";

// exporting a context to use globally
export const MatchContext = createContext({
  matchValue: [
    {
      matches: "",
      team1: "",
      team2: "",
      teamNames: "",
    },
  ],
});
