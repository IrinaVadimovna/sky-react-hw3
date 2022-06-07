/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-array-index-key */
import React from "react";
import Car from "./components/Car";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        { name: "Ford", year: "2018" },
        { name: "Audi", year: "2016" },
        { name: "Mazda", year: "2010" },
      ],
      pageTitle: "React components",
      showCars: false,
    };
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;

    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars,
    });
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  deleteHandler(index) {
    const cars = this.state.cars.concat();

    cars.splice(index, 1);
    this.setState({ cars });
  }

  render() {
    let carss = null;
    if (this.state.showCars) {
      carss = this.state.cars.map((car, index) => (
        <Car
          key={index}
          name={car.name}
          year={car.year}
          onDelete={this.deleteHandler.bind(this, index)}
          onChangeName={(event) => this.onChangeName(event.target.value, index)}
        />
      ));
    }
    return (
      <div className="mainBlock">
        <h1>{this.state.pageTitle}</h1>

        <button type="button" onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>
        <div className="cars">{carss}</div>
      </div>
    );
  }
}

export default App;

/* const App = () => (
   <div className="mainBlock">
     <Car name="Ford" year={2018} />
     <Car name="Audi" year={2016} />
     <Car name="Mazda" year={2010} />
   </div>
 ); */

/* <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={() => this.changeTitleHundelr(cars[0].name)}
        />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHundelr(cars[1].name)}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHundelr(cars[2].name)}
        />  */

/* <Header props = {props}/>  - > React.createElement( Header, {}, {}) */
