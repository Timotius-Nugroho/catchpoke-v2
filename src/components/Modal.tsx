import React, {useState, useContext, useEffect} from "react";
import {RootContext} from "../helpers/Context"

interface Props {
  isChaught: boolean
  defaultName: string | null,
  artwork: string | null,
  history: any,
  handleClose: () => void
}

const Modal: React.FC<Props> = ({isChaught, defaultName, artwork, history, handleClose}) => {
  const [pokeName, setPokeName] = useState<string | null>(defaultName)
  const [disabelBtn, setDisableBtn] = useState<boolean>(false)
  const {myPokeList, dispact} = useContext<any>(RootContext)

  const addPokemon = (): void => {
    dispact({type: "ADD_POKE", data: {
      name: pokeName ? pokeName : defaultName,
      defaultName,
      artwork: artwork
    }})
    handleClose()
    setTimeout(()=> {
      history.push("/my-poke")
    }, 500)
  }

  const checkIsExist = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const newName = event.target.value ? event.target.value : defaultName
    setPokeName(newName)
    const isExist = myPokeList.filter((e: any) => e.name === newName).length
    isExist ? setDisableBtn(true) : setDisableBtn(false)
  }

  useEffect(()=>{
    const isExist = myPokeList.filter((e: any) => e.name === defaultName).length
    isExist ? setDisableBtn(true) : setDisableBtn(false)
    // eslint-disable-next-line
  },[])

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
              onChange={(event) => {checkIsExist(event)}}
            />
            {disabelBtn ? (
              <button
                disabled
                className="bg-yellow-300 cursor-not-allowed pt-2 pb-2 pl-4 pr-4 rounded-md text-black text-xs sm:text-sm md:text-lg"
              >
                Name Poke` already exist
              </button>
            ) : (
              <button className="bg-yellow-500 pt-2 pb-2 pl-4 pr-4 rounded-md text-black text-xs sm:text-sm md:text-lg hover:shadow-yellow"
              onClick={()=> {addPokemon()}}
              >
                Save
              </button>
            )}
          </div>
       )}
     </div>
    </div>
  )

}

export default Modal