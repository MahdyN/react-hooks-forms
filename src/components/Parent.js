import React, {useState} from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function Parent() {
    const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstChange(event) {  // These callback functions will be invoked whenever a change is made inside the text inputs for either the first and last name, updating their states, allowing us to write inside the input fields 
    setFirstName(event.target.value)   
  } 

  function handleLastChange(event) {
    setLastName(event.target.value)
  }

                                        // State and the callback functions are passed into the Form component and allow us to make changes in the form component and pass state up to the parent using the callback functions
                                        // this allows us to pass this updated state to other children components as props as well, so change in one child can lead to change in another
    return(
        <>
        <Form 
        firstName = {firstName}
        lastName = {lastName}
        handleFirstChange = {handleFirstChange}
        handleLastChange = {handleLastChange}
        />

        <DisplayData
        firstName = {firstName} 
        lastName = {lastName}
        />

       </>

    )
}

export default Parent