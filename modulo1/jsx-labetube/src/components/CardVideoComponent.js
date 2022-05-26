import React from "react";
import styled from 'styled-components'

const VideoTitle = styled.h4`
    color: blue;
`

function CardVideoComponent(props){
    
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }

    return(
        <div className={props.local} onClick={reproduzVideo}>
            <img src={props.Url} alt=""></img>
            <VideoTitle>{props.VideoTitle}</VideoTitle>
        </div>
    )
}

export default CardVideoComponent;