import React, {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import NavBar from '../components/NavBar';
import PokeCard from '../components/PokeCard';
import {getAllPokemons} from "../api/index"

interface Pokemon {
  name: string,
  image: string,
  artwork: string
}

interface PageInfo {
  limit: number,
  offset: number
}

const Home: React.FC<any> = ({location, history}) => {
  const {pathname} = location
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([])
  const [pageInfo, setPageInfo] = useState<PageInfo>({limit: 12, offset: 0})

  const moveToDetail = (name:string, artwork:string):void => {
    history.push(`/detail?name=${name}&artwork=${artwork}`)
  }

  const getPokemon = async (): Promise<void> => {
    const {limit, offset} = pageInfo
    const {nextOffset, results} = await getAllPokemons(limit, offset)
    setPageInfo({...pageInfo, offset: nextOffset})
    setPokemons([...pokemons, ...results])
  }

  return (
    <div>
      <NavBar location={pathname} history={history}/>
      <div className="mt-4"><img src={`${process.env.PUBLIC_URL}/pokeBanner.jpeg`} alt="poke-banner"/></div>
      <div className="pb-3 pt-8 text-center text-yellow-400 font-medium text-xl sm:text-2xl md:text-3xl">Our Poke`mon</div>
        <InfiniteScroll
         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-6"
         initialLoad={false}
         loadMore={getPokemon}
         hasMore={true}
         loader={(
           <p key={`init`}>Loading...</p>
         )}
        >
          {pokemons.map((item, index) => {
          return (
            <PokeCard
              key={index}
              name={item.name}
              isCaught={true}
              image={item.image}
              artwork={item.artwork}
              moveToDetail={moveToDetail}
            />
          )
        })}
        </InfiniteScroll>
    </div>
  );
}

export default Home;
