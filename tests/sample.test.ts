import { expect, describe, it } from "vitest"
import YAML from "yaml"
import fs from "fs"

describe("YAML Validation", () => {
  it("should be valid YAML", () => {
    const info = fs.readFileSync("./data/info.yml", "utf-8");
    expect(() => {
      YAML.parse(info);
    }).not.toThrow();
    expect(true).toBe(true);
  })
})