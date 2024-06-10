import { screen } from "@testing-library/react";
import CardsFilterComponent from "../../components/CardsFilter/CardsFilterComponent";
import {
  filterByCardIdInputPlaceholder,
  filterByEmployeeNameInputPlaceholder,
} from "../../constants/constants";
import { renderWithContext } from "../../utils/helpers/testingWithRedux";

test("renders cards list filter", () => {
  renderWithContext(<CardsFilterComponent />);
  expect(true).toBeTruthy();
});

test("renders filter inputs", () => {
  renderWithContext(<CardsFilterComponent />);
  const filterByCardIdInput = screen.getByPlaceholderText(
    filterByCardIdInputPlaceholder
  );
  const filterByEmployeeNameInput = screen.getByPlaceholderText(
    filterByEmployeeNameInputPlaceholder
  );
  expect(filterByCardIdInput).toBeInTheDocument();
  expect(filterByEmployeeNameInput).toBeInTheDocument();
});
