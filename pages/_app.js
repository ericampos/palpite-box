import React from 'react'
import '../css/styles.css'

const myApp = ({ Component, pageProps }) => {
  return (
    <div>
      <h1 className='bg-red-900 p-8'>Meu App</h1>
      <Component {...pageProps} />
    </div>
  )
}

export default myApp