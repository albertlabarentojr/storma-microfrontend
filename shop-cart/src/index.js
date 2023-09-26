import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export default selector  => {
    const root = ReactDOM.createRoot(document.querySelector(selector));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};
