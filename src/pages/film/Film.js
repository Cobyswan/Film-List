import React from 'react'
import './Film.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import loader from '../../assets/loader.svg'

function Film() {
  const { id } = useParams()

  const { data, loading, error } = useFetch(`http://localhost:3000/films/${id}`)

  return (
    <div className='film'>
      {error && <p className='error'>{error}</p>}
      {loading && (
        <div className='loader-container'>
          <img className='loading' src={loader} alt='loading...' />
        </div>
      )}
      {data && (
        <>
          <h2 className='page-title'>{data.title}</h2>
          <p>{data.genre}</p>
          <img src={data.filmImage} alt='poster artwork of film' />
          <p>{data.description}</p>
        </>
      )}
    </div>
  )
}

export default Film
