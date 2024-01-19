import React, { useState } from 'react'

export const TextBox = () => {
    const [bgColor, setBgColor] = useState('indigo')
  return (
    <div>
        <article 
        title='parrafo principal'
        style={{backgroundColor: bgColor}}
        >Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Impedit, illum? Ex rem debitis quod illo nihil doloremque! 
        Ut sint nostrum blanditiis dolor similique debitis impedit in ea, mollitia aspernatur autem.
        </article>
        <button
        onClick={() => setBgColor(bgColor === 'indigo' ? 'tomato': 'indigo')}
        >Pulsa para modificar</button>
    </div>
  )
}
