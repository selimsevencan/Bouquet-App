import React, {Component} from 'react';
import Search from './components/Search';
import { connect } from 'react-redux';

import './App.scss';

import { createFetchUsers } from './api/fetchUsers.js';
import { createFetchUser } from './api/fetchUser.js';
import { clearUsers } from './api/clearUsers.js';
import Card from "./components/UserDetail";

class App extends Component {
  render() {
    const {
      dispatch,
      loading,
      data,
      userData,
      userLoading,
    } = this.props;
    
    console.log('prop', this.props)
    const hasData = Object.keys(data).length;
    const hasUserData = !!userData && Object.keys(userData).length;

    const renderOptions = hasData && data.items.map(item =>{
      return {
        value: item.login,
        key: item.id, 
        text: item.login,
        image: { avatar: true, src: item.avatar_url },
      }
    });
    return (
      <div className="App">
        <Search 
          clearState={this.clearState}
          createFetchUsers={createFetchUsers}
          clearUsers={clearUsers}
          createFetchUser={createFetchUser}
          dispatch={dispatch}
          loading={loading}
          options={renderOptions}
        />
        {
          !!hasUserData &&
          <Card
            data={userData}
            loading={userLoading}
          />
        }
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
