import React, { useState } from "react";
import { Container, Alert, Table, Button } from "react-bootstrap";

function Parking() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  React.useEffect(() => {
    let totalCharge = 0;
    let add = document.querySelector(".new");
    const entry = () => {
      let hours = prompt(`Hours parked by customer`);
      let charge = calcCharge(hours);
      let table = document.querySelector(".tab");
      let total = document.querySelector(".total");

      var newRow = table.insertRow(1);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      cell1.innerHTML = hours;
      cell2.innerHTML = charge;
      alert("Your Charge: " + charge);
      totalCharge += charge;
      total.innerHTML = totalCharge;
    };

    add.addEventListener("click", function () {
      entry();
    });
  });

  const calcCharge = (hours) => {
    if (hours <= 0 || isNaN(hours)) {
      setError("Invalid Input.");
    }
    let charge = 0;
    if (hours > 0) charge += 2;
    if (hours > 3) charge += (hours - 3) * 0.5;
    if (charge > 10) charge = 10;
    return charge;
  };

  return (
    <Container>
      <h1 className="mb-4">Parking Chrage Calculator</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Table className="tab" bordered hover>
        <thead>
          <tr>
            <th>Hours</th>
            <th>Charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current Total</td>
            <td className="total">0</td>
          </tr>
        </tbody>
      </Table>
      <Button className="new">Calculate Charge</Button>
    </Container>
  );
}

export default Parking;
