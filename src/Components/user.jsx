import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    width:'50%', 
    marginLeft:'25%'
  },
  inputSearch:{
    height:'1.5rem', 
    width:'30%', 
    textAlign:'center', 
    marginLeft:'8%'
  },
  button:{
    height:'1.75rem', 
    width:'30%', 
    marginLeft:'1rem', 
    backgroundColor:'#7fff00', 
    border:'none'
  },
  innerContainer:{
    border:'1px solid', 
    borderBlockColor:'black', 
    width:'90%', 
    marginBottom:'.5rem', 
    display:'flex', 
    flexDirection:'column', 
    alignItems:"center", 
    height:'10rem'
  },
  img:{
    height:'7rem' ,
    width:'7rem', 
    marginTop:'.5rem'
  }
}));

function GitHubSearch() {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();
      setResults(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={classes.container}>
        <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input className={classes.inputSearch} type="text" value={query} onChange={handleChange}/>
        </label>
        <button className={classes.button} type="submit">Search</button>
      </form>
      
      {results.length > 0 && (
        <ul >
          {results.map((user) => (
            <ul key={user.id} >
            <div className={classes.innerContainer}>
              <img className={classes.img} src={user.avatar_url} alt={user.login} />
              <a href={user.html_url} target='_blank' rel="noreferrer">{user.login}</a>
              </div>
            </ul>
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default GitHubSearch;
