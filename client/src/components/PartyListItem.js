import React, { useEffect } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

import "../styles/partyCard.css";

export default function PartyListItem(props) {
  const history = useHistory();
  const editEventForm = (e) => {
    e.preventDefault();
    history.push(`/editevent/${id}`);
  };

  const eventDetail = (e) => {
    e.preventDefault();
    history.push(`/event/${id}`);
  };

  const {
    id,
    event_name,
    price,
    name,
    eventprivate,
    agerange,
    description,
    host_id,
  } = props.event;
  if (props.user === undefined) {
    return <h1>loading</h1>;
  } else {
    const user_id = props.user.id;
    return (
      <div className="card">
        {eventprivate && <div className="sold-out">🔒</div>}
        {!eventprivate && <div className="sold-out">🔓</div>}

        <div className="card-header">
          <p style={{ color: "white" }}>Name: {event_name}</p>
          <p style={{ color: "white" }}>
            <br />
            Price: ${price}
          </p>
        </div>

        <div>
          <p style={{ color: "white" }}>Description: {description}</p>
          <p style={{ color: "white" }}>Age range: {agerange}</p>
        </div>

        <div className="card-footer">
          <p style={{ color: "white" }}>Distance: 2.8km</p>
          <p style={{ color: "white" }}>Tags: #yuuheardd</p>
          <p style={{ color: "white" }}>Host: @{name}</p>
        </div>
        <button onClick={eventDetail}>detail</button>

        {host_id === user_id && (
          <button onClick={editEventForm}>Edit Event</button>
        )}

        {/* Do we still need these three lines?? by Lewis */}
        <Switch>
          <Route path="/events/:eventId" component={Event} />
        </Switch>
      </div>
    );
  }
}
