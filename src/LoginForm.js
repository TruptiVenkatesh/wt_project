
// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css';
import kletechLogo from './logo.jpeg';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



const LoginForm = ({ onLogin }) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault();
    
    axios.post( 'http://localhost:3001/login', {email, password})
    .then(result => {
        console.log(result);
        if(result.data === "Success"){
            console.log("Login Success");
            alert('Login successful!')
            navigate('/home');
        }
        else{
            alert('Incorrect password! Please try again.');
        }
    })
    .catch(err => console.log(err));
}

  return (
    <div id='body'>

    <img src={kletechLogo} alt="Kletech Company Logo" className="logo" />
    <div className="wrapper">
        
      <div className="form-wrapper sign-in">
        <form onSubmit={handleLogin}>
        

          <h2>Login</h2>
          <div className="input-group">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="">Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="">Password</label>
          </div>
          
          
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
// LoginForm.js
// LoginForm.js

// import React, { useState } from 'react';
// import './LoginForm.css';
// import kletechLogo from './logo.jpeg';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [editMode, setEditMode] = useState(false); // New state for edit mode
//   const navigate = useNavigate();

//   const handleLogin = (event) => {
//     event.preventDefault();

//     axios.post('http://localhost:3001/login', { email, password })
//       .then(result => {
//         if (result.data === "Success") {
//           if (email === "admin@gmail.com") {
//             setEditMode(true); // Set edit mode to true for admin user
//           }
//           alert('Login successful!');
//           navigate('/home');
//         } else {
//           alert('Incorrect password! Please try again.');
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   const handleEdit = (event) => {
//     event.preventDefault();

//     axios.post('http://localhost:3001/edit', { email: 'admin@gmail.com', password: newPassword })
//       .then(result => {
//         console.log(result);
//         alert('Edit successful!');
//         setEditMode(false); // Reset edit mode
//         navigate('/home');
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div id='body'>
//       <img src={kletechLogo} alt="Kletech Company Logo" className="logo" />
//       <div className="wrapper">
//         <div className="form-wrapper sign-in">
//           <form onSubmit={handleLogin}>
//             <h2>Login</h2>
//             <div className="input-group">
//               <input
//                 type="text"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <label htmlFor="">Username</label>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <label htmlFor="">Password</label>
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         </div>

//         {editMode && (
//           <div className="edit-form">
//             <h2>Edit User</h2>
//             <div className="input-group">
//               <input
//                 type="password"
//                 required
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//               />
//               <label htmlFor="">New Password</label>
//             </div>
//             <button onClick={handleEdit}>Save Changes</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
