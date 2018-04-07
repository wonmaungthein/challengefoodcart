import React from "react";
import { Component } from "react";

// class Busket extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//       //   name: "peas"
//     };

//     this.multiplyTwice = this.multiplyTwice.bind(this);
//   }

//   multiplyTwice(e) {
//     this.setState({ counter: this.state.counter + 1 });
//   }

//   currentOneUSDtoGBP = () => {
//     fetch(
//       "http://apilayer.net/api/live?access_key=dcd9b8938678e7341938a9b95532c456&currencies=GBP&format=1"
//     )
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(response) {
//         const poundValue = document.getElementById("poundValue");
//         poundValue.innerHTML = response.quotes.USDGBP;
//       });
//   };

//   render() {
//     return (
//       <div className="App-intro">
//         <div className="secondCol">
//           <h1>The {this.state.name} in the basket</h1>
//           <h1>{this.state.counter}</h1>
//         </div>
//       </div>
//     );
//   }
// }

// <div className="thirdCol">
//   <h1>Total cost</h1>
//   <h1> $ - {this.state.price * this.state.counter} </h1>
//   <Button onClick={this.totalUSDtoGDP}>Change to Pound </Button>
//   <h1>Change to pound </h1>
//   <h1 id="poundValue">{this.totalUSDtoGDP}</h1>
// </div>;
