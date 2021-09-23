import React, {useState} from "react";

interface Props {
  isChaught: boolean
  handleGetPoke: (name: string) => void,
  handleClose: () => void
}

const Modal: React.FC<Props> = ({isChaught, handleGetPoke, handleClose}) => {
  const [pokeName, setPokeName] = useState<string>("")
  console.log(pokeName)

  return(
    <div className="fixed bottom-0 right-0 top-0 left-0 m-auto w-full h-full flex flex-wrap content-center">
     <div className="p-4 text-center border-4 border-yellow-700 bg-card rounded-lg shadow-yellow bg-opacity-95 w-11/12 sm:w-3/5 mx-auto">
       {!isChaught ? (
         <div>
           <div className="text-sm sm:text-lg md:text-xl font-light">`opps... , please try again !!!`</div>
           <button 
            className="bg-yellow-500 p-2 mt-3 rounded-md text-black text-xs sm:text-sm md:text-lg hover:shadow-yellow"
            onClick={handleClose}
            >
             Close
           </button>
         </div>
       ) : (
          <div>
            <div className="text-sm sm:text-lg md:text-xl font-light">`Yeah Gacha !!!`</div>
            <input
              className="mt-4 mb-4 rounded-md text-center focus:outline-none text-black w-11/12 h-12"
              placeholder="Give him a name..."
              onChange={(event) => {setPokeName(event.target.value)}}
            />
            <button className="bg-yellow-500 pt-2 pb-2 pl-4 pr-4 rounded-md text-black text-xs sm:text-sm md:text-lg hover:shadow-yellow"
              onClick={()=> {handleGetPoke(pokeName)}}
            >
              Save
            </button>
          </div>
       )}
     </div>
    </div>
  )

}

export default Modal