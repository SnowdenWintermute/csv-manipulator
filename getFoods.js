const { indexOf } = require("./data1");

module.exports = function (data, forBrowser) {
  const familyArray = [];

  data.forEach((registration) => {
    const familyToReturn = {};

    if (registration["Date of Trip__2"] === "2020-07-23") {
      familyToReturn.familyName = registration["Family Name"];
      const lunches = [];
      Object.keys(registration).forEach((item) => {
        if (item.slice(0, 5) === "Lunch") {
          const noCommas = registration[item]
            .split("")
            .map((letter) => {
              if (letter === "," || letter === ";") {
                return "";
              } else {
                return letter;
              }
            })
            .join("");
          lunches.push(noCommas);
        }
      });

      lunches.forEach((entry) => {
        // console.log(entry + "\n");
        if (
          entry === "Dairy Free" ||
          entry === ";Gluten Free" ||
          entry === "Vegan"
        ) {
          console.log("ey");
          lunches[indexOf(entry) - 1] =
            lunches[indexOf(entry) - 1] + lunches[indexOf(entry)];
          lunches.splice(indexOf(entry), 1);
        }
      });

      familyToReturn.lunches = lunches;
      const dinners = [];
      Object.keys(registration).forEach((item) => {
        if (item.slice(0, 6) === "Dinner") {
          const noCommas = registration[item]
            .split("")
            .map((letter) => {
              if (letter === "," || letter === ";") {
                return "";
              } else {
                return letter;
              }
            })
            .join("");
          dinners.push(noCommas);
        }
      });
      familyToReturn.dinners = dinners;

      const familyString = `${
        familyToReturn.familyName
      },${familyToReturn.lunches.join(",")},${familyToReturn.dinners.join(
        ","
      )}}`;

      familyArray.push(familyString);
    }
  });

  // const stringToConvert =

  return familyArray.join("\n");
};
