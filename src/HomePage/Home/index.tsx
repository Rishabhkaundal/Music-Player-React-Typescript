import React, { useState, useEffect, useRef } from 'react';
import Rishabh from '../songs/Rishabh.jpg';
import './style.css';
import PlayerControl from './PlayerControl/index';

function App(props: any) {

    const audioEl = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioEl.current?.play();
        }
        else{
            audioEl.current?.pause();
        }
    })

    const SkipSong=(forward:boolean =true)=>{
        if(forward){
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp++;

                if(temp>props.songs.length -1){
                    temp=0;
                }
                return temp;
            });
        }
        else{
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp--;

                if(temp<0){
                    temp=props.songs.length-1;
                }
                return temp;
            });
        }
    }

    return (
        <div>
            <div className="music-player-container">
                <div className="music-subcontainer">
                    {/* <h1>Home</h1> */}
                    <h4>Now Playing</h4>
                    <img src={props.songs[props.currentSongIndex].img_src} alt="" style={{ height: '40%' }} />

                    <h2 className='Song-title'>{props.songs[props.currentSongIndex].title}</h2>

                    <h3 className='Song-subtitle'>{props.songs[props.currentSongIndex].artist}</h3>

                    <audio ref={audioEl} src={props.songs[props.currentSongIndex].src} controls></audio>
                    
                    <PlayerControl 
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        SkipSong={SkipSong}
                    />

                    {/* <img src={Rishabh} alt="" style={{width:'30%'}}/> */}
                    {/* {props.song.img_src} */}

                    <h4>Next Song is : {props.songs[props.nextSongIndex].title}</h4>

                </div>

            </div>

        </div>
    )
}
export default App;