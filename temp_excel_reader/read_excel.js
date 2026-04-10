const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..', 'properties listing.xlsx');
const workbook = XLSX.readFile(filePath);

const allData = {};
workbook.SheetNames.forEach(sheetName => {
  if (sheetName !== 'Pre rented') {
    const worksheet = workbook.Sheets[sheetName];
    allData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  }
});

fs.writeFileSync(path.join(__dirname, '..', 'excel_data_all.json'), JSON.stringify(allData, null, 2));
console.log('Excel data from all relevant sheets saved to excel_data_all.json');
