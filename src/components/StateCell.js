import React from 'react'

import { Table, Image } from 'semantic-ui-react'

function lastUpdate(utc){
  let jsTime = new Date(utc)

  return jsTime.toLocaleString() 
}

function StateCell(props) {

  return (
    <Table.Row>
      <Table.Cell>{props.state}</Table.Cell>
      <Table.Cell>{props.cases}</Table.Cell>
      <Table.Cell>{props.todayCases}</Table.Cell>
      <Table.Cell>{props.active}</Table.Cell>
      <Table.Cell>{props.deaths}</Table.Cell>
    </Table.Row>
  )
}

export default StateCell