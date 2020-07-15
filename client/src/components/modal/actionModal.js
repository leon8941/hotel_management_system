import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  inputs: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70ch',
      height: '8ch'
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const ActionModal = (props) => {
  const classes = useStyles()

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.closed}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.actionType} hotel's package</h2>
            <form className={classes.inputs} onSubmit={(event) => {event.preventDefault(); props.onSubmitButtonClick(event)}}>
              <div>
                <TextField 
                  required 
                  id="hotel_name" 
                  label="Hotel Name" 
                  onChange={(event) => props.inputOnChange(event)}
                  value={props.hotelPackage.hotel_name}
                />
              </div>
              <div>
                <TextField
                  required
                  id="description"
                  label="Hotel Description"
                  multiline
                  rowsMax={10}
                  onChange={(event) => props.inputOnChange(event)}
                  value={props.hotelPackage.description}
                  width='50ch'
                />
              </div>
              <div>
                <TextField
                  required  
                  id="duration_day"
                  label="Days"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => props.inputOnChange(event)}
                  value={props.hotelPackage.duration_day}
                  inputProps={{ min: "0" }}
                />
                <TextField
                  required
                  id="duration_night"
                  label="Nights"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => props.inputOnChange(event)}
                  value={props.hotelPackage.duration_night}
                  inputProps={{ min: "0" }}
                />
              </div>
              <div>
                <TextField
                  required
                  id="price"
                  label="Price"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => props.inputOnChange(event)}
                  value={props.hotelPackage.price}
                  inputProps={{ min: "0" }}
                />
              </div>
              <div>
                <TextField
                  required
                  id="validity_duration"
                  label="Validity Duration in Days"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(event) => props.inputOnChange(event)}
                  value={props.hotelPackage.validity_duration}
                  inputProps={{ min: "0" }}
                />
              </div>
              <div>
                <Button type="submit" variant="contained" color="secondary" >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default ActionModal