import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Search from "./index.js";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  "value"
).set;

it("should call debouncedFetchUsers prop when the input changes", () => {
  const debouncedFetchUsers = jest.fn();
  act(() => {
    ReactDOM.render(
      <Search debouncedFetchUsers={debouncedFetchUsers} />,
      container
    );
  });
  const input = container.getElementsByTagName("input")[0];
  act(() => {
    nativeInputValueSetter.call(input, "selimsevencan");
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
  expect(debouncedFetchUsers).toBeCalledWith("selimsevencan");
});
