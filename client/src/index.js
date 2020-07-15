import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Grid from '@material-ui/core/Grid'

import { get, post, put, destroy } from './api/api'

import * as serviceWorker from './serviceWorker'

import HotelPackage from './components/hotelPackage'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getHotelPackages = this.getHotelPackages.bind(this)
    this.getHotelPackageById = this.getHotelPackageById.bind(this)
  }

  componentDidMount = () =>{
    this.getHotelPackages()
    // this.getHotelPackageById("5")
  }

  getHotelPackages = () => {
    get('/api/hotel_packages').then((response) => {
      this.setState({
        hotelPackages: response
      })
    })
  }

  getHotelPackageById = (id) => {
    get(`/api/hotel_packages/${id}`)
  }

  createHotelPackage = (data) => {
    post(`/api/hotel_packages`, data)
  }

  updateHotelPackage = (data, id) => {
    put(`/api/hotel_packages/${id}`, data)
  }

  render() {
    let { hotelPackages } = this.state

    return hotelPackages && hotelPackages.length > 0 ?
      <div>
        Welcome to My Hotel System!
        <Grid container spacing={5} style={{padding: 12}}>
          { 
            hotelPackages.map((hotelPackage) => {
              let validUntilDateTime = new Date(hotelPackage.valid_until * 1000)
              
              return <Grid key={hotelPackage.id} item xs={12} sm={6} lg={4} xl={3}>
                <HotelPackage 
                  key={hotelPackage.id}
                  hotelName={hotelPackage.hotel_name}
                  description={hotelPackage.description}
                  durationDay={hotelPackage.duration_day}
                  durationNight={hotelPackage.duration_night}
                  price={hotelPackage.price}
                  validityDuration={hotelPackage.validity_duration}
                  validUntil={validUntilDateTime.toLocaleDateString()}
                >
                </HotelPackage>
              </Grid>
            })
          }
        </Grid>
      </div>
      :
      <div>
        Loading ...
      </div>
    
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()