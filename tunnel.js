const { spawn } = require('child_process');
const fs = require('fs');

const ssh = spawn('ssh', ['-R', '80:localhost:5000', 'nokey@localhost.run'], {
  stdio: ['ignore', 'pipe', 'pipe']
});

ssh.stdout.on('data', (data) => {
  fs.appendFileSync('localhostrun_out.txt', data.toString());
});

ssh.stderr.on('data', (data) => {
  fs.appendFileSync('localhostrun_out.txt', data.toString());
});

ssh.on('close', (code) => {
  fs.appendFileSync('localhostrun_out.txt', `Process exited with code ${code}\n`);
});
