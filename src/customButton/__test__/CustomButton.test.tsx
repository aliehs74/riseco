import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vitest } from "vitest";
import CustomButton from "..";
import "tailwindcss";


describe("CustomButton", () => {
    beforeEach(() => {
          vitest.clearAllMocks();
    })
    const label = "buttonLable"

    test("should render CustomButton with second varient", () => {
        render(<CustomButton label={label} variant="secondary" />);
        const btn = screen.getByTestId(label);

        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent(label);
        expect(btn).toHaveClass("btn btn-secondary");
    });

    test("should render CustomButton with lg size", () => {
        render(<CustomButton label={label} size="lg" variant="outline" />);
        const btn = screen.getByTestId(label);

        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent(label);
        expect(btn).toHaveClass("btn btn-outline btn-lg");
    });

    test("should render CustomButton with extra className", () => {
        render(<CustomButton label={label} className="testClass" />);
        const btn = screen.getByTestId(label);

        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent(label);
        expect(btn).toHaveClass("btn testClass ");
    });
});