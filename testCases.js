const https = require('https');
const axios = require('axios');
const helpers = require('./helpers') 

const {
  TEST_API,
  REQUEST_LIMIT,
  OUTPUT_FILE
} = process.env

const synchronousRequsts = async () => {
  for(let req=1; req <= REQUEST_LIMIT; req++) {
    let startTime = new Date().getTime();
    await axios.get(TEST_API);
    let endTime = new Date().getTime();

    helpers.appendToFile(OUTPUT_FILE,{
      'TESTCASE': 'Test case 1',
      'REQUEST': `Request ${req}`,
      'START TIME': startTime,
      'END TIME': endTime,
      'ELAPSED TIME': endTime-startTime,
      'API': TEST_API
    })
 }
}
const asynchrounsRequsts = async () => {

  function handleRequestResult () {
    let endTime = new Date().getTime();
    helpers.appendToFile(OUTPUT_FILE,{
      'TESTCASE': 'Test case 2',
      'REQUEST': `Request ${this.req}`,
      'START TIME': this.startTime,
      'END TIME': endTime,
      'ELAPSED TIME': endTime - this.startTime ,
      'API': this.api
    })
  }

  for(let req=1; req <= REQUEST_LIMIT; req++) {
    let startTime = new Date().getTime();
    https.get(TEST_API, handleRequestResult.bind({startTime,api:TEST_API, req}));
  }
}

module.exports = {
  synchronousRequsts,
  asynchrounsRequsts
}