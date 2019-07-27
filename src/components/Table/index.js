import React from "react";
import { Table } from "semantic-ui-react";

import "./Table.scss";

export default function DataTable(props) {
  const { repos } = props;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Repo Name</Table.HeaderCell>
          <Table.HeaderCell>Repo Description</Table.HeaderCell>
          <Table.HeaderCell>Repo Link</Table.HeaderCell>
          <Table.HeaderCell>Created Date</Table.HeaderCell>
          <Table.HeaderCell>Last Update Date</Table.HeaderCell>
          <Table.HeaderCell>Programming Language</Table.HeaderCell>
          <Table.HeaderCell>License Name</Table.HeaderCell>
          <Table.HeaderCell>Open Issues Count</Table.HeaderCell>
          <Table.HeaderCell>Star Count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {repos.map(item => {
          const hasLicense = item.license && !!Object.keys(item.license).length;
          return (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.html_url}</Table.Cell>
              <Table.Cell>{item.created_at}</Table.Cell>
              <Table.Cell>{item.updated_at}</Table.Cell>
              <Table.Cell>{item.language}</Table.Cell>
              <Table.Cell>{hasLicense && item.license.name}</Table.Cell>
              <Table.Cell>{item.open_issues_count}</Table.Cell>
              <Table.Cell>{item.stargazers_count}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
