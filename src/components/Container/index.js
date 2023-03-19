import { Container as MainContainer } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <MainContainer style={{ marginTop: "6rem" }}>{children}</MainContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node
}