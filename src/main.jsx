import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './useState/CounterApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
// import { SimpleForm } from './useEffect/SimpleForm';
// import { FormWithCustomHooks } from './useEffect/FormWithCustomHooks';
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks';
// import { FocusScreen } from './useRef/FocusScreen';
// import { Layout } from './useLayoutEffect/Layout';
// import { Memorize } from './memo/Memorize';
// import { MemoHook } from './memo/useMemo/MemoHook';
// import { CallbackHook } from './memo/useCallback/CallbackHook';
// import { Padre } from './memo-tarea/Padre';
// import './useReducer/intro-reducer';
// import { TodoApp } from './useReducer/hookUseReducer/TodoApp';
import { MainApp } from './useContext/MainApp';


import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
