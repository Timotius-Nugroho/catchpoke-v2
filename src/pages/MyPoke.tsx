import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import ObtainedPoke from '../components/ObtainedPoke';


const MyPoke: React.FC<any> = ({location, history}) => {
  const {pathname} = location

  const moveToDetail = (name:string, image:string):void => {
    history.push(`/detail?name=${name}&image=${image}`)
  }

  const releaseMock = (name:string):void => {
    console.log("MOCK RElease")
  }

  return (
    <div>
      <NavBar location={pathname} history={history}/>
      <div className="pb-3 pt-8 text-center font-medium text-xl sm:text-2xl md:text-3xl">My Poke`mon</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        <ObtainedPoke name="poke" image={`${process.env.PUBLIC_URL}/samplePoke.png`} moveToDetail={moveToDetail} handleRelease={releaseMock}/>
        <ObtainedPoke name="poke" image={`${process.env.PUBLIC_URL}/samplePoke.png`} moveToDetail={moveToDetail} handleRelease={releaseMock}/>
        <ObtainedPoke name="poke" image={`${process.env.PUBLIC_URL}/samplePoke.png`} moveToDetail={moveToDetail} handleRelease={releaseMock}/>
      </div>
      <code className="p-5 text-lg sm:text-xl md:text-2xl">No Poke`mon yet</code>
    </div>
  );
}

export default MyPoke;
