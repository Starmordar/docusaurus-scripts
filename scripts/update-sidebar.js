const fs = require("fs");

function getParsedJson(json) {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.error("Error parsing JSON string:", err);
    return {};
  }
}

fs.readFile("../static/sidebar.json", "utf8", (err, jsonString) => {
  if (err) {
    console.error("File read failed:", err);
    return;
  }

  const sidebar = getParsedJson(jsonString);

  console.log("sidebar", sidebar);
});
