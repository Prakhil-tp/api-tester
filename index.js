const helpers = require('./helpers');
const testCase = require('./testCases');

(async () => {
  await helpers.createOutputCSV();
  await testCase.synchronousRequsts();
  await testCase.asynchrounsRequsts();
  await helpers.createAvg();
})();