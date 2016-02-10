var example = require('..');

example.Excel.staticSayHello('World!!@!@!@!@');









var a2z_excel = require('..');
var Excel = a2z_excel.Excel;

console.log('a2z-excel package test starts');
Excel.staticSayHello('Worldz!, [from Excel.staticSayHello]');
var xls = new Excel('xls')
console.log('xls: '+JSON.stringify(xls)) 
var workbook = xls.readFile( '/home/kimchi/my-npm-packages/a2z-excel/test/AAATEST.xls');
console.log('workbook: '+workbook) 
var testSheet = workbook.SheetNames;
console.log("Get the 1st Sheet Name (remember is an array): " + workbook.SheetNames[0]);
console.log("Get Some Cell from it: " + workbook.Sheets[testSheet[0]][
'C37'].v);

// We want JSON for this sheet:
var sheet = workbook.Sheets[testSheet[0]]

// You can get the sheet as list of lists.
//var options = { header : 1 }

// Or you  can get an object with column headers as keys.  
//var options = { header : ['title', 'fName', 'sName' ,'address' ] }

// If options is empty or omitted, it should use the first-row headers by default. 
// However this doesn't seem to work with all Excel worksheets. 
var options = {}

// Generate the JSON like so:
console.log(' xls.utils: '+JSON.stringify(xls.utils)) 
var workbookJson = xls.utils.sheet_to_json( sheet, options );

console.log("------------------------json result-----------------")

console.log(workbookJson)