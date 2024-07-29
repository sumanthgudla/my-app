import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter text here');
    const [Size,setSize]=useState('12px');
    const handleUpClick=()=>{
        setText(text.toUpperCase())
        props.showAlert("Text has been uppercased","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Text has been lowercased","success");

    }
    const handleCleartext=()=>{
      setText("");
      props.showAlert("Text has been cleared","success");

    }
    const handleCopytext=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied to clipboard","success");
    }

    const handleSizeChange = (size) => {
      setSize(size);
    };

    

  return (
    
    <div className="container"> 
      <div className="mb-3 my-5">
      <h3>{props.TextAreaLabel}</h3>
  <textarea className="form-control" id="myBox" value={text}   onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey' ,fontSize:Size}} rows="8"></textarea>
  <button className={`btn btn-${props.buttonColor} my-3 mx-2`} onClick={handleUpClick}>Convert to uppercase</button>
  <button className={`btn btn-${props.buttonColor} my-3 mx-2`} onClick={handleLoClick}>Convert to lowercase</button>
  <button className={`btn btn-${props.buttonColor} my-3 mx-2`} onClick={handleCleartext}>Clear text</button>
  <button className={`btn btn-${props.buttonColor} my-3 mx-2`} onClick={handleCopytext}>Copy text to clipboard</button>
  <span>
  <div className="btn-group">
  <button type="button" className={`btn btn-${props.buttonColor} dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false"`}>
    size
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item"  onClick={() =>handleSizeChange('12px')}>12px</a></li>
    <li><a className="dropdown-item"  onClick={() =>handleSizeChange('14px')}>14px</a></li>
    <li><a className="dropdown-item"onClick={() =>handleSizeChange('16px')}>16px</a></li>
  </ul>
</div>
  </span>
  
 

</div>
<div className='container'>
  <h2>Text summary</h2>
<span >{text.split(" ").length} Words </span>
<span>{text.length} characters</span>
<p>{0.008*text.split(" ").length} minutes read</p>
<h2>Preview</h2>
<p>{text.length===0?"enter some text in above text area to preview": text}</p>
</div>

    </div>
  )
}

