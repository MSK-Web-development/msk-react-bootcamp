import React from 'react';
import { connect } from "react-redux";
import { INCREMENT } from '../redux/actions'

const App = ({ dispatch, count }) => {

  const handleClick = () => {
    dispatch({
      type: INCREMENT,
    })
  }

  return (
    <div>
      <button
        onClick={handleClick}>
        Increase
      </button>
      {count}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;