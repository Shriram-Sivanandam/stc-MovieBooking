import React, { useState } from "react";
import { Container, Form, Alert, Button } from "react-bootstrap";
import "./Form.css";

function Student() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [dob, setDob] = useState("");
  const [program, setProgram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function validateRegNo(regnum) {
    if (
      /^\d+$/.test(regnum.slice(0, 2)) &&
      !/[^A-Z]/.test(regnum.slice(2, 5)) &&
      /^\d+$/.test(regnum.slice(5, 8)) &&
      regnum.length === 9
    ) {
      return true;
    } else {
      setError("Invalid registration number");
      return false;
    }
  }

  function validateDate(inputText) {
    var ret = true;
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (dateformat.test(inputText)) {
      var leapyear = false;
      var partsdate = inputText.split("/");
      var lenparts = partsdate.length;
      if (lenparts > 1);
      else {
        setError("Date is invalid");
        ret = false;
      }
      var dd = parseInt(partsdate[0]);
      var mm = parseInt(partsdate[1]);
      var yy = parseInt(partsdate[2]);
      var listofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (mm === 1 || mm > 2) {
        if (dd > listofDays[mm - 1]) {
          setError("Invalid number of days");
          ret = false;
        }
      }
      if (mm === 2) {
        if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
          leapyear = true;
        }
        if (leapyear === false && dd >= 29) {
          setError("Invalid number of days");
          ret = false;
        }
        if (leapyear === true && dd > 29) {
          setError("Invalid number of days");
          ret = false;
        }
      }
    } else {
      setError("Invalid date format");
      ret = false;
    }
    return ret;
  }

  function validateEmail(email) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    } else {
      setError("Invalid email address");
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var count = 0;
    if (!!/[^a-zA-Z]/.test(name)) {
      setError("Your name must contain only letters (Sorry Elon Musk's son)");
      count++;
    }
    if (validateRegNo(reg));
    else {
      count++;
    }
    if (validateDate(dob));
    else {
      count++;
    }
    if (validateEmail(email));
    else {
      count++;
    }
    if (/^\d+$/.test(phone) && phone.length === 10);
    else {
      setError("Your phone number is invalid");
      count++;
    }

    if (count > 0) {
      setMessage("");
    }

    if (count === 0) {
      setError("");
      setMessage("Your form has successfully been submitted");
      console.log("Name: " + name);
      console.log("Reg No.: " + reg);
      console.log("Date of birth: " + dob);
      console.log("Name of program: " + program);
      console.log("Email Id: " + email);
      console.log("Phone number: " + phone);
      setName("");
      setReg("");
      setDob("");
      setProgram("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <Container>
      <h1 className="mb-4">Student Registration Form</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form__element">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="form__element">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control
            required
            placeholder="Your Registration Number"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="form__element">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            required
            placeholder="dd/mm/yyyy"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="form__element">
          <Form.Label>Program</Form.Label>
          <Form.Control
            required
            placeholder="Your Program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="form__element">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            required
            placeholder="Your Student Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="form__element">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Button varient="primary" className="btn" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Student;
