import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import { login } from "../redux/auth/auth-slice";
import { Container, Stack, Form, Button } from "react-bootstrap";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth, createUserWithEmailAndPassword, updateProfile } =
    authOperations;

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            })
          );
        });
      })
      .catch((err) => {
        alert(err);
      });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container className="pt-5">
      <Stack gap={2} className="col-md-5 mx-auto mt-5">
        <h1>Registration</h1>

        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Petro Petrenko"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Stack>
    </Container>
  );
}
