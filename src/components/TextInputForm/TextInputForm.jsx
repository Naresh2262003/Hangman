import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}){
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                    type={inputType}
                    label="Enter a word or a phrase" 
                    placeholder="Enter aword or a phase"
                    onChangeHandler={handleTextInputChange}
                />    
            </div>
            <div>
                <Button
                    color="red"
                    text={inputType==='text'?"Hide":"Show"}
                    onClickHandler={handleShowHideClick}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    text="Submit"
                    color="blue"
                />
            </div>
        </form>
    )
}

export default TextInputForm;