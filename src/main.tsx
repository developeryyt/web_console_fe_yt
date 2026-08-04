import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const mainDoc = document.getElementById('root')!
const root = createRoot(mainDoc)

root.render(
  <>
    <App />
  </>,
)
