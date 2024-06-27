import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    console.log("------>", this.props.reviews);
    {
      return (
        this.props.reviews.length > 0 &&
        this.props.reviews.map(review => <SingleComment key={review._id} comment={review.comment} />)
      );
    }
  }
}

export default CommentsList;
