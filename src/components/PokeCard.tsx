import React, { useState, useEffect, useContext } from "react";
import {RootContext} from "../helpers/Context"

interface Props {
  name: string,
  image: string,
  artwork: string,
  moveToDetail: (name:string, artwork:string) => void
}

const PokeCard: React.FC<Props> = ({name, image, artwork, moveToDetail}) => {
  const [isCaught, setIsCaught] = useState<boolean>(false)
  const {myPokeList} = useContext<any>(RootContext)
  
  useEffect(()=> {
    const isExist = myPokeList.filter((e: any) => e.defaultName === name).length
    isExist ? setIsCaught(true) : setIsCaught(false)
    // eslint-disable-next-line
  }, [])

  return(
    <div
      className="grid grid-cols-3 gap-1 bg-card rounded-lg cursor-pointer h-32 p-1 hover:shadow-yellow"
      onClick={()=>{moveToDetail(name, artwork)}}
    >
      <div className="bg-yellow-500 bg-opacity-30 rounded-lg flex flex-wrap content-center">
        <img className="w-auto mx-auto" src={image} alt="poke-icon"/>
      </div>
      <div className="col-span-2 bg-black bg-opacity-75 rounded-lg w-full flex flex-wrap content-center">
        <div className="mx-auto font-medium text-sm sm:text-lg md:text-xl text-center">
          {name}`
          <code className={`text-xs mt-2 ${isCaught ? "text-yellow-400" : "text-gray-400"}`}>{isCaught ? "Already obtained" : "Not caught yet"}</code>
        </div>
      </div>
    </div>
  )

}

export default PokeCard