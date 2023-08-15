import { useState } from "react";

function SearchBar({onSubmit}){
    const[term, setTerm] = useState(' ');

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log('I need to tell the parent about some data');
        onSubmit(term);
    }


const handleChange = (event) =>{
    setTerm(event.target.value);
    
}

return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input  value= {term} onChange ={handleChange}/>

        </form>

    </div>
);

}
export default SearchBar;