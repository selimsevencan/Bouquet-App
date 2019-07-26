import React, {Component} from 'react';
import Search from './components/Search';
import { connect } from 'react-redux';

import './App.scss';

import { createFetchUsers } from './api/fetchUsers.js';
import { clearUsers } from './api/clearUsers.js';
import Card from "./components/UserDetail";

class App extends Component {
  render() {
    const {
      dispatch,
      loading,
      data,
    } = this.props;
    
    console.log(this.props)
    return (
      <div className="App">
        <Search 
          clearState={this.clearState}
          createFetchUsers={createFetchUsers}
          clearUsers={clearUsers}
          dispatch={dispatch}
          loading={loading}
        />
        <Card
          data={data}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.users.data,
    loading: state.users.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
