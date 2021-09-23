import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import CatchButton from '../components/CatchButton'
import Modal from '../components/Modal'

interface Pokemon {
  name: string,
  artwork: string,
}

const Detail: React.FC<any> = ({location}) => {
  const {pathname} = location
  const [pokemonData, setPokemonData] = useState<Pokemon>({
    name: "",
    artwork: ""
  })
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isCalc, setIsCalc] = useState<boolean>(false)

  const catchPoke = ():void =>  {
    console.log("Catch poke")
    setIsCalc(true)
    setTimeout(()=> {
      setShowModal(true)
      setIsCalc(false)
    }, 1000)
  }

  const closeModal = (): void => {
    setShowModal(false)
  }

  const getPoke = (name: string):void => {
    const {artwork} = pokemonData
    console.log("GEt Poke", name,"==", artwork)
    closeModal()
  }

  return (
    <div>
      <NavBar location={pathname}/>
      <CatchButton handleCatch={catchPoke} isCalc={isCalc}/>
      {showModal ? (
        <Modal handleGetPoke={getPoke} handleClose={closeModal} isChaught={true}/>
      ) : ""}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-wrap content-center" >
          <img className="mx-auto" src={`${process.env.PUBLIC_URL}/samplePoke.png`} alt="poke-artwork"/>
        </div>
        <div>
          <div className="text-center font-medium text-xl sm:text-2xl md:text-3xl mt-4 mb-12">
            {"NAMEPOKE"}
          </div>
          <code className="p-5">
            <div className="text-lg font-bold mb-6">Stats</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 text-center bg-card rounded-lg shadow-yellow">
                <p className="text-sm sm:text-lg md:text-2xl font-bold">83</p>
                <p className="mt-4 text-sm sm:text-lg md:text-2xl">ITEM</p>
              </div>
              <div className="p-4 text-center bg-card rounded-lg shadow-yellow">
                <p className="text-sm sm:text-lg md:text-2xl font-bold">83</p>
                <p className="mt-4 text-sm sm:text-lg md:text-2xl">ITEM</p>
              </div>
            </div>
            <div className="text-lg font-bold mb-6 mt-6">Types</div>
            <button className="bg-yellow-500 p-2 rounded-md text-black text-xs sm:text-sm">Type here</button>
          </code>
        </div>
      </div>
      <code className="p-5 mb-24">
        <div className="text-lg font-bold mb-6 mt-6">Moves</div>
        <div className="flex flex-wrap">
          <button className="bg-yellow-500 p-2 rounded-md text-black text-xs md:text-sm">Moves1</button>
        </div>
      </code>
    </div>
  );
}

export default Detail;
