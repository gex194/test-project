import { createUseStyles } from "react-jss";
import "./App.css";
import CardsPage from "./pages/CardsPage/CardsPage";

const useStyles = createUseStyles({
  App: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    height: '100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <CardsPage />
    </div>
  );
}

export default App;
