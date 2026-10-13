import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Remix SSR" }];
}

/* loader runs only on the server, the browser receives just its result */
export function loader({ request }: Route.LoaderArgs) {
  return {
    renderedAt: new Date().toISOString(),
    nodeVersion: process.version,
    userAgent: request.headers.get("user-agent") ?? "—",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Home</h1>
      <p className="lead">
        This page is rendered on the server (SSR) on every request.
      </p>

      <dl className="info">
        <dt>Rendered at</dt>
        <dd>
          <code>{loaderData.renderedAt}</code>
        </dd>
        <dt>Node.js</dt>
        <dd>
          <code>{loaderData.nodeVersion}</code>
        </dd>
        <dt>User-Agent</dt>
        <dd>
          <code>{loaderData.userAgent}</code>
        </dd>
      </dl>

      <p>
        Refresh the page and the render time will change. API endpoint example:{" "}
        <a href="/api/hello">/api/hello</a>.
      </p>
    </>
  );
}
