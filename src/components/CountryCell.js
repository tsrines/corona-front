import React from 'react'
import { Fragment } from 'react'
import { Table } from 'semantic-ui-react'


function CountryCell(props) {

  return (

    <Table.Row>
      <Table.Cell><img src={props.countryInfo.flag} alt={props.country} height="20px" width="30px"/></Table.Cell>
      <Table.Cell>{props.country}</Table.Cell>
      <Table.Cell>{props.cases}</Table.Cell>
      <Table.Cell>{props.todayCases}</Table.Cell>
      <Table.Cell>{props.casesPerOneMillion}</Table.Cell>
      <Table.Cell>{props.deaths}</Table.Cell>
      <Table.Cell>{props.deathsPerOneMillion}</Table.Cell>
    </Table.Row>

  )
}

export default CountryCell