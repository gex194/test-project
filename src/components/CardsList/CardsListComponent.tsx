import { useDispatch, useSelector } from "react-redux";
import { useGetPostsQuery } from "../../api/apiSLice";
import { setCards } from "../../features/cardsFilter";
import Card from "../../interfaces/Card";
import CardsListItemComponent from "./CardsListItemComponent";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  CardsListContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 20,
    width: "100%",
    flexDirection: "row",
  },
});

const CardsListComponent = () => {
  const {
    data: cards,
    error,
    isError,
    isSuccess,
    isLoading,
  } = useGetPostsQuery("");
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const filteredCards = useSelector((state: any) => state.cards.filteredCards);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCards(cards));
    }
  }, [isSuccess, cards, dispatch]);

  const handleOnClick = (cardId: number) => {
    setSelected(cardId);
    if (cardId === selected) {
      setSelected(0);
    }
  };
  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>{error.toString()}</div>;
    }
    if (isSuccess) {
      return filteredCards.map((card: Card) => (
        <CardsListItemComponent
          handleOnClick={() => handleOnClick(card.cardId)}
          key={card.cardId}
          card={card}
          selected={selected}
        />
      ));
    }
  };

  return (
    <div>
      <div className={classes.CardsListContainer}>{renderContent()}</div>
    </div>
  );
};

export default CardsListComponent;
