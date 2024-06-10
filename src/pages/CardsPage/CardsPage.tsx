import CardsFilterComponent from "../../components/CardsFilter/CardsFilterComponent";
import CardsListComponent from "../../components/CardsList/CardsListComponent";

const CardsPage = () => {
  return (
    <div>
      <div>
        <CardsFilterComponent />
      </div>
      <div>
        <CardsListComponent />
      </div>
    </div>
  );
};

export default CardsPage;
