import React, { useState } from "react";
import {
  Container,
  Form,
  Dropdown,
  ButtonGroup,
  Table,
  Button,
} from "react-bootstrap";

function Booking() {
  React.useEffect(() => {
    let book = document.querySelector(".book");
    let nameInput = document.querySelector(".nameInput");
    let movieInput = document.querySelector(".movieInput");
    let typeInput = document.querySelector(".typeInput");
    let num = document.querySelector(".num");

    const calcCharge = (number) => {
      if (typeInput.value === "Front Row - 50") {
        return 50 * number;
      } else if (typeInput.value === "Silver - 69") {
        return 69 * number;
      } else if (typeInput.value === "Gold - 220") {
        return 220 * number;
      } else if (typeInput.value === "Balcony - 420") {
        return 420 * number;
      } else if (typeInput.value === "VIP's Seat - 786") {
        return 786 * number;
      }
    };

    const addInfo = () => {
      let table = document.querySelector(".tab");
      const number = parseInt(num.value);
      let charge = calcCharge(number);

      var newRow = table.insertRow(1);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      cell1.innerHTML = nameInput.value;
      cell2.innerHTML = movieInput.value;
      cell3.innerHTML = typeInput.value;
      cell4.innerHTML = charge;
    };

    book.addEventListener("click", function () {
      addInfo();
      nameInput.value = "";
      movieInput.value = "Choose Movie";
      typeInput.value = "Choose Seat Type";
      num.value = "";
    });
  });

  return (
    <Container>
      <h1 className="mb-4">Book Your Tickets</h1>
      <Form>
        <Form.Group className="form__element">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="nameInput"
            required
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Movies Avalable</Form.Label>
          <Form.Control className="movieInput" as="select">
            <option>Choose Movie</option>
            <option>The Josh Fight</option>
            <option>37 In An Over</option>
            <option>Still I Rise</option>
            <option>You Know That Hurt</option>
            <option>How I Ran Out Of Ideas</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select Type Of Seat</Form.Label>
          <Form.Control className="typeInput" as="select">
            <option>Choose Seat Type</option>
            <option>Front Row - 50</option>
            <option>Silver - 69</option>
            <option>Gold - 220</option>
            <option>Balcony - 420</option>
            <option>VIP's Seat - 786</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="form__element">
          <Form.Label>Number Of Seats</Form.Label>
          <Form.Control
            required
            placeholder="Number Of Seats"
            className="num"
          />
        </Form.Group>
      </Form>
      <Button varient="primary" className="btn mb-4 book" type="submit">
        Book your tickets
      </Button>
      <Table className="tab" bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Movie</th>
            <th>Ticket Type</th>
            <th>Total Charge</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
}

export default Booking;
