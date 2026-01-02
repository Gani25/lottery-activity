import "./App.css";

import Lottery from "./Lottery";

import { sumTicket } from "./helper";

function App() {
  let winCondition = (ticket) => {
    // return sumTicket(ticket) === 15;

    // first number of ticket is 0
    // return ticket[0] === 0;

    // check all number in ticket are same
    return ticket.every((num) => num === ticket[0]);
  };
  return (
    <>
      <Lottery n={3} winningCondition={winCondition}></Lottery>
    </>
  );
}

export default App;
