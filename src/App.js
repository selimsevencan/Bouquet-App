import React, { Component } from "react";
import Search from "./components/Search";
import { connect } from "react-redux";

import "./App.scss";

import { createFetchUsers } from "./actions/fetchUsers";
import { createFetchUser } from "./actions/fetchUser";
import { createFetchRepo } from "./actions/fetchRepo";
import { clearData } from "./actions/clearData";
import UserDetail from "./components/UserDetail";
import Table from "./components/Table";

class App extends Component {
  render() {
    const {
      dispatch,
      loading,
      data,
      userData,
      userLoading,
      repos
    } = this.props;

    console.log("prop", this.props);
    const hasData = data && data.items && data.items.length;
    const hasUserData = !!userData && Object.keys(userData).length;
    const hasRepos = !!repos.length;
    const renderOptions =
      hasData &&
      data.items.map(item => {
        return {
          value: item.login,
          key: item.id,
          text: item.login,
          image: { avatar: true, src: item.avatar_url }
        };
      });
    return (
      <div className="App">
        <Search
          clearState={this.clearState}
          createFetchUsers={createFetchUsers}
          createFetchUser={createFetchUser}
          dispatch={dispatch}
          loading={loading}
          options={renderOptions}
          createFetchRepo={createFetchRepo}
          clearData={clearData}
        />
        <div className="userDetailWrapper">
          {!!hasUserData && (
            <UserDetail data={userData} loading={userLoading} />
          )}
          {hasRepos && <Table repos={repos} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.users.data,
    loading: state.users.loading,
    userData: state.user.userData,
    userLoading: state.user.userLoading,
    repos: state.repos.repo,
    repoLoading: state.repos.repoLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
