import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

import './Search.scss';


export default function Search(props) {
  const {
    dispatch, 
    createFetchUsers,
    clearUsers,
    loading,
  } = props;
  const [username, setUserName] = useState('');

  const fetchUsers = () => (e) => {
      const name = e.target.value;
       setUserName(name)
       setTimeout(() => {
        dispatch(createFetchUsers(name))
       }, 1000)
  }

  const clearState = () => {
    setUserName('');
    dispatch(clearUsers())
  }
    return (
      <React.Fragment>
        <div>{username}</div>
        <div className="topbar">
          <Input 
            loading={loading}
            icon='user'
            value={username}
            placeholder='Search by username' 
            onChange={fetchUsers()}
            className='inputWrapper'
            />
          <Button
            onClick={clearState}
            primary
          >
              Clear
          </Button>
          </div>
        </React.Fragment>
    );
  }