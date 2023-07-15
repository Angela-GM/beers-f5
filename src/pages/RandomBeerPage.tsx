import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios, { AxiosResponse } from "axios";
import { Beer } from "./AllBeersPage";
import CardDetaill from "../components/CardDetaill";

export const RandomBeerPage = () => {
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response: AxiosResponse<Beer> = await axios.get(
          'https://f5-beers-065cad3017be.herokuapp.com/beers/random'
        );
        if (response.status === 200) {
          const data: Beer = response.data;
          setBeer(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    void fetchBeer();
  }, []);

  return (
    <>
      <Navbar />
      {beer && (
        <CardDetaill
          _id={beer._id}
          image_url={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
          first_brewed={beer.first_brewed}
          attenuation_level={beer.attenuation_level}
          description={beer.description}
          contributed_by={beer.contributed_by}
        />
      )}
    </>
  );
};
