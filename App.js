import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

console.log(store.getState());
export default function App() {
  return (
    //프로바이더는 부모 프롭을 복사해서 칠드런에 전달.
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}

