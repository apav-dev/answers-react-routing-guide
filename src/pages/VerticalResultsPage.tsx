import {
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import { StandardSection } from "@yext/answers-react-components";
import { useEffect } from "react";

interface VerticalResultsPageProps {
  verticalKey: string;
}

export const VerticalResultsPage = ({
  verticalKey,
}: VerticalResultsPageProps) => {
  const answersActions = useAnswersActions();

  const verticalResults = useAnswersState((state) => state.vertical.results);

  useEffect(() => {
    answersActions.setVertical(verticalKey);
    answersActions.executeVerticalQuery();
  }, [verticalKey]);

  return (
    <StandardSection
      verticalKey={verticalKey}
      results={verticalResults ?? []}
    />
  );
};
