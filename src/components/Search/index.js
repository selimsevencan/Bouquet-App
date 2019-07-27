import React, { useState } from 'react';
import { Button, Input, Dropdown } from 'semantic-ui-react';

import './Search.scss';


export default function Search(props) {
  const {
    dispatch, 
    createFetchUsers,
    createFetchUser,
    clearUsers,
    loading,
    options,
  } = props;
  const [username, setUserName] = useState('');
  const [dropdownValue, setDropdown] = useState('');

  const fetchUsers = () => (e) => {
      const name = e.target.value;
       setUserName(name)
       setTimeout(() => {
        dispatch(createFetchUsers(name))
       }, 1000)
  }

  const fetchUser = (selected) => {
    const selectedUser = selected.target.textContent;
    setDropdown(selectedUser)
    setTimeout(() => {
      dispatch(createFetchUser(selectedUser))
     }, 1000)
  }

  const clearState = () => {
    setUserName('');
    setDropdown('');
    dispatch(clearUsers())
  }
    return (
      <React.Fragment>
        <div>{username}</div>
        <div className="topbar">
          <Input 
            loading={loading}
            icon='users'
            value={username}
            placeholder='Search by username' 
            onChange={fetchUsers()}
            className='inputWrapper'
            iconPosition='left'
            action={!!options &&
              <Dropdown
               button 
               basic 
               floating 
               selection
               options={options} 
               onChange={(selected) => fetchUser(selected)}
               value={dropdownValue}
              />}
            />
          <Button
            onClick={clearState}
            basic
            color={'red'}
            className='clearButton'
          >
              Clear
          </Button>
          </div>
        </React.Fragment>
    );
  }