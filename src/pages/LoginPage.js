import { useState } from "react";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import { login } from "../redux/auth/auth-slice";
import { Container, Stack, Form, Button } from "react-bootstrap";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    authOperations
      .signInWithEmailAndPassword(authOperations.auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
        setEmail("");
        setPassword("");
        redirect("/posts");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container className="pt-5">
      <Stack gap={2} className="col-md-5 mx-auto mt-5">
        <h1>Log in</h1>

        <Form onSubmit={handleSubmit} autoComplete="off">
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

          <Button type="submit">Log in</Button>
        </Form>
      </Stack>
    </Container>
  );
}
