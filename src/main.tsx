import { createRoot } from 'react-dom/client'
import App from "./layout/App.tsx";



const mainDoc = document.getElementById('root')!
const root = createRoot(mainDoc)

root.render(
  <>
      <App />
  </>,
)
