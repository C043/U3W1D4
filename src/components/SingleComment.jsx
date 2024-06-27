import { Component } from "react";

class SingleComment extends Component {
  handleDelete = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MTk0ODc0NjQsImV4cCI6MTcyMDY5NzA2NH0.etOLICwJO7zEB3M0sNrl4SLSRePOVrlhw7mIBhrmOfE",
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify(this.props.id),
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
    console.log(this.props.id);
    return (
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <p>
          {this.props.author} gave {this.props.rate}/5 <br /> "{this.props.comment}"
        </p>
      </div>
    );
  }
}

export default SingleComment;
