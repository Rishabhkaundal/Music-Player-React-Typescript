import React,{useState, useEffect, Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import './style.css';

// import audio from '../songs/audio.mp'
// import audio from './audio.mp3';

function index(props:any) {

    return (
        <div>
            <div className="control-buttons">

                <button className="skip-button" onClick={()=>props.SkipSong(false)}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>

                <button className="play-button" onClick={()=>props.setIsPlaying(!props.isPlaying)}>
                    <FontAwesomeIcon icon={props.isPlaying ?faPause:faPlay} />
                </button>

                <button className="skip-button" onClick={()=>props.SkipSong()}>
                    <FontAwesomeIcon icon={faForward} />
                </button>

            </div>
            {/* <audio  src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3" controls ></audio> */}
            {/* <audio  src={props.currentSong.src} controls ></audio> */}
            {/* <audio src={audio} controls>this is the audio</audio> */}
        </div>
    )
}

export default index
