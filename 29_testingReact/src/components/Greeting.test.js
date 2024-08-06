import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("Renders 'Hello world' as a text", () => {
    //Three A's:
    //    -> Arrange => setup test data, test conditions and test environment
    render(<Greeting />);

    //    -> Act => run logic that should be tested (execute function)

    //      -> Assert => Compare execution with expected results
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: true,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders 'good to see' you if the button was not clicked", () => {
    render(<Greeting />);

    const outputText = screen.getByText("It is good to see you!", {
      exact: true,
    });
    expect(outputText).toBeInTheDocument();
  });

  test("Renders 'Changed' if the button was clicked", () => {
    //Three A's:
    //    -> Arrange => setup test data, test conditions and test environment
    render(<Greeting />);

    //    -> Act => run logic that should be tested (execute function)
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //      -> Assert => Compare execution with expected results
    const changed = screen.getByText("Changed!", {
      exact: true,
    });
    expect(changed).toBeInTheDocument();
  });

  test("Do not render 'good to see' you if the button was not clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputText = screen.queryByText("It is good to see you!", {
      exact: false,
    });
    expect(outputText).toBeNull();
  });
});
