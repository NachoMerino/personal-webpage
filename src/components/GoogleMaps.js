import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

export default class Map extends Component {
  state = {
    center: { lat: 52.519143, lng: 13.398713 },
    zoom: 12
  }

render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCsK_poRxIKkQziTVC-qdKe6N5vCmFouz8' }}
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }>
        </GoogleMapReact>
      </div>
    )
  }
}