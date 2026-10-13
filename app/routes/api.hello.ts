/* Resource route: no component, responds from the loader */
export function loader() {
  return Response.json({
    message: "Hello from the Remix API (runs on the server)",
    at: new Date().toISOString(),
  });
}
