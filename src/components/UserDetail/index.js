import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './UserDetail.scss';

export default function UserDetail(props) {
  const { data } = props;
  const { name = '', location = '', company = '', blog = '', bio = '', avatar_url = '', public_repos = 0, } = data;
  console.log()
  return (<Card>
    <Image src={avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span>{company}</span>
      </Card.Meta>
      <Card.Description>
        {location && `${name} is living in ${location}.`}
          </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {public_repos > 0 && `${name} has ${public_repos}`}
      {blog && `${name}'s blog is ${blog}`}
      {bio && `${name}'s bio is ${bio}`}
    </Card.Content>
  </Card>);
}
