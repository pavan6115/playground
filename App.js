import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element --> It is an object
// JSX -> React Element -> Object -> HTMLRenderer
const jsxHeading = (
  <h1 className='heading'>
    Hello from jsx in App.js 🚀
    <div>
      <em>hello from em</em>
    </div>
  </h1>
)
console.log(jsxHeading)




const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(jsxHeading)
