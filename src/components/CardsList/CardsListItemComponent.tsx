import { createUseStyles } from "react-jss";
import Card from "../../interfaces/Card";

const useStyles = createUseStyles({
  ListItemContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginTop: 10,
    width: 300,
  },
  ListItemContainerSelected: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginTop: 10,
    width: 300,
    boxShadow: "0px 0px 20px -3px rgba(0,0,0,0.50)",
  },
  ListItemTitle: {
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 22,
    paddingLeft: 10,
  },
  ListItemCompanyName: {
    fontSize: 19,
    fontWeight: 600,
    paddingLeft: 10,
  },
  ListItemEmployer: {
    fontWeight: 700,
    fontSize: 20,
    backgroundColor: "#c7c6c6",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  ListItemStatusTags: {
    padding: 5,
    display: "flex",
    flexWrap: 'wrap',
    gap: 10,
  },
  TagItem: {
    backgroundColor: "#979797",
    color: "white",
    padding: 8,
    borderRadius: 15,
    fontSize: 17,
  },
  ListItemFooter: {
    padding: 10,
    display: "flex",
    color: "#afafaf",
    gap: 15,
  },
  ListItemAmount: {
    fontSize: 19,
    fontWeight: 600,
    paddingLeft: 10,
  },
  ListItemInn: {
    paddingLeft: 10,
    color: '#afafaf'
  },
});

const CardsListItemComponent = ({
  card,
  selected,
  handleOnClick,
}: {
  card: Card;
  selected: number;
  handleOnClick: any;
}) => {
  const classes = useStyles();
  return (
    <div
      className={
        selected === card.cardId
          ? classes.ListItemContainerSelected
          : classes.ListItemContainer
      }
    >
      <p className={classes.ListItemTitle} onClick={handleOnClick}>
        {card.cardTitle}
      </p>
      <p className={classes.ListItemAmount}>{card.amount} руб.</p>
      <div>
        <p className={classes.ListItemCompanyName}>{card.companyName}</p>
        <p className={classes.ListItemInn}>{card.inn} ИНН</p>
      </div>
      <div className={classes.ListItemStatusTags}>
        {card.cardStatusTags.map((item, idx) => (
          <div key={idx} className={classes.TagItem}>
            {item}
          </div>
        ))}
      </div>
      {selected === card.cardId && (
        <div>
          <p className={classes.ListItemEmployer}>{card.employer}</p>
          <div className={classes.ListItemStatusTags}>
            {card.employerTags.map((item, idx) => (
              <div key={idx} className={classes.TagItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={classes.ListItemFooter}>
        <p>{card.cardId}</p>
        <p>{card.createdDate}</p>
      </div>
    </div>
  );
};

export default CardsListItemComponent;
