import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

export function renderWithContext(element: React.ReactElement) {
    render(
        <Provider store={store}>
            {element}
        </Provider>
    )
}