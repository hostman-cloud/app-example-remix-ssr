# Remix SSR

Example of a [Remix](https://remix.run/) application with server-side rendering (SSR) that can be deployed to **Hostman** without configuration.

:tada: [Demo]()

:rocket: [Create your Apps](https://hostman.com/my/apps/create)

:books: [Hostman Apps Documentation](https://hostman.com/docs/app-platform/backend-apps/)

## Deployment settings

Enable SSR support when creating the app: it will be deployed as a Node.js backend.

| Parameter     | Value              |
| ------------- | ------------------ |
| Framework     | Remix, SSR enabled |
| Build command | `npm run build`    |
| Start command | `npm run start`    |

The `start` script runs the built app with `react-router-serve`. The server listens on all interfaces, the default port is `3000`, it can be changed with the `PORT` environment variable.

Static version: [app-example-remix](https://github.com/hostman-cloud/app-example-remix).

## What the example shows

- `/`: the page is rendered on the server on every request; the render time, Node.js version and `User-Agent` come from the `loader` and are already in the HTML.
- `/about`: the second page of the app.
- `/api/hello`: a resource route that returns JSON.

## <a name="dev"></a>Running locally

```bash
# install dependencies
npm install

# run in development mode with file watching
npm run dev

# build for production
npm run build

# start the built application
npm run start
```
