const fs = require('fs');
const csv = require('csvtojson');

const { OUTPUT_FILE, OUTPUT_AVG_FILE } = process.env;

// create output csv files
const createOutputCSV = async () => {
  fs.writeFileSync(OUTPUT_FILE, 'TESTCASE,REQUEST,START TIME,END TIME,ELAPSED TIME,API');
  if(!fs.existsSync(OUTPUT_AVG_FILE)){
    fs.writeFileSync(OUTPUT_AVG_FILE, 'TIMESTAMP,TESTCASE,TOTAL REQUEST,NET TIME,AVG ELAPSED TIME');
  }
}

async function appendToFile(filePath,contentObj) {
  let fileText = '\n';
  const values = Object.values(contentObj);
  values.forEach((value) => {
    fileText += `"${value}",`
  })

  fs.appendFileSync(filePath, fileText, { encoding: 'utf8' })
}

async function createAvg() {
  const testCaseData = await csv().fromFile(OUTPUT_FILE);
  // returns an object contains average details
  const avgData = testcaseStr => {
    const avgData = testCaseData
    .filter(({ TESTCASE }) => TESTCASE.includes(testcaseStr))
    .reduce((acc, el) => {
      acc.totalReq += 1;
      acc.totalTime += parseInt(el['ELAPSED TIME']);
      return acc
    },{totalReq:0, totalTime:0});
    avgData.average = avgData.totalTime / avgData.totalReq;
    return avgData
  }
  const writeFile = async (data, testCaseStr, time) => {
    await appendToFile(OUTPUT_AVG_FILE, {
      'TIMESTAMP': time,
      'TESTCASE': `Test case ${testCaseStr}`,
      'TOTAL REQUEST': data.totalReq,
      'NET TIME': data.totalTime,
      'AVG ELAPSED TIME': data.average
    })
  }
  
  const testCase1 = avgData('1');
  const testCase2 = avgData('2');
  let currentTime = new Date().getTime();
  await writeFile(testCase1,'1',currentTime);
  await writeFile(testCase2,'2',currentTime);

}



module.exports = {
  createOutputCSV,
  appendToFile,
  createAvg
}