import { Link } from "react-router-dom";
import allBeers from "../assets/allBeers.jpg";
import randomBeer from "../assets/randomBeer.jpg";
import newBeer from "../assets/newBeer.jpg";

export const HomePage = () => {
  return (
    <section>
      <article>
        <Link to="/beers">
          <img src={allBeers} alt="all Beers" className="img-fluid" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eius sit nihil ex sapiente nisi, placeat necessitatibus tempora
            eveniet consectetur quo maxime odio molestias magni delectus sed,
            laboriosam molestiae veritatis?
          </p>
        </Link>
      </article>
      <article>
        <Link to="/random-beer">
          <img src={randomBeer} alt="random Beers" className="img-fluid" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
            praesentium recusandae perferendis ex ad maiores odio quaerat qui
            accusantium blanditiis officiis quam eligendi unde aspernatur sed,
            maxime eos quibusdam veritatis.
          </p>
        </Link>
      </article>
      <article>
        <Link to="/new-beer">
          <img src={newBeer} alt="new Beers" className="img-fluid" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et cum
            excepturi quam quis! Quaerat, ducimus laborum. Hic reprehenderit et
            itaque sit, asperiores perferendis ut eveniet, ipsam necessitatibus
            earum fugiat praesentium?
          </p>
        </Link>
      </article>
    </section>
  );
};
