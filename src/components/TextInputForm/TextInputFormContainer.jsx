import { useState } from 'react';
import TextInputForm from './TextInputForm'

function TextInputFormContainer(){

    const [inputType, setInputType]= useState("password");

    function handleFormSubmit(e){
        e.preventDefault();
        console.log("Form Submitted.")
    }

    function handleTextInputChange(e){
        console.log(e.target.value);
    }

    function handleShowHideClick(){
        console.log(inputType,"inputType");
        if(inputType==="text"){
            setInputType("password");
        }else{
            setInputType("text");
        }
        console.log("Clicked Button Show/hide ");
    }


    return(
        <>
            <TextInputForm 
                inputType={inputType}
                handleFormSubmit={handleFormSubmit} 
                handleTextInputChange={handleTextInputChange}
                handleShowHideClick={handleShowHideClick}
            />
        </>
    )
}

export default TextInputFormContainer;