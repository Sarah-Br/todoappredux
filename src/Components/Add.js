import { Modal, Button } from "antd";
import { connect } from "react-redux";
import React from "react";
import { addtask } from "../Actions/actions";

class Add extends React.Component {
  state = {
    visible: false,
    newTodo: ""
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
    this.props.add({
      id: Math.random(),
      task: this.state.newTodo,
      checked: false,
      edited: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Task
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input
            type="text"
            placeholder="Whats your task today?"
            onChange={event => this.setState({ newTodo: event.target.value })}
          />
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: payload => dispatch(addtask(payload))
  };
};

export default connect(null, mapDispatchToProps)(Add);
