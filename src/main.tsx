import { createRoot } from 'react-dom/client'
import App from "./layout/App.tsx";
import {ErrorBoundary, getErrorMessage} from "react-error-boundary";
import "./styles/global.scss";

const mainDoc = document.getElementById('root')!
const root = createRoot(mainDoc)

/*
* What ErrorBoundary cannot catch:
* Server side rendering
* Event handlers
* Errors thrown in the error boundary itself
* Async code that runs after rendering, like setTimeout callbacks or unresolved promises
*
* */

root.render(
  <ErrorBoundary fallbackRender={({error, resetErrorBoundary}) => (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{getErrorMessage(error)}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )}
    onError={(error, info) => {
      console.error("ErrorBoundary caught an error", error, info);
    }}
    onReset={() => {}}
  >
      <App />
  </ErrorBoundary>,
)
