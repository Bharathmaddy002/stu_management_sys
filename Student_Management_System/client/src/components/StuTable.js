import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default class StuTable extends Component {
  deleteStudata = () => {
    axios
      .delete("http://localhost:8000/stu/delete-studata/" + this.props.obj._id)
      .then((res) => {
        console.log("Student Data Successfully deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <tr>
        <td>{this.props.obj.firstname}</td>
        <td>{this.props.obj.lastname}</td>
        <td>{this.props.obj.location}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.dob}</td>
        <td>{this.props.obj.education}</td>
        <td>
          <Link className="edit-link" to={"/edit-stu/" + this.props.obj._id}>
            Edit
          </Link>{" "}
        </td>

        <td>
          <Button
            onClick={(e) => {
              if (window.confirm("Are you sure you wish to delete ?"))
                this.deleteStudata(e);
            }}
            size="sm"
            variant="danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
