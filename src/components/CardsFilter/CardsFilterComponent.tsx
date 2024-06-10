import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByEmployeeName, filterById } from "../../features/cardsFilter";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Input: {
    borderRadius: 15,
    border: 'none',
    padding: 10,
    paddingLeft: 40,
    outline: 'none',
    borderInline: 'none',
    boxSizing: 'border-box',
    backgroundImage: "url('search.png')",
    backgroundPosition: '10px 7px',
    backgroundSize: '20px 20px',
    backgroundRepeat: 'no-repeat',
    '&:focus': {
      boxShadow: "0px 0px 12px -3px rgba(0,0,0,0.75)",
    }
  },
  InputContainer: {
    display: "flex",
    gap: 15,
  },
});

const CardsFilterComponent = () => {
  const [cardIdSearchInput, setCardIdSearchInput] = useState("");
  const [employeeNameSearchInput, setEmployeeNameSearchInput] = useState("");

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleCardIdSearchInput = (e: any) => {
    setCardIdSearchInput(e.target.value);
  };

  const handleEmployeeNameSearchInput = (e: any) => {
    setEmployeeNameSearchInput(e.target.value);
  };

  const filterCardsByCardId = (e: any) => {
    if (e.key === "Enter") {
      dispatch(filterById(cardIdSearchInput));
    }
  };

  const filterCardsByEmployeeName = (e: any) => {
    if (e.key === "Enter") {
      dispatch(filterByEmployeeName(employeeNameSearchInput));
    }
  };

  return (
    <div className={classes.InputContainer}>
      <input
        type="number"
        className={classes.Input}
        placeholder="Номер заявки"
        value={cardIdSearchInput}
        onInput={handleCardIdSearchInput}
        onKeyDown={filterCardsByCardId}
      />
      <input
        className={classes.Input}
        placeholder="Наименование клиента"
        value={employeeNameSearchInput}
        onInput={handleEmployeeNameSearchInput}
        onKeyDown={filterCardsByEmployeeName}
      />
    </div>
  );
};

export default CardsFilterComponent;
