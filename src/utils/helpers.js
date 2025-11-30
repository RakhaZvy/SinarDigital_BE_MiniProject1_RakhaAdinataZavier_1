const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../data/data.json");

const loadData = () => {
  try {
    const dataBuffer = fs.readFileSync(dataPath);
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

const saveData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

module.exports = { loadData, saveData };
