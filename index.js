let csvToJson = require('convert-csv-to-json');

let fileInputName = 'glossary.csv'; 
let fileOutputName = 'glossary.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
let jsonfile = csvToJson.parseSubArray('*',' ').getJsonFromCsv('glossary.csv');
// csvToJson.parseSubArray('*',',').generateJsonFileFromCsv(fileInputName,fileOutputName);



// let json = csvToJson
// .supportQuotedField(true)
// .parseSubArray('*',' ')
// .getJsonFromCsv("glossary.csv");
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
// }
// console.log(json[0])
