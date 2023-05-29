import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { App } from 'components/App';
import { Profile } from './components/App';
import { Section } from './components/App';
import { Friend } from './components/App';
import { Transaction } from './components/App';
//----------------------------------------------------------------
// import { UserProfile }  from './components/Profile';

// import user from './path/user.json';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <UserProfile  
//       username={user.username}
//        tag ={user.tag} 
//       location ={user.location}
//        imgUrl={user.avatar} 
//     />
//   </React.StrictMode>
// );
//----------------------------------------------------------------
const divEl = document.getElementById('root');
divEl.classList.add('container');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile /> 
      <Section /> 
      <Friend /> 
    <Transaction />  
  </React.StrictMode>
);

//----------------------------------------------------------------