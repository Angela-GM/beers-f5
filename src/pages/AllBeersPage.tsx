import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
export interface Beer {
  _id: string,
  image_url: string,
  name: string,
  tagline: string,
  first_brewed: string,
  attenuation_level: number,
  description: string,
  contributed_by: string,
}

export const AllBeersPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
     setSearchQuery(event.target.value)

  }

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response: AxiosResponse<Beer[]> = await axios.get(searchQuery === "" ? 'https://f5-beers-065cad3017be.herokuapp.com/beers/' :
        `https://f5-beers-065cad3017be.herokuapp.com/beers/search?q=${searchQuery}`
        
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
      } finally {
        setIsLoading(false);
      }
    };
    void fetchBeers();
  }, [searchQuery]);
  return (
    <>
      <Navbar />
      <div>
        <h1>Todas las cervezas</h1>
         <input type="text"  value={searchQuery}
      onChange={handleSearchQuery}
      placeholder="Buscar cerveza..." />
        {isLoading ? (
          <p>Loading(poner animacion)...</p>
        ) : (
          <div>
            {beers.map((beer) => (
              <div key={beer._id}>
                {beer.name}
                  <img src={beer.image_url} alt={beer.name} />
                          <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>Ver detalle</Link>

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
