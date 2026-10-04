import React from 'react'

const User = (props) => {
    const {name ,age, id, getid} = props;
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={()=> getid(id)}>Remove</button>
    </div>
  )
}

export default User