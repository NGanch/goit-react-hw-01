// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

// =================== profile ===================
import { UserProfile }  from '../components/comp_prifile/Profile.jsx';
import user from '../path/user.json';
// =================== profile ===================

// =================== Statistics ===================
import { Statistics } from '../components/comp_statistics/Statistics.jsx';
import { StatisticsList } from '../components/comp_statistics/Statistics.jsx';
import data from '../path/data.json';
// =================== Statistics ===================
// =================== FriendList ===================
//----------------------- другий спосиб -----------------------
import { FriendList } from '../components/comp_friendlist/FriendList.jsx';
// import { FriendListItem } from '../components/comp_friendlist/FriendList.jsx';
import friends from '../path/friends.json';
// =================== FriendList ===================

// =================== TransactionHistory ===================
// import { TransactionTitle } from '../components/comp_transactionhistory/TransactionHistory.jsx';
import { TransactionHistory } from '../components/comp_transactionhistory/TransactionHistory.jsx';
import transactions from '../path/transactions.json';
// =================== TransactionHistory ===================
// // const users = user[0];

export function Profile(){
return (
<div>
     <UserProfile  
      username={user.username}
      tag ={user.tag} 
      location ={user.location}
      imgUrl={user.avatar} 
      followers={user.stats.followers} 
      views={user.stats.views} 
      likes={user.stats.likes} 
   />
</div>
);
}
// =================== profile ===================

// =================== Statistics ===================


export function Section (){
    return(
        <Statistics title="Upload stats" stats={data} >
            <StatisticsList stats={data} />
        </Statistics>

    )
}

// =================== Statistics ===================

// =================== FriendList ===================
//----------------------- перший спосіб -----------------------
// import { FriendList } from '../components/comp_friendlist/FriendList.jsx';
// import friends from '../path/friends.json';

export function Friend(){
 
    return(
        <FriendList friends={friends} /> 
          
    )
}

//----------------------- перший спосіб -----------------------
//----------------------- другий спосиб -----------------------

// import { FriendList } from '../components/comp_friendlist/FriendList.jsx';
// import { FriendListItem } from '../components/comp_friendlist/FriendList.jsx';
// import friends from '../path/friends.json';

// export function Friend(){
//     return(
//         <FriendList friends={friends}> 
//             <FriendListItem friends={friends} />
//         </FriendList>
//     )
// }

//----------------------- другий спосиб -----------------------

// =================== FriendList ===================

// =================== TransactionHistory ===================

//----------------------- перший спосіб -----------------------
export function Transaction(){
  return(
    <TransactionHistory items={transactions} />
    
  )
}
//----------------------- перший спосіб -----------------------
//----------------------- другий спосиб -----------------------
// export function Transaction(){
//   return(
//     <TransactionTitle items={transactions}>
//       <TransactionHistory items={transactions} />
//     </TransactionTitle>
//   )
// }
//----------------------- другий спосиб -----------------------

// =================== TransactionHistory ===================
