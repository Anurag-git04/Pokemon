import React, { useState } from 'react'

const Search = () => {
    const [textValue,setTextvalue] = useState("") ;
    
  return (
    
    <div>
        <input type="text" value={textValue} />
    </div>
  )
}

export default Search