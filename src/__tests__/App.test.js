/* eslint-disable */
import { cleanup, render } from "@testing-library/react";
import App from "../components/App";


afterEach(cleanup)

it("Should take a snapshot", () => {
  const {asFragment} = render(<App />);
  
  expect(asFragment(<App />)).toMatchSnapshot()
});
