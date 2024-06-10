import CardsListComponent from "../../components/CardsList/CardsListComponent"
import { renderWithContext } from "../../utils/helpers/testingWithRedux"

test("render cards list component", () => {
    renderWithContext(<CardsListComponent />);
    expect(true).toBeTruthy();
})