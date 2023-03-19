import { useState } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { postsOperations } from "../../redux/posts";
import { authSelectors } from "../../redux/auth";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from 'prop-types';

function CommentForm({ postId, onSubmit }) {
  const user = useSelector(authSelectors.selectUser);
  const [commentFields, setCommentFields] = useState({
    postId,
    name: "",
    body: "",
    email: user.email
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCommentFields({ ...commentFields, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(commentFields);
    reset();
  };

  function reset() {
    setCommentFields({
      name: "",
      body: "",
    });
  }

  return (
    <Card className="p-5 mb-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={"title"}>Title</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={commentFields.name}
            id={"name"}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={"body"}>Body</Form.Label>
          <Form.Control
            type="textarea"
            name="body"
            value={commentFields.body}
            id={"body"}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit">Add Comment</Button>
      </Form>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      dispatch(postsOperations.addComment(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);

CommentForm.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func
}