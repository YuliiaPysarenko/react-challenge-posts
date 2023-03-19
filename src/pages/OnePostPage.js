import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postsOperations, postsSelectors } from "../redux/posts";

import CommentForm from "../components/CommentForm";
import { Button, Container, Card } from "react-bootstrap";

export default function OnePostPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { postId } = useParams();

  useEffect(() => {
    dispatch(postsOperations.getOnePost(postId));
  }, [dispatch, postId]);

  const post = useSelector(postsSelectors.getChosenPost);

  const formSubmitHandler = async (data) => {
    dispatch(postsOperations.addComment(data))
  };

  const onDelete = async (postId) => {
    dispatch(postsOperations.deletePost(postId)).then(() => {
      navigate("/posts");
    })
  }

  return (
    <>
      <Container className="mb-5">
        <h1 className="mb-4">{post.title}</h1>
        <Card bg={"info"}>
          <Card.Body className="p-4">
            <Card.Text style={{ fontSize: "1.5rem" }}>{post.body}</Card.Text>
            <Container style={{textAlign: "right"}}>
              <Button size="lg" variant="info" onClick={() => navigate(`/posts/${postId}/edit`)}>Edit post</Button>
              <Button size="lg" variant="danger" onClick={() => onDelete(postId)}>Remove post</Button>
            </Container>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <div className="justify-content-between row row-cols-auto mb-3">
          <h2>Comments</h2>
        </div>
        <div>
          <CommentForm postId={Number(postId)} onSubmit={formSubmitHandler} />
        </div>
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <Card key={comment.id} className="mb-3">
              <Card.Header>{comment.email}</Card.Header>
              <Card.Body>
                <Card.Title>{comment.name}</Card.Title>
                <Card.Text>{comment.body}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>There are no comments for this post yet.</p>
        )}
      </Container>
    </>
  );
}
