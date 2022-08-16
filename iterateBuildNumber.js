// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const fs = require('fs');

fs.readFile('./build.json', function (err, content) {
  if (err) throw err;
  const build = JSON.parse(content);
  build.buildRevision += 1;
  fs.writeFile('./build.json', `${JSON.stringify(build)}\n`, function (err) {
    if (err) throw err;
    console.log(`Current build number: ${build.buildMajor}.${build.buildMinor}.${build.buildRevision}`);
  });
});
