import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("homepage", () => {
  it("should render the component and show La locanda del tech", () => {
    render(<Page />);
    const homescreenTitleId = screen.getByTestId("homescreen-title");
    expect(homescreenTitleId).toBeDefined();
  });
});
