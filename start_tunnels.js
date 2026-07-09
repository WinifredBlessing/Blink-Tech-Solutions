const localtunnel = require('localtunnel');
const fs = require('fs');

(async () => {
  try {
    const backendTunnel = await localtunnel({ port: 5000 });
    console.log('Backend URL:', backendTunnel.url);
    fs.writeFileSync('tunnel_backend_url.txt', backendTunnel.url);

    const frontendTunnel = await localtunnel({ port: 3000 });
    console.log('Frontend URL:', frontendTunnel.url);
    fs.writeFileSync('tunnel_frontend_url.txt', frontendTunnel.url);

    console.log('Tunnels are running. Leave this process open.');
  } catch (error) {
    console.error('Error starting tunnels:', error);
  }
})();
