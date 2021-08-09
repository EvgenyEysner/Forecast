import React from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import { weatherApi } from "../api/Api";
import { useState } from "react";

export const Form = () => {
  const [query, setQuery] = useState('')
  const [cityWeather, setCityWeather] = useState({});
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const search = async(event) => {
      if (event === 'Enter' || event === 'Click') {
          weatherApi.byCityname(query)
          .then((data) => setCityWeather(data))
      }
  }
  console.log(setCityWeather)
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Поиск..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={search}
          name="city"
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleShow}>
          Поиск
        </Button>
      </InputGroup>
      {cityWeather.main && (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cityWeather.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Test
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      )}
    </>
  );
};
