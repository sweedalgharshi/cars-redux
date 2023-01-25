import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredData = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredData.reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
