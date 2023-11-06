import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <h1 className='heading'>Netflix Series Pick</h1>
      <p className='sub-heading'>List of 5 Netflix Series</p>
      <ol className='list'>
        <li>Into The Night</li>
        <li>Money Heist</li>
        <li>OuterBank</li>
        <li>The 100</li>
        <li>Manifest</li>
      </ol>
    </React.StrictMode>
);


