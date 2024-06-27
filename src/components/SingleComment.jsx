const SingleComment = props => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <p>
        {props.author} gave {props.rate}/5 <br /> "{props.comment}"
      </p>
    </div>
  );
};

export default SingleComment;
