
function TextInput({label, type='text',value , placeholder='Enter the input', onChangeHandler}){
    return (
        <>
            <label className="mt-5 block"> {label} </label>
            <input 
                className="px-3 py-2 my-3 rounded-md border-2 border-slate-500 w-full "
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
            />
        </>
    )
}

export default TextInput;