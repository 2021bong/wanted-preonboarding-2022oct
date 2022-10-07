import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router>
      <Route path='/' component={<Root />} />
      <Route path='/about' component={<About />} />
    </Router>
     */}
    <Root />
  </React.StrictMode>
);
