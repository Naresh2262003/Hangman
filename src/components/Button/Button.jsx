import getbuttonStyling from "./getbuttonStyling.js";

function Button({text, color, type="button", onClickHandler}){

    return (
        <> {/*react fragment*/} 
            <button 
                className={`text-white text-md rounded border border-dark m-3 px-3 py-2 ${getbuttonStyling(color)}`} 
                type={type}
                onClick={onClickHandler}
            >
                    {text}
            </button>
        </>
    )
}

export default Button;