import React from "react";
import { Table, Segment, Loader } from "semantic-ui-react"

export default function DataTable({ repos, loading }) {
  if (loading) {
    return (
      <Segment style={{ minHeight: 100 }}>
        <Loader active />
      </Segment>
    );
  }
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
          const createdDate = new Date(item.created_at).toLocaleString();
          const updateDate = new Date(item.updated_at).toLocaleString();
          return (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>
                <a
                  target={"_blank"}
                  href={item.html_url}
                  rel="nofollow noopener"
                >
                  {item.html_url}
                </a>
              </Table.Cell>
              <Table.Cell>{createdDate}</Table.Cell>
              <Table.Cell>{updateDate}</Table.Cell>
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
