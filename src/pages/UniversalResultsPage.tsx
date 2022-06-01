import { useAnswersActions } from "@yext/answers-headless-react";
import { UniversalResults } from "@yext/answers-react-components";
import { useEffect } from "react";

const universalResultsConfig = {
  events: {
    label: "Events",
  },
  locations: {
    label: "Locations",
  },
  artists: {
    label: "Artists",
  },
};

export const UniversalResultsPage = () => {
  const answersActions = useAnswersActions();

  useEffect(() => {
    answersActions.setUniversal();
    answersActions.executeUniversalQuery();
  }, []);

  return <UniversalResults verticalConfigMap={universalResultsConfig} />;
};
