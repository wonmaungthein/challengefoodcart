import React from "react";
import Button from "react-bootstrap/lib/Button";
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";

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

const goodsArray = goodsList.map(function(good) {
  return (
    <div key={good.name}>
      <h3>
        {good.name} - ${good.price} {good.type} <Button> Add the item </Button>{" "}
        <Button> Remove the item </Button>
      </h3>{" "}
    </div>
  );
});

// class Busket extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }
//   render() {
//     return (
//       <div className="App-intro">
//         <h1>The in the basket</h1>
//         <h1>{this.state.counter}</h1>
//       </div>
//     );
//   }
// }

export class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.multiplyTwice = this.multiplyTwice.bind(this);
  }

  multiplyTwice(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <div className="App-intro">
          <div className="firstCol">{goodsArray} </div>
          <div className="secondCol" />
          <div className="thirdCol" />
        </div>
      </div>
    );
  }
}

// // This is accessing Realtime exchange rate;
// endpoint = "live";
// access_key = "dcd9b8938678e7341938a9b95532c456";

// // get the most recent exchange rates via the "live" endpoint:
// $.ajax({
//   url: "http://apilayer.net/api/" + endpoint + "?access_key=" + access_key,
//   dataType: "jsonp",
//   success: function(json) {
//     // exchange rata data is stored in json.quotes
//     alert(json.quotes.USDGBP);

//     // source currency is stored in json.source
//     alert(json.source);

//     // timestamp can be accessed in json.timestamp
//     alert(json.timestamp);
//   }
// });

// // This is currency conversion
// // set endpoint and your access key
// endpoint = "convert";
// access_key = "dcd9b8938678e7341938a9b95532c456";

// // define from currency, to currency, and amount
// from = "USD";
// to = "GBP";
// amount = {this.state.price * this.state.counter};

// // execute the conversion using the "convert" endpoint:
// $.ajax({
//   url:
//     "http://apilayer.net/api/" +
//     endpoint +
//     "?access_key=" +
//     access_key +
//     "&from=" +
//     from +
//     "&to=" +
//     to +
//     "&amount=" +
//     amount,
//   dataType: "jsonp",
//   success: function(json) {
//     // access the conversion result in json.result
//     alert(json.result);
//   }
// });

// currentOneUSDtoGBP() {
//   fetch(
//     "http://apilayer.net/api/live?access_key=dcd9b8938678e7341938a9b95532c456&currencies=AUD,EUR,GBP,PLN&format=1"
//   )
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(message) {
//       return message.quotes.USDGBP;
//     });
// }

// totalUSDtoGDP() {
//   return (
//     this.currentOneUSDtoGBP.bind(this) * this.state.price * this.state.counter
//   );
