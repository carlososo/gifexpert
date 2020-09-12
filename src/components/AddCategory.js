import React, {useState} from 'react';
import Proptypes from 'prop-types';
export const AddCategory =({setCategories})=>{

    const [inputValue, setInputValue] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(categories =>[inputValue,...categories ]); //en este caso categories es un callback que regresa el estado anterior del setCategories
            setInputValue('');
        }

    }


    return(
    <> 
    <h1>{inputValue}</h1>
    <form onSubmit={handleSubmit}> 
        <input 
        type="text"
        value={inputValue}
        onChange={(e=>setInputValue(e.target.value))}
        />
    </form>
    </>
    );
}

AddCategory.propTypes ={
    setCategories: Proptypes.func.isRequired
}