import React from 'react';
import './login.css';

// export function Login() {
//   return (
//     // <main className='container-fluid bg-secondary text-center'>
//     //   <div>login displayed here</div>
//     // </main>
//     <main class="container-fluid bg-secondary text-center">
//       <div>
//         <h1>Welcome to Simon</h1>
//         <form method="get" action="play.html">
//           <div className="input-group mb-3">
//             <span className="input-group-text">@</span>
//             <input className="form-control" type="text" placeholder="your@email.com" />
//           </div>
//           <div className="input-group mb-3">
//             <span className="input-group-text">🔒</span>
//             <input className="form-control" type="password" placeholder="password" />
//           </div>
//           <button type="submit" className="btn btn-primary">Login</button>
//           <button type="submit" className="btn btn-secondary">Create</button>
//         </form>
//       </div>
//     </main>
//   );
// }

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}
        {authState === AuthState.Authenticated && <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}