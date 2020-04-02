const fs = require('fs');

const { OUTPUT_FILE } = process.env;

const createOutputCSV = async () => {
  fs.writeFileSync(OUTPUT_FILE, 'TESTCASE,REQUEST,START TIME,END TIME,ELAPSED TIME,API');
}


async function appendToFile(contentObj) {
  let fileText = '\n';
  const values = Object.values(contentObj);
  values.forEach((value) => {
    fileText += `"${value}",`
  })

  fs.appendFileSync(OUTPUT_FILE, fileText, { encoding: 'utf8' })
}

module.exports = {
  createOutputCSV,
  appendToFile
}