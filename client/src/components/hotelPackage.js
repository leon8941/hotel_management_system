import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography' 

import { withStyles } from '@material-ui/core/styles'
import { styles } from './hotelPackageStyle'

const HotelPackage = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.hotelName}
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
            props.durationDay + ' days ' + props.durationNight + ' nights'
          }
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {'RM' + props.price}
        </Typography>

        <Typography variant="caption" display="block" gutterBottom>
          {'Valid until ' + props.validUntil}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(HotelPackage)