import React from "react";
import { Component } from "react";
import "./App.css";
import { GoodsList } from "./Components/GoodsList";
import Item from "./Components/Item";
// import { Busket } from "./Components/Busket";
// import Columns from "./Components/Columns";
// import { Whole } from "./Components/testing";
// var Grid = require(‘react-grid’);
// import { Grid, Row, Col } from "bootstrap-grid-react";

const goodsList = [
  {
    name: "Peas",
    price: 0.95,
    type: "per bag"
  },
  {
    name: "Eggs",
    price: 2.1,
    type: "per dozen"
  },
  {
    name: "Milk",
    price: 1.3,
    type: "per bottle"
  },
  {
    name: "Beans",
    price: 0.73,
    type: "per can"
  }
];

// function Blog(props) {
//   const goodListArray = goodsList.map(goodsList => (
//     <div key={goodsList.id}>
//       <h3>
//         {goodsList.name} - ${goodsList.price} {goodsList.type}
//       </h3>
//     </div>
//   ));
//   return (
//     <div>
//       <hr />
//       {goodListArray}
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    // this.multiplyTwice = this.multiplyTwice.bind(this);
  }

  // multiplyTwice(e) {
  //   this.setState({ counter: this.state.counter + 1 });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Food Basket</h1>
        </header>
        <div>
          <code>
            <GoodsList />
            <Item item={this.goodsList} />
          </code>
        </div>
      </div>
    );
  }
}

export default App;
