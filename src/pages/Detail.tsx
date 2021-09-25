import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import CatchButton from '../components/CatchButton'
import Modal from '../components/Modal'
import DetailLoader from '../components/DetailLoader';
import {getPokemon} from '../api/index'

interface Stats {
  stat: string,
  base: number
}

interface Pokemon {
  name: string | null,
  artwork: string | null,
  moves: Array<string>,
  stats: Array<Stats>,
  types: Array<string>
}

const Detail: React.FC<any> = ({location, history}) => {
  const query = new URLSearchParams(location.search);
  const {pathname} = location
  const [pokemonData, setPokemonData] = useState<Pokemon>({
    name: query.get("name"),
    artwork: query.get("artwork"),
    moves: [],
    stats: [],
    types: []
  })
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isCalc, setIsCalc] = useState<boolean>(false)
  const [isChaught, setIsChaught] = useState<boolean>(false)

  const catchPoke = async (): Promise<void> =>  {
    setIsCalc(true)
    const prob = Math.floor(Math.random() * 10);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsCalc(false)
    if (prob > 5) {
      setIsChaught(true)
    }
    setShowModal(true)
  }

  const closeModal = (): void => {
    setShowModal(false)
    setIsChaught(false)
  }

  const getPokemonData = async (): Promise<void> => {
    const dataFromServer = await getPokemon(pokemonData.name)
    setPokemonData({...pokemonData, ...dataFromServer})
  }
  
  useEffect(()=> {
    getPokemonData()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <NavBar location={pathname} history={history}/>
      <CatchButton handleCatch={catchPoke} isCalc={isCalc}/>
      {showModal ? (
        <Modal
          defaultName={pokemonData.name}
          artwork={pokemonData.artwork}
          handleClose={closeModal}
          isChaught={isChaught}
          history={history}
        />
      ) : ""}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-wrap content-center" >
          <img className="mx-auto w-7/12" src={`${pokemonData.artwork}`} alt="poke-artwork"/>
        </div>
        <div>
          <div className="text-center font-medium text-xl sm:text-2xl md:text-3xl mt-4 mb-12">
            {pokemonData.name}
          </div>
          <code className="p-5">
            <div className="text-lg font-bold mb-6">Stats</div>
            <div className="grid grid-cols-3 gap-5">
              {pokemonData.stats.map((item, index) => {
                return (
                  <div className="p-4 text-center bg-card rounded-lg shadow-yellow" key={index}>
                    <p className="text-sm sm:text-lg md:text-2xl font-bold">{item.base}</p>
                    <p className="mt-4 text-xs md:text-md">{item.stat}</p>
                  </div>
                )
              })}
            </div>
            {pokemonData.stats.length === 0 ? (
              <DetailLoader/>
            ) : ""}
            <div className="text-lg font-bold mb-6 mt-6">Types</div>
            {pokemonData.types.map((item, index)=> {
              return(
                <button className="bg-yellow-500 p-2 font-semibold m-1 rounded-md text-black text-xs sm:text-sm" key={index}>
                  {item}
                </button>
              )
            })}
            {pokemonData.types.length === 0 ? (
              <DetailLoader/>
            ) : ""}
          </code>
        </div>
      </div>
      <code className="p-5 mb-24">
        <div className="text-lg font-bold mb-6 mt-6">Moves</div>
        <div className="flex flex-wrap">
          {pokemonData.moves.map((item, index)=> {
            return(
              <button className="bg-yellow-500 p-2 m-1 font-semibold rounded-md text-black text-xs md:text-sm" key={index}>
                {item}
              </button>
            )
          })}
        </div>
        {pokemonData.moves.length === 0 ? (
          <div className="space-y-4">
            <DetailLoader/>
            <DetailLoader/>
          </div>
            ) : ""}
      </code>
    </div>
  );
}

export default Detail;
