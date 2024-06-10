import App from "../App";
import { renderWithContext } from "../utils/helpers/testingWithRedux";

test("renders App", () => {
  renderWithContext(<App />);
  expect(true).toBeTruthy();
});
