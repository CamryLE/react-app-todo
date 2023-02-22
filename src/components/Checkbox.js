import { useState } from "react";

const Checkbox = ({crossTask, task, status, handleChange}) => {
    
    
    return (
        <input onChange={() => handleChange()} className='checkbox'type='checkbox'></input>
    )

}

export default Checkbox