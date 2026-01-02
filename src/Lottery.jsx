import { useState } from "react";

import { generateTicket, sumTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winningCondition }) {
  const [ticket, setTicket] = useState(() => generateTicket(n));

  // let isWinning = sumTicket(ticket) === winningSum;
  let isWinning = winningCondition(ticket);

  function buyTicket() {
    setTicket(() => generateTicket(n));
  }

  return (
    <>
      <h1>Lottery</h1>
      <Ticket ticket={ticket} />
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>

      {isWinning && (
        <h3 style={{ color: "green" }}>Congratulation, You Won!</h3>
      )}
    </>
  );
}
