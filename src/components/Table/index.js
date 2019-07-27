import React from "react";

import "./Table.scss";

export default function DataTable(props) {
  const { repos } = props;
  return (
    <table className="ui basic table tableWrapper">
      <thead>
        <tr>
          <td>Repo Name</td>
          <td>Repo Description</td>
          <td>Repo Link</td>
          <td>Created Date</td>
          <td>Last Update Date</td>
          <td>Programming Language</td>
          <td>License Name</td>
          <td>Open Issues Count</td>
          <td>Star Count</td>
        </tr>
      </thead>
      <tbody>
        {repos.map(item => {
          const hasLicense = item.license && !!Object.keys(item.license).length;
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.html_url}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>{item.language}</td>
              <td>{hasLicense && item.license.name}</td>
              <td>{item.open_issues_count}</td>
              <td>{item.stargazers_count}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
