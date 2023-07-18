import {Beer} from '../pages/AllBeersPage'

function CardDetaill({...beer}: Beer) {
  return (
    <div className='card-detail'>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <p>{beer.attenuation_level.toString()}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>

    </div>
  )
}

export default CardDetaill