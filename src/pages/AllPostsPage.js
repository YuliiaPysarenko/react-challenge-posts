import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postsOperations } from "../redux/posts";
import { useNavigate } from "react-router-dom";

import PostList from "../components/PostList";
import { Button, Row } from "react-bootstrap";

export default function AllPostsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(postsOperations.getPosts());
  }, [dispatch]);

  return (
    <>
      <Row xs="auto" className="justify-content-between">
        <h2 className="">Posts</h2>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/posts/create")}
        >
          Add new post
        </Button>{" "}
      </Row>
      <Row className="mx-auto mt-5 justify-content-md-center">
        <PostList />
      </Row>
    </>
  );
}
