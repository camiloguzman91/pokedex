import React from 'react'
// import axios from 'axios'

function Pokemon({name, url}) {
  // const [image, setImage] = React.useState()
  const id = url.split('/').at(-2)

  // React.useEffect(() => {
  //   async function fetchImage() {
  //     const API_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png'

  //     const response = await axios.get(API_URL)

  //     console.log({ data: response.data })

  //     setData(response.data)
  //   }

  //   fetchImage()
  // }, [])

  return (
    <article>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png`} alt={name} />
      <h2>{name}</h2>
      <span>{id}</span>
    </article>
  )
}

export default Pokemon