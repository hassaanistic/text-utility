import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//for changing mode of nav
import React, { useState } from "react";

// react router

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// function  bnana ha  {} curly bracket k baad return mn  parentheses laga code likhna ha us code ko jsx kehty ha
/// JSX BASICALLY HTML hi ha with cover of js---- ham jsx k ander hi js use kr sakty hai -- without ither file
// we add  JS in curly brackets {variable}
//we have to use ClassName instead of class
//in label in HTML we have to use  htmlFor instead of for
//we have to close the tag in JSX that tag that dont have closing tags  like    <hr>  and <img>
// reACt prefer  cemmalcase
//have to use a single div that cover all the things in a file in react
// and return that single div
// or use a single emoty div <></> instead
// this empty div is jsx fragment
// make div with class name or id   use that in  app.css to make changes  because      app.css is  imported in this file
//we can  use the ap.css file with the name of our new div to make any changes in element
//agr ham multiple components bnaye hua ha to ham unha import kr k    <singleTag/>  mn likh sakty hai
// we have to use the closing tag

//n0de modules wala folder ko ham delete b kr sakty hain .jab ham kisi ko apni app dete ha to ham node modules wala folder nhi dete kyu k is mn kuch packges hoty hai .. ha;m aik dafa delete kr k ise dubata create kr sakty hain "npm install" is command ko use kr k .. isi wajah se ya by default gitignore mn hota ha

// ham bootstrap ko index.html mn add kray ga

//index.html k sath link ha index.css  .. ham na use b clear kr dya ha ta k hamara pass exact simpel page a jaye by default wala

//cntrl + f  {write word and replace all }
//href="/" ko replace kray href="/"  kyu k ham na baad mn router o use krna ha

//<a href="/" /> a tag mn hamesha koi link hona zaroori ha

// let name = "Hassaan"

//props meaning properties
//when we make custom components we can use the prps

//Dark mode  // import usestate
// we make mode of the nav dark and likht from the APp.js
//we change it in the className 
// and we have to make the className into JS by using {{brackets}} 



function App() {
  const [mode, setmode] = useState("dark")

  const [btnColor, setbtnColor] = useState("light")


  const [alert, setAlert] = useState(null);
  const showALert = (message, type) => {
    // pehla alert null tha ab alert object ban chuika ha
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setbtnColor("light");
      showALert("Dark mode is enabled", "success")
      document.title = "TextUtils - Home -Dark";
    } else {
      setmode("light");
      setbtnColor("dark");
      showALert("Light mode is enabled", "success")
      document.title = "TextUtils - Home -Light";

    }
  }

  return (
    // -----------------JSX START-----------------------------------------------
    <>

      {/* <Router basename="/"> */}
      <Router >
        {/* <div className="red">Hello</div>  */}
        {/* <h2>HELLO {name}</h2> */}


        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnColor={btnColor} />
        {/* <Navbar/> // with using just defaultProps   */}


        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            {/* using exactbath  case 1:/users/about -- case 2: /users  */}
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showALert={showALert} />} />

            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>


        {/* <About/> */}
      </Router>
    </>
    // -----------------JSX END-----------------------------------------------
  );
}

// react mn 2 Component hoty hain

// aik class based Component
// aik function based Component  //this is new trend
export default App;
