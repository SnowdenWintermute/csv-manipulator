const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
expressServer = app.listen("8080");

const data1 = require("./data1");
const getFoods = require("./getFoods");
const fileSaver = require("./fileSaver");

const dataCsv = getFoods(data1, false);
// const arrayForBrowser = formatDataCsv(data1, true);

fileSaver(dataCsv, "rawCsv.csv");
// fileSaver(arrayForBrowser, "arrayForBrowser.js");
