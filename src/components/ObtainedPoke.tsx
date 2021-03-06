import React from "react";

interface Props {
  name: string,
  defaultName: string,
  artwork: string,
  handleRelease: (name:string) => void
  moveToDetail: (name:string, artwork:string) => void
}

const ObtainedPoke: React.FC<Props> = ({name, defaultName, artwork, handleRelease, moveToDetail}) => {

  return(
    <div className="bg-card rounded-lg cursor-pointer p-5 hover:shadow-yellow text-center">
      <div className="text:lg md:text-xl">{name}</div>
      <img
        className="w-4/5 mx-auto"
        src={artwork}
        onClick={()=> moveToDetail(defaultName, artwork)}
        alt="poke-mockup"
      />
      <button
        onClick={()=> handleRelease(name)}
        className="font-medium text:sm sm:text-md border-2 border-yellow-700 bg-yellow-500 hover:shadow-yellow rounded-md pb-1 w-4/5"
      >
        release
      </button>
    </div>
  )

}

export default ObtainedPoke