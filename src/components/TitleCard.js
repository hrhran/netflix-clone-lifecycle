import React from 'react'

const TitleCard = ({ data, showModal}) => {
  return (
    <>
        {console.log(data.backdrop_path)}
        <div className='card' onClick={showModal}>
            <img src={(data.backdrop_path.split(':')[0] === 'https')?data.backdrop_path:("https://image.tmdb.org/t/p/w500/"+ data.backdrop_path)} alt='name' />
          <div className='info'>
            <p>{data.title}</p>
          </div>
        </div>
    </>
  )
}

export default TitleCard