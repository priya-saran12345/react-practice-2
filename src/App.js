import { useState } from 'react';
import './App.css';
import Playgame from './component/Playgame';
import Startgame from './component/Startgame';
import { Prev } from 'react-bootstrap/esm/PageItem';


function App() {
  const [play, setplay] = useState(false)
  const changeplay=()=>{
    setplay((prev)=>!prev)
  }
  return (
    <>
    {/* // from here project 2 starts  */}
    {/* this is the ludo game of priya */}

{play?<Playgame/>:<Startgame change={changeplay}/>}

















    
    
        {/* this is the project 1 shoes project  */}
  {/* <div >
  <Navbar/>
  <Main/>

    </div> */}
    </>
  );
}

export default App;
