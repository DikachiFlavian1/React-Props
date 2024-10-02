import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel} </p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <input id="fName" />

    <Card
      name="Jonathan Majors"
      img="data:image/webp;base64,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"
      tel="+234 905 430"
      email="j.majors@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
