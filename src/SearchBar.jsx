import React, {useState} from "react";

export default function SearchBar(props){

    const [inputText, setInput] = useState("");
    function handleChange(event){
        const {value} = event.target;

        setInput(value);

    }

    function handleClick(event){
        props.onAdd(true, inputText);
        setInput("")
        event.preventDefault();
    }
    return(
        <div className="search_bar">
            <form className="weather_form">
                <input type="text" name="city" placeholder="Enter a city + country" autoComplete="off" className="city_input" onChange={handleChange} value={inputText}/>
                <button type="submit" className="submit_btn" onClick={handleClick}>Search</button>

            </form>
            
        </div>
    )
}