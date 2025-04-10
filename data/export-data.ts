import fs from "fs";
import YAML from "yaml";

const infoFile = fs.readFileSync("./data/info.yml", "utf-8");
export default YAML.parse(infoFile);