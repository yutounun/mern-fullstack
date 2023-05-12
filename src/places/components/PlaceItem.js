import React from "react";
import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card>
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>CREATE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
