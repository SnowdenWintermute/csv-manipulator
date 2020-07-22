const fs = require("fs");

const saveAsCsv = function (string, name) {
  // console.log(string);
  fs.writeFile(`./public/${name}`, string, (err) => {
    if (err) console.log(err);
    else console.log("saved");
  });
};

module.exports = saveAsCsv;
