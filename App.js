import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'Child11'),
    React.createElement('h2', {}, 'Child12'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'Child21'),
    React.createElement('h2', {}, 'Child22'),
  ]),
])
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(parent)
