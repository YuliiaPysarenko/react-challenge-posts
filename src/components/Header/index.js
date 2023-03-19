import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../../redux/auth';

// styles
import { Navbar, Container } from 'react-bootstrap';

export default function Header() {
  const userData = useSelector(authSelectors.selectUser);
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container>
            <Navigation />
            {userData ? <UserMenu /> : <AuthNav />}
      </Container>
    </Navbar>
  );
}