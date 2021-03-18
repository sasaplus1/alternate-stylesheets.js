module.exports = {
  '*.js': ['eslint --cache --ext .js', 'prettier --check'],
  '*.ts': ['eslint --cache --ext .ts', 'prettier --check', 'tsc --noEmit'],
  'package.json': [
    'npx fixpack --dryRun',
    'prettier --check --parser json-stringify'
  ],
  'package-lock.json': 'node -e "process.exitCode = 1;"'
};
