import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import Pokemon from './Pokemon';

function App() {
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    async function fetchPokemons() {
      const API_URL = 'https://pokeapi.co/api/v2/pokemon-species?offset=100&limit=5'

      const response = await axios.get(API_URL)

      console.log({ data: response.data })

      setData(response.data)
    }

    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.count}
        </p>
        {data.results.map(pokemon =>
          <Pokemon {...pokemon} />
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  );
}

export default App;
