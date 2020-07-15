import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { CssBaseline } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import { get, post, put, destroy } from './api/api'

import * as serviceWorker from './serviceWorker'

import HotelPackage from './components/hotelPackage'
import ActionModal from './components/modal/actionModal'

class App extends Component {
  constructor () {
    super()
    this.state = {
      hotelPackages: null,
      open: false,
      actionType: null,
      input: {
        hotelPackage: {
          id: null,
          hotel_name: null,
          description: null,
          duration_day: 0,
          duration_night: 0,
          price: 0,
          validity_duration: 0
        }
      }
    }

    this.getHotelPackages = this.getHotelPackages.bind(this)
    this.getHotelPackageById = this.getHotelPackageById.bind(this)
    this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this)
    this.onSubmitButtonClickHandler = this.onSubmitButtonClickHandler.bind(this)
    this.editHandler = this.editHandler.bind(this)
  }

  componentDidMount = () =>{
    this.getHotelPackages()
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
    post(`/api/hotel_packages`, data).then(() => {
      this.getHotelPackages()
    })
  }

  updateHotelPackage = (data, id) => {
    put(`/api/hotel_packages/${id}`, data).then(() => {
      this.getHotelPackages()
    })
  }

  deleteHotelPackage = (id) => {
    destroy(`/api/hotel_packages/${id}`).then(() => {
      this.getHotelPackages()
    })
  }

  //Button's Actions
  addHotelPackage = () => {
    this.setState({
      open: true,
      actionType: "Add"
    })
  }

  closeModalHandler = () => {
    this.setState({
      open: false,
      actionType: null,
      input: {
        hotelPackage: {
          id: null,
          hotel_name: null,
          description: null,
          duration_day: 0,
          duration_night: 0,
          price: 0,
          validity_duration: 0
        }
      }
    })
  }

  inputOnChangeHandler = (event) => {
    let value = event.target.value
    let id = event.target.id

    this.setState(prevState => ({
      ...prevState,
        input: {
          ...prevState.input,
            hotelPackage: {
              ...prevState.input.hotelPackage,
              [id]: value
            }
        }
    }))
  }

  onSubmitButtonClickHandler = () => {
    let values = {...this.state.input.hotelPackage}
    let actionType = this.state.actionType
    
    if (actionType === "Add") {
      this.createHotelPackage(values)
    }
    else if (actionType === "Update") {
       this.updateHotelPackage(values, this.state.input.hotelPackage.id)
    }
    
    this.setState({
      open: false
    })
  }

  deleteHandler = (id) => {
    let response = window.confirm("Are you sure you want to delete it?")
    if (response) {
      this.deleteHotelPackage(id)
    }
  }

  editHandler = (id) => {
    let hotelPackage = this.state.hotelPackages.find((hotel) => hotel.id == id)

    this.setState(prevState => ({
      ...prevState,
        open: true,
        actionType: "Update",
        input: {
          ...prevState.input,
            hotelPackage: {
              ...hotelPackage
            }
        }
    }))
  }

  render() {
    let { hotelPackages } = this.state

    return hotelPackages && hotelPackages.length > 0 ?
      <React.Fragment>
        Welcome to My Hotel System!
        <Grid container spacing={5} style={{padding: 12}}>
          { 
            hotelPackages.map((hotelPackage) => {
              let validUntilDateTime = new Date(hotelPackage.valid_until * 1000)
              
              return <Grid key={hotelPackage.id} item xs={12} sm={6} lg={4} xl={3}>
                <HotelPackage 
                  key={hotelPackage.id}
                  hotel_name={hotelPackage.hotel_name}
                  description={hotelPackage.description}
                  duration_day={hotelPackage.duration_day}
                  duration_night={hotelPackage.duration_night}
                  price={hotelPackage.price}
                  validity_duration={hotelPackage.validity_duration}
                  valid_until={validUntilDateTime.toLocaleDateString()}
                  delete={() => this.deleteHandler(hotelPackage.id)}
                  edit={() => this.editHandler(hotelPackage.id)}
                >
                </HotelPackage>
              </Grid>
            })
          }
        </Grid>
        <CssBaseline />
        
      </React.Fragment>
      :
      <div>
        <React.Fragment>
          Loading ...
        </React.Fragment>
        <React.Fragment>
          <Fab color="primary" aria-label="add" onClick={() => this.addHotelPackage()}>
            <AddIcon />
          </Fab>
        </React.Fragment>
        <React.Fragment>
          <ActionModal 
            open={this.state.open} 
            closed={this.closeModalHandler}
            actionType={this.state.actionType}
            hotelPackage={this.state.input.hotelPackage}
            inputOnChange={(event) => this.inputOnChangeHandler(event)}
            onSubmitButtonClick={() => {this.onSubmitButtonClickHandler()}}
          />
        </React.Fragment>
      </div>
    
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()