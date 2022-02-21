import './App.css';
import Tmdb from './Tmdb';
import { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      //get list ALL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //get Feature
      let originals = list.filter( i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () =>{
        if(window.scrollY > 10) {
          setBlackHeader(true)
        }else {
          setBlackHeader(false)
        }
    }

    window.addEventListener('scroll', scrollListener);
    return () => { window.removeEventListener('scroll', scrollListener)};
  }, [])

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featureData && 
        <FeaturedMovie item={featureData}/>
      }


      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <Footer />

      {movieList <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }

    </div>
  )
}

export default App;
