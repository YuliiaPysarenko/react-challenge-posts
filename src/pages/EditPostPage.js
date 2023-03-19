import { useNavigate, useParams } from "react-router-dom";
import { postsOperations } from "../redux/posts";
import { useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import { Container, Card } from "react-bootstrap";

export default function EditPostPage() {
  let { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = async (postId, data) => {
    postId
      ? dispatch(postsOperations.updatePost({ postId, data })).then((data) => {
          navigate(`/posts/${postId}`);
        })
      : dispatch(postsOperations.addPost(data)).then((data) => {
          navigate("/posts");
        });
  };

  return (
    <>
      <Container className="mb-5">
        <h1 className="mb-4">{postId ? "Edit post" : "Create a new post"}</h1>
        <Card bg={"info"} className="p-4">
          <PostForm postId={Number(postId)} onSubmit={formSubmitHandler} />
        </Card>
      </Container>
    </>
  );
}
