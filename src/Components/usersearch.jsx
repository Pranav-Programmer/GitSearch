import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fetchUser from './config';

const useStyles = makeStyles((theme) => ({
  container:{
    width:'50%', 
    marginLeft:'28%', 
    marginBottom:'2rem'
  },
inputText:{
  height:'1.3rem', 
  width:'30%', 
  textAlign:'center', 
  marginTop:'1rem', 
  marginBottom:'1rem'
},
userDetails:{
  border:'1px solid', 
  borderBlockColor:'black', 
  width:'90%', 
  marginBottom:'.5rem', 
  display:'flex', 
  flexDirection:'column', 
  alignItems:"center", 
  height:'10rem'
},
userImg:{
  height:'7rem' ,
  width:'7rem', 
  marginTop:'.5rem'
}
}));

function UserSearch() {
  const classes = useStyles();
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
    fetchUser()
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    debounce(searchUsers, 500)(value);
  };

  return (
    <div className={classes.container}>
      <form>
        <input className={classes.inputText} type="text" value={query} onChange={handleInputChange}/>
      </form>
      {users?.map(({id,avatar_url,html_url,login}) => (
        <div className="container" >
        <div className={classes.userDetails} key={id}>
          <img className={classes.userImg} src={avatar_url} alt={login}/>
          <a href={html_url} target='_blank' rel="noreferrer">{login}</a>
        </div>
        </div>
      ))}
    </div>
  );
}

export default UserSearch;
