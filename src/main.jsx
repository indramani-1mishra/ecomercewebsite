
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from'react-redux'  // Provider for Redux store to be accessible in the entire app.
import { Store } from './Store/ReduxStore.jsx'
//import { InputProvider } from './InputContext/InputContext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>

<Provider store={Store}>
  <App/>
  </Provider>
 
</BrowserRouter>

)
