import React, {useState} from 'react';
import {} from 'react-native';
import MyContext from '.';

const Provider = ({children}) => {
  const [message, setMessage] = useState('Hello World');

  return (
    <MyContext.Provider value={{message, setMessage}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
