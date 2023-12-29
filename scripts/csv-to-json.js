const csv = require("csv-parser");
const fs = require("fs");
const results = [];
const files = [
  "app/api/insurance_plans/insurance_plans",
  "app/api/specialties/specialties",
  "app/api/visit_reasons/visit_reasons",
];

files.forEach((file) => {
  fs.createReadStream(`${file}.csv`)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      fs.writeFileSync(`${file}.json`, JSON.stringify(results, null, 2));
    });
});
