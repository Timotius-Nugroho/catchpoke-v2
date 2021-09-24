import React from "react";

interface Props {
  location: string,
  history: any
}

const NavBar: React.FC<Props> = ({location, history}) => {

  const moveToPage = (url:string) :void => {
    history.push(url)
  }

  return(
    <div className="shadow-yellow rounded-b-3xl sticky top-0 bg-black pl-5 pr-5 pt-3 pb-5 z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch">
      <div className="justify-self-start">
        <div
          onClick={() => {moveToPage('/')}}
          className="text-yellow-400 font-medium text-xl sm:text-2xl md:text-3xl cursor-pointer hover:shadow-yellow rounded-lg"
        >Catch Pokemon</div>
        <div className="text-xs text-gray-400">pokemon for live !</div>
      </div>
      {location !== "/my-poke" ? (
        <div className="justify-self-end">
          <div className="h-full flex content-center cursor-pointer" onClick={()=> {moveToPage('/my-poke')}}>
            <div className="w-10 sm:w-14 hover:shadow-yellow rounded-full"><img src={`${process.env.PUBLIC_URL}/icon.png`} alt="poke-ball"/></div>
            <div className="mt-3 sm:mt-5 ml-1 text-xs text-gray-400">m y p o k e`</div>
          </div>
        </div>
      ) : ""}
      </div>
    </div>
  )

}

export default NavBar