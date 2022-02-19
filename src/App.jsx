import './App.css';
import Tmdb from './Tmdb';
import { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null)



  useEffect(() => {
    const loadAll = async () => {
      //get list TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //get Feature
      let originals = list.filter( i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      
    }

    loadAll();
  }, [])

  return (
    <div className='page'>

      {featureData && 
        <FeaturedMovie item={featureData}/>
      }


      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}

export default App;
