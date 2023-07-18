import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Beer } from "./AllBeersPage"


export const BeersDetailPage = () => {

  const { beerId } = useParams<{ beerId: string }>();



  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response: AxiosResponse<Beer[]> = await axios.get(
          'https://f5-beers-065cad3017be.herokuapp.com/beers'
        );
        if (response.status === 200) {
          const data: Beer[] = response.data;
          setBeers(data);
        }
      } catch (error) {
        console.error({
          message: "\n\nInvalid endpoint: `/beers/`. Did you mean `/beers`?\n",
          code: 404,
        });
      } 
    };
    void fetchBeers();
  }, [beerId]);



  const beer = beers.find((beer) => beer._id === beerId);
console.log(beers);
  
  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    {/* <CardDetaill _id={beer._id} image_url={beer.image_url} name={beer.name} tagline={beer.tagline} first_brewed={beer.first_brewed} attenuation_level={beer.attenuation_level} description={beer.description} contributed_by={beer.contributed_by} /> */}
    <div>
    <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />      
      <h2>Tagline: {beer.tagline}</h2>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>

    </div>
    
    </>
  );
};