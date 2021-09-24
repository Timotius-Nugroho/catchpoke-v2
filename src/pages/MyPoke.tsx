import React, {useContext} from 'react';
import NavBar from '../components/NavBar';
import ObtainedPoke from '../components/ObtainedPoke';
import {RootContext} from "../helpers/Context"


const MyPoke: React.FC<any> = ({location, history}) => {
  const {pathname} = location
  const {myPokeList, dispact} = useContext<any>(RootContext)

  const moveToDetail = (name:string, artwork:string):void => {
    history.push(`/detail?name=${name}&artwork=${artwork}`)
  }

  const releaseMock = (name:string):void => {
    dispact({type: "REMOVE_POKE", data: {
      name: name
    }})
  }

  return (
    <div>
      <NavBar location={pathname} history={history}/>
      <div className="pb-3 pt-8 text-center font-medium text-xl sm:text-2xl md:text-3xl">My Poke`mon</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {myPokeList.map((item: any, index: number) => {
          return(
            <ObtainedPoke
              key={index}
              name={item.name}
              defaultName={item.defaultName}
              artwork={item.artwork}
              moveToDetail={moveToDetail}
              handleRelease={releaseMock}
            />
          )
        })}
      </div>
      {myPokeList.length > 0 ? "" : (
        <code className="p-5 text-lg sm:text-xl md:text-2xl">No Poke`mon yet</code>
      )}
    </div>
  );
}

export default MyPoke;
