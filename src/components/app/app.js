import React from 'react';
import INITIAL_STATE from '../../constants/constMainView';

import Header from '../header/header';

const App = () => {
  return (
    <div className="app__container">
      <Header {...INITIAL_STATE} />
    </div>
  );
};

export default App;
