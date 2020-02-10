import React from "react";
import { connect } from "react-redux";
import {
  deletetask,
  completetask,
  edittask,
  toggleedit
} from "../Actions/actions";
import Add from'./Add';     

class List extends React.Component {
  state = {
    editedTask: ""
  };
  render() {
    return (
      <div  style={{
        display: "block",
        justifyContent: "center",
        margin: "30px"
      }}>
        {this.props.todolist.map(el => (
          <div
           
          >
            <input
             
              type="text"
              value={el.edited ? this.state.editedTask : el.task}
              onChange={event =>
                this.setState({ editedTask: event.target.value })
              }
              style={
                el.checked
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              readOnly={!el.edited}
            />

            <button onClick={() => this.props.delete(el.id)}>Delete</button>
            <button
              onClick={() => {
                this.props.toggle(el.id);
                this.props.edit({
                  id: el.id,
                  newTask: this.state.editedTask
                });
                this.setState({ editedTask: "" });
              }}
            >
              {el.edited ? "Save" : "Edit"}
            </button>
            <button onClick={() => this.props.complete(el.id)}>
              {el.checked ? "Undo" : "Complete"}
            </button>
            
          </div>
        ))}
        <Add />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todolist: state.todolist
  };
};
const mapDispatchToProps = dispatch => {
  return {
    complete: x => dispatch(completetask(x)),
    edit: x => dispatch(edittask(x)),
    delete: x => dispatch(deletetask(x)),
    toggle: x => dispatch(toggleedit(x))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
