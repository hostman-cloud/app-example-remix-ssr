import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About — Remix SSR" }];
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        A basic{" "}
        <a href="https://remix.run" target="_blank" rel="noopener noreferrer">
          Remix
        </a>{" "}
        (React Router in framework mode) application with server-side rendering.
        Routes are defined in <code>app/routes.ts</code>, and the built app is
        served by <code>react-router-serve</code>.
      </p>
    </>
  );
}
