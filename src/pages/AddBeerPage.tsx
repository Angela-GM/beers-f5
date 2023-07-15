import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios, { AxiosResponse } from "axios";




export const AddBeerPage = () => {
  const [newBeer, setNewBeer] = useState({
    name:"",
    tagline:"",
    first_brewed:"",
    description:"",
    attenuation_level:83,
    brewers_tips:"",
    contributed_by:""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBeer((prevBeer) => ({
      ...prevBeer,
      [name]: value,
    }));

    console.log(newBeer);
    
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse = await axios.post( 'https://f5-beers-065cad3017be.herokuapp.com/beers/', newBeer);
  
      if (response.status === 200) {
        console.log('Beer created successfully');
      }
  
      
      
    } catch (error) {
      console.error('Error creating beer:', error);
      
    }
  }
  
  return (
    <>
      <Navbar />
      <div>
        <h1>Add new beer</h1>


      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={newBeer.name} onChange={handleChange} />
        
        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" value={newBeer.tagline} onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <textarea name="description" value={newBeer.description} onChange={handleChange}></textarea>

        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={handleChange} />

        <label htmlFor="brewers_tips">Brewer's Tips</label>
        <input type="text" name="brewers_tips" value={newBeer.brewers_tips} onChange={handleChange}/>

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleChange} />
        
        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={handleChange} />

        <button type="submit">Add Beer</button>


      </form>
      </div>
    </>
  );
};

