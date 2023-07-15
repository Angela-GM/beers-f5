import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </>
  );
};

