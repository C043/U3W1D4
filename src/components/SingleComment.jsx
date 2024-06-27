import { Component } from "react";
import { Button } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";
class SingleComment extends Component {
  state = {
    id: this.props.id,
  };

  handleDelete = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.id, {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MTk0ODc0NjQsImV4cCI6MTcyMDY5NzA2NH0.etOLICwJO7zEB3M0sNrl4SLSRePOVrlhw7mIBhrmOfE",
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      if (resp.ok) {
        window.alert("Recensione eliminata!");
      } else {
        throw new Error("Errore nella cancellazione del dato");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.id);
    return (
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <p>
            {this.props.author} <br /> gave {this.props.rate}/5 <br /> "{this.props.comment}"
          </p>
          <Button variant="danger" className="ms-auto" onClick={() => this.handleDelete()}>
            <Trash3 />
          </Button>
        </div>
      </div>
    );
  }
}

export default SingleComment;
