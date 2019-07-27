import React, { useState } from "react";
import { Button, Input, Dropdown } from "semantic-ui-react";

import "./Search.scss";

export default function Search({
  dispatch,
  createFetchUsers,
  createFetchUser,
  clearData,
  loading,
  options,
  createFetchRepo
}) {
  const [username, setUserName] = useState("");
  const [dropdownValue, setDropdown] = useState("");

  const fetchUsers = () => e => {
    const name = e.target.value;
    setUserName(name);
    dispatch(createFetchUsers(name));
  };

  const fetchUser = selected => {
    const selectedUser = selected.target.textContent;
    setDropdown(selectedUser);
    dispatch(createFetchUser(selectedUser));
    dispatch(createFetchRepo(selectedUser));
  };

  const clearState = () => {
    setUserName("");
    setDropdown("");
    dispatch(clearData());
  };
  return (
    <React.Fragment>
      <div>{username}</div>
      <div className="topbar">
        <Input
          loading={loading}
          icon="users"
          value={username}
          placeholder="Search by username"
          onChange={fetchUsers()}
          className="inputWrapper"
          iconPosition="left"
          action={
            !!options && (
              <Dropdown
                button
                basic
                floating
                selection
                options={options}
                onChange={selected => fetchUser(selected)}
                value={dropdownValue}
              />
            )
          }
        />
        {!!username && (
          <Button
            onClick={clearState}
            basic
            color={"red"}
            className="clearButton"
          >
            Clear
          </Button>
        )}
      </div>
    </React.Fragment>
  );
}
