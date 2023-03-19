import { useState } from "react";
import { useSelector } from "react-redux";
import { postsSelectors } from "../../redux/posts";
import { Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function PostForm({ postId, onSubmit }) {
  const chosenPost = useSelector(postsSelectors.getChosenPost);
  const [postFields, setPostFields] = useState({
    title: postId ? chosenPost.title : "",
    body: postId ? chosenPost.body : "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPostFields({ ...postFields, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postId, postFields);
    reset();
  };

  function reset() {
    setPostFields({
      title: "",
      body: "",
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor={"title"}>Post Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={postFields.title}
          id={"title"}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label htmlFor={"body"}>Post Body</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={postFields.body}
          id={"body"}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit">{postId ? "Update post" : "Add post"}</Button>
    </Form>
  );
}

PostForm.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func
}