import React from 'react'
import User from './User';
import people from './app';
const List = () => {
  
  const [user, setUser] = React.useState(people);

  function getUserId(id){
    const filterUser = user.filter((u) => u.id !== id);
   

      setUser(filterUser);
    
   
  }

  function Removeall(){
    setUser("");
  }
  return (
   
    <div>
      {user.length > 0 ? (
        user.map((user) => (
          <User
            {...user}
            getid={getUserId}
            key={user.id}
          />
        ))
      ) : (
        <h2>No item</h2>
      )}

      
      
      <button onClick={Removeall}>ClearAll</button>

    </div>
    
   
  )
}

export default List