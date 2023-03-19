import { useSelector } from "react-redux";
import { postsSelectors } from "../../redux/posts";
import PaginatedItems from "../PaginatedItems";
import { ListGroup } from "react-bootstrap";

const PostList = () => {
  const posts = useSelector(postsSelectors.getAllPosts);

  return (
    <>
      {posts ? (
        <ListGroup>
          <PaginatedItems items={posts} itemsPerPage={20} />
        </ListGroup>
      ) : null}
    </>
  );
};

export default PostList;
