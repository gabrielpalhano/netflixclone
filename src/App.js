import react, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import movieRow from './components/movieRow';


export default() => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async() => {
      // Pegando a lista TOTAL
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }


    loadAll()
  }, []);

  return(
    <div className = "page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <movieRow key={key}/>
        ))}
      </section>
    </div>
  );
}