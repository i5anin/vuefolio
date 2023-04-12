const { execSync } = require('child_process')

const version = {
  appVersion: '1.0.0',
  commitHash: execSync('git rev-parse HEAD').toString().trim(),
}

export default version
