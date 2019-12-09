import assert from "assert";
import { Method } from "../src/api";
import { TableComponent, SearchQueryType } from "../src/components";

describe("table_component", () => {
  it("create TableComponent class", () => {
    const tableComponent = new TableComponent(
      { method: Method.Get, path: "/test" },
      "test",
      10,
      ["/test-action1", "/test-action2"],
      true,
      "id",
      ["id", "name"]
    );
    assert.strictEqual(tableComponent.api.method, "get");
    assert.strictEqual(tableComponent.api.path, "/test");
    assert.strictEqual(tableComponent.name, "test");
    assert.strictEqual(tableComponent.auto_refresh_sec, 10);
    assert.strictEqual(tableComponent.actions?.[0], "/test-action1");
    assert.strictEqual(tableComponent.actions?.[1], "/test-action2");
    assert.strictEqual(tableComponent.pagination, true);
    assert.strictEqual(tableComponent.primary, "id");
    assert.strictEqual(tableComponent.table_labels?.[0], "id");
    assert.strictEqual(tableComponent.table_labels?.[1], "name");
  });
});
