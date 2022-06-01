import { SearchBar } from "@yext/answers-react-components";
import { NavBar } from "../components/NavBar";

export interface StandardLayoutProps {
  page: JSX.Element;
}

export const StandardLayout = ({ page }: StandardLayoutProps) => {
  return (
    <>
      <SearchBar />
      <NavBar />
      {page}
    </>
  );
};
