import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import { BeersDetailPage } from './pages/BeersDetailPage';
import { AddBeerPage } from './pages/AddBeerPage';
import { RandomBeerPage } from './pages/RandomBeerPage';
import { AllBeersPage } from './pages/AllBeersPage';
import { HomePage } from './pages/HomePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/beers",
    element: <AllBeersPage/>
  },
  {
    path: "/random-beer",
    element: <RandomBeerPage/>
  },
  {
    path: "/new-beer",
    element: <AddBeerPage/>
  },
  {
    path: "/beers/:beerId",
    element: <BeersDetailPage  />
  },
  {
    path: "*",
    element: <div>Error</div>
  }
]);

function App() {

  return (
<>
App
</>




  )
}

export default App
