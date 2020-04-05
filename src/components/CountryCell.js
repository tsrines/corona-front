import React from 'react'

import { Table, Image } from 'semantic-ui-react'

function lastUpdate(utc){
  let jsTime = new Date(utc)

  return jsTime.toLocaleString() 
}

function CountryCell(props) {

  return (
    <Table.Row>
      <Table.Cell>{<Image src={props.countryInfo.flag} alt={props.country} height="20px" width="30px"/>}</Table.Cell>
      <Table.Cell>{lastUpdate(props.updated)}</Table.Cell>
      <Table.Cell>{props.country}</Table.Cell>
      <Table.Cell>{props.cases}</Table.Cell>
      <Table.Cell>{props.todayCases}</Table.Cell>
      <Table.Cell>{props.casesPerOneMillion}</Table.Cell>
      <Table.Cell>{props.deaths}</Table.Cell>
      <Table.Cell>{props.todayDeaths}</Table.Cell>
      <Table.Cell>{props.deathsPerOneMillion}</Table.Cell>
    </Table.Row>
  )
}

export default CountryCell