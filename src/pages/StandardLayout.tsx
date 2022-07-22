import { SearchBar } from "@yext/answers-react-components";
import { NavBar } from "../components/NavBar";
import { useSearchParams } from "react-router-dom";

export interface StandardLayoutProps {
  page: JSX.Element;
}

export const StandardLayout = ({ page }: StandardLayoutProps) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    const { query } = searchEventData;
    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }

    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <NavBar />
      {page}
    </>
  );
};
