const { synchronousRequsts, asynchrounsRequsts } = require('./testCases');

(async () => {
  await synchronousRequsts();
  await asynchrounsRequsts();
})();