import React from 'react'

import { Table, Image } from 'semantic-ui-react'

function lastUpdate(utc){
  let jsTime = new Date(utc)

  return jsTime.toLocaleString() 
}

function JohnsHopkinsCell(props) {

  return (
    <Table.Row>
      <Table.Cell>{lastUpdate(props.updatedAt)}</Table.Cell>
      <Table.Cell>{props.country}</Table.Cell>
      <Table.Cell>{props.province}</Table.Cell>
      <Table.Cell>{props.stats.confirmed}</Table.Cell>
      <Table.Cell>{props.stats.deaths}</Table.Cell>
      <Table.Cell>{props.stats.recovered}</Table.Cell>
      
    </Table.Row>
  )
}

export default JohnsHopkinsCell