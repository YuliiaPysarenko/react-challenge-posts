import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import { logout } from "../../redux/auth/auth-slice";
import defaultAvatar from "./default-avatar.png";
import { Button } from "react-bootstrap";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(authSelectors.selectUser);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span className="text-light me-3">Welcome, {userData.displayName ? userData.displayName : userData.email}</span>
      <Button
        variant="light"
        type="button"
        onClick={() => {
          dispatch(logout());
          authOperations.auth.signOut();
        }}
      >
        Log Out
      </Button>
    </div>
  );
}
