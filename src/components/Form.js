import React from "react";
import Check from "./Check";

function Form({firstName, lastName, handleFirstChange, handleLastChange}) {

  return (
    <>
    <form>

      <input 
      type="text"
      onChange = {handleFirstChange} 
      value={firstName} 
      />

      <input 
      type="text" 
      onChange = {handleLastChange}
      value={lastName} />

      <button type="submit">Submit</button>
    </form>
    <Check />
    </>
  );
}

export default Form;
