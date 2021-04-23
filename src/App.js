import React from 'react';

function App() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div className='App' style={style}>
      <h1 style={{ color: 'red' }}>RED DRAGON</h1>
      <span>Welcome to RED DRAGON Application ! ! !</span>
    </div>
  );
}

export default App;
