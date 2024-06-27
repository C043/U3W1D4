import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import IsLoading from "./IsLoading";

class CommentArea extends Component {
  state = {
    reviews: [],
    isLoading: true,
  };

  fetchComments = async () => {
    console.log(this.props);
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZWQyNjdjMjM5YzAwMTUyZjRiMmUiLCJpYXQiOjE3MTk0ODc0NjQsImV4cCI6MTcyMDY5NzA2NH0.etOLICwJO7zEB3M0sNrl4SLSRePOVrlhw7mIBhrmOfE",
          },
        },
        { method: "GET" }
      );
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ reviews: data });
        this.setState({ isLoading: false });
      } else {
        throw new Error("Errore nel recapitare i dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    return (
      <>
        {this.state.isLoading ? <IsLoading /> : <CommentsList reviews={this.state.reviews} />}
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
