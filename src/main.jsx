import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Greeting, Sekiro} from './Greeting.jsx'
import FavoriteAnimal from './FavoriteAnimal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavoriteAnimal />
    <Sekiro />
  </StrictMode>,
)
