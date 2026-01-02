import TicketNumber from "./TicketNumber";
import "./Ticket.css";
export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <p>Ticket</p>
      {ticket.map((num, idx) => {
        return <TicketNumber num={num} key={idx} />;
      })}
    </div>
  );
}
