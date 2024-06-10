import { screen } from "@testing-library/react";
import CardsListItemComponent from "../../components/CardsList/CardsListItemComponent";
import Card from "../../interfaces/Card";
import { renderWithContext } from "../../utils/helpers/testingWithRedux";

const card: Card = {
  cardId: 2,
  createdDate: "1.1.1",
  cardTitle: "test",
  amount: 20,
  companyName: "testCompany",
  inn: 22,
  employer: "testEmployer",
  cardStatusTags: ["testTag", "testTag2"],
  employerTags: ["testEmpTag"],
};

test("render cards list item component", () => {
  renderWithContext(
    <CardsListItemComponent selected={0} handleOnClick={() => {}} card={card} />
  );
  expect(true).toBeTruthy();
});

test("render data on card list item when item is selected", () => {
  renderWithContext(
    <CardsListItemComponent selected={card.cardId} handleOnClick={() => {}} card={card} />
  );
  const cardId = screen.getByText(card.cardId);
  const createdDate = screen.getByText(card.createdDate);
  const cardTitle = screen.getByText(card.cardTitle);
  const amount = screen.getByText(card.amount + " руб.");
  const companyName = screen.getByText(card.companyName);
  const inn = screen.getByText(card.inn + " ИНН");
  const employer = screen.getByText(card.employer);
  const cardStatusTagsFirst = screen.getByText(card.cardStatusTags[0]);
  const cardStatusTagsSecond = screen.getByText(card.cardStatusTags[1]);
  const employerTags = screen.getByText(card.employerTags[0])

  expect(cardId).toBeInTheDocument();
  expect(createdDate).toBeInTheDocument();
  expect(cardTitle).toBeInTheDocument();
  expect(amount).toBeInTheDocument();
  expect(companyName).toBeInTheDocument();
  expect(inn).toBeInTheDocument();
  expect(employer).toBeInTheDocument();
  expect(cardStatusTagsFirst).toBeInTheDocument();
  expect(cardStatusTagsSecond).toBeInTheDocument();
  expect(employerTags).toBeInTheDocument();
});
