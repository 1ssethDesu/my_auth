
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import AppProvider from './Context/appContext.jsx';
import './App.css'



ReactDOM.createRoot(document.getElementById('root')).
render(
  <AppProvider>
    <App />
    </AppProvider>

);
