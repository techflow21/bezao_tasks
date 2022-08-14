import React from 'react';

// import Logout from '../Logout';

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1>Restaurant Food -CRUD </h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add FoodItem</button>
        {/* <Logout setIsAuthenticated={setIsAuthenticated} /> */}
      </div>
    </header>
  );
};

export default Header;
