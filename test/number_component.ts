import assert from "assert";
import { Method } from "../src/api";
import { NumberComponent } from "../src/components";

describe("number_component", () => {
  it("create NumberComponent class", () => {
    const numberComponent = new NumberComponent(
      { method: Method.Get, path: "/test" },
      "test",
      10,
      "unit"
    );
    assert.strictEqual(numberComponent.api.method, "get");
    assert.strictEqual(numberComponent.api.path, "/test");
    assert.strictEqual(numberComponent.name, "test");
    assert.strictEqual(numberComponent.auto_refresh_sec, 10);
    assert.strictEqual(numberComponent.unit, "unit");
  });
});
