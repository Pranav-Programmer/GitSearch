import React, { useState } from 'react';

function UserSearch() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const searchUsers = (query) => {
    if (!query) {
      setUsers([]);
      return;
    }
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    debounce(searchUsers, 500)(value);
  };

  return (
    <div style={{width:'50%', marginLeft:'28%', marginBottom:'2rem'}}>
      <form>
        <input type="text" value={query} onChange={handleInputChange} style={{height:'1.3rem', width:'30%', textAlign:'center', marginTop:'1rem', marginBottom:'1rem'}}/>
      </form>
      {users?.map((user) => (
        <div className="container" >
        <div key={user.id} style={{border:'1px solid', borderBlockColor:'black', width:'90%', marginBottom:'.5rem', display:'flex', flexDirection:'column', alignItems:"center", height:'10rem'}}>
          <img src={user.avatar_url} alt={user.login} style={{height:'7rem' ,width:'7rem', marginTop:'.5rem'}}/>
          <a href={user.html_url} target='_blank' rel="noreferrer">{user.login}</a>
        </div>
        </div>
      ))}
    </div>
  );
}

export default UserSearch;
