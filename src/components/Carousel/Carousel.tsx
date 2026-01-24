import { useContext} from "react";
import { DataContext } from "../../context/DataContext";

const Carousel = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("Carousel must be used within DataProvider");
  }

  const { data } = context;

  console.log(data);

  return <div>Carousel</div>;
};

export default Carousel;
