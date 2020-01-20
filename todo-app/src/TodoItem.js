import React from 'react';
import "./index.scss";
import 'bootstrap/dist/css/bootstrap.css';


class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  markCompleted(event) {
    this.props.onItemCompleted(this.props.id);
  }
  deleteItem(event) {
    this.props.onDeleteItem(this.props.id);
  }

  render() {
    var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
    return (
      <li className={itemClass} ref={li => this._listItem = li }>
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" onChange={this.markCompleted} /> {this.props.text}
        </label>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
      </li>
    );
  }
}

export default TodoItem;