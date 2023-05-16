import React from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";

export default function NewPlace() {
  return (
    <form className="place-form">
      <Input
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        label="Title"
        element="input"
        errorText="Please enter a valid title"
      />
    </form>
  );
}
