import { useAnswersActions } from "@yext/answers-headless-react";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const usePageSetupEffect = (verticalKey?: string) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const answersActions = useAnswersActions();

  useEffect(() => {
    answersActions.setQuery(searchParams.get("query") || "");

    if (verticalKey) {
      answersActions.setVertical(verticalKey);
      answersActions.executeVerticalQuery();
    } else {
      answersActions.setUniversal();
      answersActions.executeUniversalQuery();
    }
  }, [location]);
};
