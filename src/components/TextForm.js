import React, { useState } from "react";
//we use state ti use the feature of classBased components  without making class based components
// class based components mn to ham es ekrty ha   this.state  or us krty ha

export default function TextForm(props) {
  const [text, setText] = useState("");
  //state object hota ha jis mn data store hota ha // is mn ham data modify kr sakty hain user input se //
  //is upper wali line ka matlab ya ha k hamra pass aik var ha text name ka jiski value ha "Enter text here" // ab jab ham na ise update krna ho ga to ham normal  js var ki tarha ise update nhi kr sakty   hamay function use krna pra ga
  // text = "Text updated" // wrong way to update the text var
  // setText("Text updated") // correct // with error
  //this is very imp because jab hamay kuch var ki value change krni ho gi apps bnany mn to ham directly   js   ki tarha change nhi kr sakty

  const handleOnChanged = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showALert("Changed into upper case", "success")
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showALert("Changed into Lower case", "success")
  };
  const handleClearText = () => {
    setText(""); // dont use the " " space in clearing
    props.showALert("Text cleared", "success")
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showALert("Text Coppied successfully", "success")
  };

  const handleSpaces = () => {
    // using space in array is important
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showALert("Spaces Rmoved", "success")
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* below this  also using 'states'   in  value */}
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            placeholder="Enter your text"
            onChange={handleOnChanged}
          ></textarea>
          {/* //label for hota ha kisi input k lye or label for "idOfThatInput"  */}
          {/* <label for="myBox" className="form-label">
          Enter Text
        </label> */}
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-0" onClick={handleUpClick}>
            Convert to upperCase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
            Convert to lowerCase
          </button>
          <button disabled={text.length === 0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleClearText}
          >
            Clear text
          </button>
          <button disabled={text.length === 0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleCopyText}
          >
            Copy text
          </button>
          <button disabled={text.length === 0}
            className="btn btn-primary my-3 mx-2"
            onClick={handleSpaces}
          >
            Remove spaces
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} and {text.length} characters
          {/* {text.split(" ").length - 1} and {text.length} characters */}
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

// we  use this in div.container jis se kya hua k ya center mn aa gya bootstrap ki madad se // bootstrap mn container name ki class hoti ha
//Disabled button