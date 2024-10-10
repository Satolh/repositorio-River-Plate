import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class videoComponent extends Component {
    render (  ){
        return (
        <div className='container-videoplayer'>
            <ReactPlayer
            className='videoPlayer'
            url={this.props.playVideo}
            controls
            width={"80%"}
            height={"80%"}
            />
        </div>
        )
    }
}

export default videoComponent;