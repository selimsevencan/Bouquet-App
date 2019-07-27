import React, { useState } from "react";
import { Button, Input, Dropdown, Confirm } from "semantic-ui-react";
import debounce from "lodash/debounce";

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
  const [showConfirm, setShowConfirm] = useState(false);

  const debouncedDispatch = debounce(
    name => dispatch(createFetchUsers(name)),
    800
  );

  const fetchUsers = () => e => {
    const name = e.target.value;
    setUserName(name);
    debouncedDispatch(name);
  };

  const fetchUser = selected => {
    const selectedUser = selected.target.textContent;
    setDropdown(selectedUser);
    dispatch(createFetchUser(selectedUser));
    dispatch(createFetchRepo(selectedUser));
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    clearState();
  };
  const handleCancel = () => setShowConfirm(false);

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
            onClick={() => setShowConfirm(true)}
            basic
            color={"red"}
            className="clearButton"
          >
            Clear
          </Button>
        )}
        <Confirm
          open={showConfirm}
          content="Are you sure about clear whole search result?"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </div>
    </React.Fragment>
  );
}
