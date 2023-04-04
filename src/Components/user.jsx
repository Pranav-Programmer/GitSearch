import React, { useState } from 'react';

function GitHubSearch() {
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
    <div style={{width:'50%', marginLeft:'25%'}}>
        <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={query} onChange={handleChange} style={{height:'1.5rem', width:'30%', textAlign:'center', marginLeft:'8%'}}/>
        </label>
        <button type="submit" style={{height:'1.75rem', width:'30%', marginLeft:'1rem', backgroundColor:'#7fff00', border:'none'}}>Search</button>
      </form>
      
      {results.length > 0 && (
        <ul >
          {results.map((user) => (
            <ul key={user.id} >
            <div className="container" style={{border:'1px solid', borderBlockColor:'black', width:'90%', marginBottom:'.5rem', display:'flex', flexDirection:'column', alignItems:"center", height:'10rem'}}>
              <img src={user.avatar_url} alt={user.login} style={{height:'7rem' ,width:'7rem', marginTop:'.5rem'}}/>
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
