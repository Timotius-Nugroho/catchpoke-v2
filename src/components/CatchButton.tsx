import React from "react";

interface Props {
  isCalc?: boolean,
  handleCatch: () => void
}

const CatchButton: React.FC<Props> = ({handleCatch, isCalc}) => {
  
  return(
    <div>
      <button 
        onClick={handleCatch}
        disabled={isCalc}
        className="fixed bottom-0 right-0 m-4 border-4 border-yellow-700 bg-yellow-500 hover:shadow-yellow p-4 rounded-lg text-black text-xs sm:text-sm md:text-lg z-50"
      >
        {isCalc ? "Calculating your luck ..." : "catch this poke`"}
      </button>
    </div>
  )

}

export default CatchButton