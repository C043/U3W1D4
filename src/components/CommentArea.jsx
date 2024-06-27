import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    reviews: [],
  };
  fetchComments = () => {
    console.log(this.props);
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    return (
      <>
        {/*         <CommentsList />
        <AddComment />
 */}
      </>
    );
  }
}

export default CommentArea;
