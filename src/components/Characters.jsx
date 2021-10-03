import React  from 'react';

import './styles/Characters.css';

const Characters = (props) => {

  const digiFilter = props.filteredUsers.map(characters => {
    const id = characters.url.split('/').at(-2)
    if(id < 10) 
    {
      const id2 = '00' + id;
      return(
        <div className="item" key={characters.id}>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id2}.png`} alt={characters.name} />
          <h2 className="pokeName">{characters.name}</h2>
          <h2 className="pokeName">{id2}</h2>
        </div>  
      )
    }
    else if(id > 9 & id < 100) 
    {
      const id3 = '0' + id;
      return(
        <div className="item" key={characters.id}>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id3}.png`} alt={characters.name} />
          <h2 className="pokeName">{characters.name}</h2>
          <h2 className="pokeName">{id3}</h2>
        </div>  
      )
    }
    else
      return(
        <div className="item" key={characters.id}>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt={characters.name} />
          <h2 className="pokeName">{characters.name}</h2>
          <h2 className="pokeName">{id}</h2>
        </div>  
      )
  });

  return (
    <>
      <div className="characters">
      <h1>List of Pokémon</h1>
      <h2>Number of Pokémon found: <span className="numChar">{digiFilter.length}</span> monsters</h2>
        <div className="characters__container">
          {digiFilter}
        </div>
      </div>
    </>
  );
};

export default Characters;
