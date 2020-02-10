import React from "react";
import { connect } from "react-redux";
import List from'./List';
// import Add from'./Add';



const App = (props) => {
  return (<div>
    <h1 style={{display:'flex',justifyContent:'center',fontSize:"xxx-large", color:'Blue'}}>TodoList</h1>
      <List />
      

      </div>)
    }


const mapStateToProps = state => {
  return {

  };
};


export default connect(mapStateToProps)(App);
