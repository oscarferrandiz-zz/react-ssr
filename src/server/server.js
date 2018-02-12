import React from 'react';
import Hapi from 'hapi';
import ReactDOMServer from 'react-dom/server';
import App from '../universal/components/App';

const server = Hapi.server({
  host: 'localhost',
  port: 8000,
});

server.route({
  method: 'GET',
  path: '/',
  config: {
    state: {
      parse: false,
      failAction: 'ignore',
    },
  },
  handler() {
    return `
      <html>
        <head></head>
        <body>
          <div id="app">
            ${ReactDOMServer.renderToString(<App />)}
          </div>
          <script src="/build/bundle.js"></script>
        </body>
      </html>`;
  },
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

start();
