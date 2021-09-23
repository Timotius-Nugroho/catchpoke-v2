import React, {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import NavBar from '../components/NavBar';
import PokeCard from '../components/PokeCard';

interface Pokemon {
  name: string,
  image: string,
  isCaught: boolean
}

const Home: React.FC<any> = ({location}) => {
  const {pathname} = location
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([])

  const getPokemon = (): void => {
    setTimeout(() => {
      setPokemons([...pokemons, 
        {name: "poke_n2", image: `${process.env.PUBLIC_URL}/samplePokeIcon.png`, isCaught: true},
        {name: "poke_n1", image: `${process.env.PUBLIC_URL}/samplePokeIcon.png`, isCaught: true},
        {name: "poke_n3", image: `${process.env.PUBLIC_URL}/samplePokeIcon.png`, isCaught: true}
      ])
    }, 2000);
  }

  return (
    <div>
      <NavBar location={pathname}/>
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
            <PokeCard key={index} name={item.name} isCaught={item.isCaught} image={item.image} />
          )
        })}
        </InfiniteScroll>
    </div>
  );
}

export default Home;
