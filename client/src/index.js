import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";


export const Context = createContext(null)
const URL = process.env.REACT_APP_API_URL
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(URL)
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App />
    </Context.Provider>


);

