import assert from "assert";
import { createSections } from "../src/section";

describe("section", () => {
  it("createSections", () => {
    const sections = {
      id: "label",
    };
    const result = createSections(sections);
    result[0].id = "id";
    result[0].label = "label";
  });
});
