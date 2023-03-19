import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container";
import Loader from "../Loader";

export default function Layout() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
