import React from 'react';

export const sztywnyHeader = <h5>mój header </h5>

//onChange: (boolean) -> void callback propsy prawie zawsze są voidami
export const Checkbox = ({id, label, onChange}) => {
  const handleOnChange = (e) => {
    const isChecked = e.target.checked
    onChange(isChecked)
  }
  return <> 
  {sztywnyHeader}
  {/*komentarz */}
  <label htmlFor={id} >czy czerwony</label>
  <input id={id} type="checkbox" onChange={handleOnChange}/>
  
  </>
}
