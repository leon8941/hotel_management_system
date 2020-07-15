import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { withStyles } from '@material-ui/core/styles'
import { styles } from './hotelPackageStyle'

const HotelPackage = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.hotel_name}
      >

      </CardHeader>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {
            props.description
          }
        </Typography>
        <br />
        <Typography variant="caption" display="block" gutterBottom>
          {
            props.duration_day + ' days ' + props.duration_night + ' nights'
          }
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {'RM' + props.price}
        </Typography>

        <Typography variant="caption" display="block" gutterBottom>
          {'Valid until ' + props.valid_until}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton id="edit" onClick={() => props.edit()}>
          <EditIcon />
        </IconButton>
        <IconButton id="delete" onClick={() => props.delete()}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(HotelPackage)