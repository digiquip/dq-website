import clsx from "clsx";
import Button from "../Button";
import { useState } from "react";

export default function EventBlock(props) {
  let event = props.record.event;
  let date = props.record.date;
  let title = props.record.title;
  let description = props.record.description;
  let presentors = props.record.presentors;
  let signup = props.record.signup;

  return (
    <section className="event-block-section">
      <div className="container">
      <h5 className="ebtitle">{event}</h5>
            <h5 className="">{date}</h5>
        <div className="row">
          <div className={clsx("col col--7")}>
            <h3>{title}<span className="orange">.</span></h3>
            <p>{description}</p>
            <Button label={signup} link="/event" />
          </div>
          <div className={clsx("col col--5")}>
            <div className="presentors">
                {presentors && presentors.map((presenter, index) => (
                  <div key={index} className="presenter">
                    <div className="team-image"><img src={presenter.image} alt={presenter.name} /></div>
                    <div><p>{presenter.name}</p></div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
