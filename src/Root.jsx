import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './Root.css';

const Root = () => {
  const h1style = {
    color: '#fff',
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#222',
  };

  console.log('pathname', window.location.pathname);

  // window.onpopstate, window.location.pathname, History API(pushState)
  // window.history.back()
  // window.history.forward()

  // ReactDOM.createRoot(container).render(
  //   <Router>
  //     <Route path="/" component={<Root />} />
  //     <Route path="/about" component={<About />} />
  //   </Router>
  // );
  // const { push } = useRouter();

  return (
    <>
      <h1 style={h1style}>root</h1>
      <button style={buttonStyle}>about</button>
    </>
  );
};

export default Root;
