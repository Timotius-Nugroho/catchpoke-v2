import React from "react";
import CatchButton from "./CatchButton"

interface Props {
  location: string,
  history: any,
  isCalc?: boolean,
  handleCatch?: () => void
}

const BottomNav: React.FC<Props> = ({location, history, isCalc, handleCatch}) => {

  const moveToPage = (url:string) :void => {
    history.push(url)
  }

  return(
    <div className="shadow-yellow fixed bottom-0 w-full bg-black p-5 z-50">
      <div className="grid grid-cols-5 gap-2">
        <div
          className={`cursor-pointer flex flex-row bg-yellow-500 justify-center items-center rounded-md ${location === "/" ? "col-span-2 shadow-yellow bg-opacity-90" : "hover:shadow-yellow bg-opacity-30"}`}
          onClick={() => {moveToPage('/')}}
        >
            <div><img className="p-2 w-9 sm:p-3 sm:w-14" src={`${process.env.PUBLIC_URL}/iconmenu/all-poke.png`} alt="menu-1" /></div>
            <div className={`${location === "/" ? "" : "hidden sm:block"}  text-xs pb-1 lg:text-2xl pr-2`}>Poke List</div>
        </div>
        <div 
          className={`cursor-pointer flex flex-row bg-yellow-500 justify-center items-center rounded-md ${location === "/my-poke" ? "col-span-2 shadow-yellow bg-opacity-90" : "hover:shadow-yellow bg-opacity-30"}`}
          onClick={() => {moveToPage('/my-poke')}}
        >
            <div><img className="p-2 w-9 sm:p-3 sm:w-14" src={`${process.env.PUBLIC_URL}/icon.png`} alt="menu-1" /></div>
            <div className={`${location === "/my-poke" ? "" : "hidden sm:block"}  text-xs pb-1 lg:text-2xl pr-2`}>My Poke</div>
        </div>
        <div className={`cursor-pointer flex flex-row bg-yellow-500 justify-center items-center rounded-md ${location === "/how-to" ? "col-span-2 shadow-yellow bg-opacity-90" : "hover:shadow-yellow bg-opacity-30"}`}>
            <div><img className="p-2 w-9 sm:p-3 sm:w-14" src={`${process.env.PUBLIC_URL}/iconmenu/how-to.png`} alt="menu-1" /></div>
            <div className={`${location === "/how-to" ? "" : "hidden sm:block"}  text-xs pb-1 lg:text-2xl pr-2`}>How To Play</div>
        </div>
        <div className="cursor-pointer flex flex-row bg-yellow-500 bg-opacity-30 justify-center items-center rounded-md hover:shadow-yellow">
            <div><img className="p-2 w-9 sm:p-3 sm:w-14" src={`${process.env.PUBLIC_URL}/iconmenu/pokemon-trainer.png`} alt="menu-1" /></div>
            <div className="hidden sm:block text-xs pb-1 lg:text-2xl pr-2">Contact Me</div>
        </div>
        {location === "/detail" ? (
          <CatchButton handleCatch={handleCatch} isCalc={isCalc}/>
        ) : ""}
      </div>
    </div>
  )

}

export default BottomNav