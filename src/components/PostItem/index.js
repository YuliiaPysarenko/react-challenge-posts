import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const PostItem = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  return (
    <ListGroup.Item
      className="p-4"
      action
      onClick={() => navigate(`/posts/${id}`)}
    >
      <h2>{title}</h2>
      <div>{body}</div>
    </ListGroup.Item>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default PostItem;
