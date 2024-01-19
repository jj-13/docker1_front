import React, { useState } from 'react'

export const AcceptCookies = () => {
    const [cookies, setCookies] = useState(false)

  return (
    <div> 
        <label htmlFor='cookieCheckbox'>Acepta las cookies</label>
        <input 
            type='checkbox' 
            id='cookieCheckbox'
            onClick={() => setCookies(!cookies)}
        />
        <article title='confirmacion cookies'>
            {cookies ? 'Cookies aceptadas': 'debes acepatar las Cookies'}
        </article>
    </div>
  )
}
