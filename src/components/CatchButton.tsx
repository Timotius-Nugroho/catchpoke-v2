import React from "react";

interface Props {
  isCalc?: boolean,
  handleCatch?: () => void
}

const CatchButton: React.FC<Props> = ({handleCatch, isCalc}) => {
  
  return(
    <div>
      <button
        data-testid="catch-btn"
        onClick={handleCatch}
        disabled={isCalc}
        className="w-full border-4 border-yellow-700 bg-yellow-500 hover:shadow-yellow p-4 rounded-lg text-black text-xs sm:text-sm md:text-base"
      >
        <div className="hidden sm:block">
          {isCalc ? "Calculating your luck ..." : "catch this poke`"}
        </div>
        <img className={`block sm:hidden ${isCalc ? "animate-spin" : "animate-bounce"} `} src={`${process.env.PUBLIC_URL}/iconmenu/catch.png`} alt="catch"/>
      </button>
    </div>
  )

}

export default CatchButton