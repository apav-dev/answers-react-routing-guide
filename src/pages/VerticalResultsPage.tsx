import { StandardCard, VerticalResults } from "@yext/answers-react-components";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";

interface VerticalResultsPageProps {
  verticalKey: string;
}

export const VerticalResultsPage = ({
  verticalKey,
}: VerticalResultsPageProps) => {
  usePageSetupEffect(verticalKey);

  return <VerticalResults CardComponent={StandardCard} />;
};
