
import "./formInput.css"
import { useState } from "react";

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const [focused,setFocused] = useState(false);
    const handleFocus=(e)=>{
        setFocused(true)
    };
    return (
        
        <div className='formInput  text-gray-500	'>
             
            <label>{label}</label>
            
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}
          
                className="  font-poppins mt-2  block  px-7 py-2 bg-white border border-black rounded-md text-sm shadow-sm placeholder-slate-500
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-4 my-2.5 mx-1 " ></input>
                  <span className=" font-poppins">{errorMessage}</span>
            
        </div>
    );
};

export default FormInput;