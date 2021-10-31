import React,{useState,useEffect} from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import landing from './LandingPage';
import homepage from './HomePage';
import Home from './HomePage/Home';
import about from './HomePage/About';
import search from './HomePage/Search';
// import songs from './songs/songs';
// import Rishabh from './songs'

function App() {
  const [songs,setSongs]=useState([
    {
        title:"First Title",
        artist:"abc",
        img_src:"https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs",
        
        // img_src:"../songs/Rishabh.jpg",
        src:"https://www.mboxdrive.com/audtrop4.mp3"
    },
    {
        title:"second title",
        artist:"2nd artist",
        img_src:"https://picsum.photos/seed/picsum/600/400",
        src:"https://www.mboxdrive.com/luck16.mp3"
    },
    {
        title:"Scary Garry",
        artist:"Kaito Shoma",
        img_src:"https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
        src:"https://www.mboxdrive.com/ruapporangespace_Kaito_Shoma_DJ_Paul_-_Scary_Garry_72287444.mp3"
    },
    {
        title:"Beggin",
        artist:"ghi",
        img_src:"./",
        src:"https://www.mboxdrive.com/beggin.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex]=useState(0);
  const [nextSongIndex, setNextSongIndex]=useState(currentSongIndex+1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1>songs.length-1){
        return 0;
      }
      else{
        return currentSongIndex+1;
      }
    })
  },[currentSongIndex]);

  return (
    <div className="App">

      {/* <Switch> */}
        <Route path='/LandingPage' component={landing} />
        <Route path='/HomePage' component={homepage} />
        <Route path='/HomePage/Home'> <Home currentSongIndex={currentSongIndex} nextSongIndex={nextSongIndex} songs={songs}/></Route>
        <Route path='/HomePage/About' component={about} />
        <Route path='/HomePage/Search' component={search} />
      {/* </Switch> */}
      {/* <Link to='/LandingPage'> Landing Page</Link> */}
      <br /><br />

    </div>
  );
}

export default App;
