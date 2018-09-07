import React from "react";
import Button from "react-bootstrap/lib/Button";
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";

const counterStyle = {
  border: 2,
  background: "yellow",
  height: 15,
  width: 50,
  padding: 5,
  fontSize: 15
};

const align = {
  paddingTop: 20
};

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
    // this.multiplyTwice = this.multiplyTwice.bind(this);
  }

  increment = () => {
    let currentCount = this.state.counter;
    this.setState({ counter: ++currentCount });
  };

  decrease = () => {
    let currentCount = this.state.counter;
    if (this.state.counter > 0) {
      this.setState({
        counter: --currentCount
      });
    }
  };

  GoodsArray = goodsList.map(function(item) {
    return (
      <div key={item.name}>
        <h3>
          <div>
            {item.name} - ${item.price} {item.type}
            <Button> Add the item </Button>
            <Button> Reduce the item </Button>
          </div>
        </h3>{" "}
      </div>
    );
  });

  render() {
    return (
      <div>
        <div className="App-intro">
          <div className="firstCol" />
          <div className="secondCol">
            {this.GoodsArray}
            <div style={align} className="firstItem">
              {goodsList[0].name}
              <Button onClick={this.increment}> Add the item </Button>{" "}
              <Button onClick={this.decrease}> reduce the item </Button>{" "}
              <span style={counterStyle}>{this.state.counter}</span>
            </div>
            <div style={align} className="secondItem">
              {goodsList[1].name}
              <Button onClick={this.increment}> Add the item </Button>{" "}
              <Button onClick={this.decrease}> reduce the item </Button>{" "}
              <span style={counterStyle}>{this.state.counter}</span>
            </div>
          </div>
          <div className="thirdCol" />
        </div>
      </div>
    );
  }
}

//

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
