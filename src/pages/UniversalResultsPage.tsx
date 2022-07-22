import { UniversalResults } from "@yext/answers-react-components";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";

const universalResultsConfig = {
  events: {
    label: "Events",
    viewAllButton: true,
  },
  locations: {
    label: "Locations",
    viewAllButton: true,
  },
  artists: {
    label: "Artists",
    viewAllButton: true,
  },
};

export const UniversalResultsPage = () => {
  usePageSetupEffect();

  return <UniversalResults verticalConfigMap={universalResultsConfig} />;
};
