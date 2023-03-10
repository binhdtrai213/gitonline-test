import React, { Component } from 'react'
import { Card } from './Card'
import { playerInformation } from './data'

export default class ListCard extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
        {playerInformation.map(player => 
          <div className="col-4" key={player.id}>
            <Card player={player} /> 
          </div>)
        }
        </div>
      </div>
    )
  }
}
