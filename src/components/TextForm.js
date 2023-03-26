import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpperCase = () => {
      // console.log("uppercase was clicked: " + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase.", "success");
    }

    const handleLowerCase = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase.", "success");

    }
    
    const handleClearText = () => {
      setText("");
      props.showAlert("Text Area is cleared.", "success");

    }

    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard.", "success");

    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed.", "success");

    }

    const handleOnChange = (event) => {
      // console.log("On Change")
      setText(event.target.value);
    }

    const [text,setText] = useState('');

  return (
    <>
    <div className="container" style = {{color: props.mode === 'dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style = {{backgroundColor: props.mode === 'dark'? '#4d6789':'white' , color: props.mode === 'dark'? 'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpperCase}>Make UpperCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowerCase}>Make LowerCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    
    <div className="container my-3" style = {{color: props.mode === 'dark'? 'white':'black'}}>
    <h2>Your text summary </h2>
    <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length.toPrecision(2)} Minutes to read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text: "Enter something in the text box above to preview here.."}</p>
    </div>
    </>
  );
}
