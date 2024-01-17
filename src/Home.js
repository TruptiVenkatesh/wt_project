// // export default Home;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import klefullphoto from './klefullphoto.png';

// //import Socse from './socse.js';
// //import Socse from './socse';


// const Home = ({ userRole }) => {
//   const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//    const [showInsertForm, setShowInsertForm] = useState(false); // New state
//   const navigate = useNavigate();
 

//   const departments = ['ECE', 'CSE', 'Mechanical', 'Civil', 'Chemical'];

//   const handleDepartmentClick = () => {
//     setShowDepartmentDropdown(!showDepartmentDropdown);
//   };

//   const handleDepartmentChange = (department) => {
//     setSelectedDepartment(department);
//     setShowDepartmentDropdown(false);
//     if (department === 'CSE') {
//       navigate('/Socse'); // Navigate to Socse page when CSE is selected
//     }
//   };

//   const handleEditClick = () => {
//         // Toggle editing mode only if the user is not Hod
//         if (userRole !== 'hod@gmail.com') {
//           setIsEditing(!isEditing);
//           setShowInsertForm(false); // Close the insert form when switching to edit mode
//         }
//       };
    
//       const handleInsertClick = () => {
//         // Handle Insert button click logic here
//         console.log('Insert clicked');
//         setShowInsertForm(true); // Show the insert form
//       };
    
//       const handleDeleteClick = () => {
//         // Handle Delete button click logic here
//         console.log('Delete clicked');
//       };
  

  

//   const renderDepartmentContent = () => {
//     if (selectedDepartment === 'CSE') {
//       return (
//         <div>
//           <h3>{selectedDepartment} Department - {userRole}</h3>
//           <p>Additional content for {selectedDepartment} Department</p>
//           {isEditing && (
//             <div>
//               <button onClick={handleInsertClick}>Insert</button>
//               <button onClick={handleDeleteClick}>Delete</button>
//             </div>
//           )}
//           {showInsertForm && (
//             <div>
//             <form>
//               <label>
//                 Faculty Email:
//                 <input type="email" />
//               </label>
//               <label>
//                 Password:
//                 <input type="password" />
//               </label>
//               <button type="submit">Submit</button>
//             </form>
//             </div>
//           )}

//         </div>
//       );
//     }
//     return null;
//   };

  

  

//   return (
//     <div className='body'>
//       <header className="header">
//         <img src={klefullphoto} alt="Kletech Company Logo" className="logo2" />
//         <nav className="navbar">
//           <div className='navbut'>
//             <button className="search">About</button>
//             <button className="search">Programs</button>
//             <button className="search">Academics</button>
//             <div className="dropdown" onClick={handleDepartmentClick}>
//           <button className="search">Department</button>
//           {showDepartmentDropdown && (
//             <div className="dropdown-content">
//               {departments.map((dept) => (
//                 <button className="Dname" key={dept} onClick={() => handleDepartmentChange(dept)}>
//                   {dept}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//             <button className="search">Placement</button>
//             <button className="search">Search</button>
//           </div>
//         </nav>
//       </header>

//       <div className='userCont'>
//         <h2>Welcome, {userRole}!</h2>
//         {isEditing ? (
//           <div>
//             <button className="search" onClick={handleInsertClick}>Insert</button>
//             <button className="search">Delete</button>
//           </div>
//         ) : (
//           <button
//             className="editButton"
//             onClick={handleEditClick}
//             disabled={userRole === 'hod@gmail.com'}
//             style={{
//               cursor: userRole === 'hod@gmail.com' ? 'not-allowed' : 'pointer',
//               backgroundColor: userRole === 'hod@gmail.com' ? '#ccc' : '#007bff',
//               color: userRole === 'hod@gmail.com' ? '#555' : '#fff',
//             }}
//           >
//             Edit
//           </button>

          
//         )}
        
        
//       </div>
      
//       {renderDepartmentContent()}
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import klefullphoto from './klefullphoto.png';

// const Home = ({ userRole }) => {
//   console.log('UserRole:', userRole);

//   const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [showInsertForm, setShowInsertForm] = useState(false);
//   const navigate = useNavigate();

//   const departments = ['ECE', 'CSE', 'Mechanical', 'Civil', 'Chemical'];

//   const handleDepartmentClick = () => {
//     setShowDepartmentDropdown(!showDepartmentDropdown);
//   };

//   const handleDepartmentChange = (department) => {
//     setSelectedDepartment(department);
//     setShowDepartmentDropdown(false);
//     if (department === 'CSE') {
//       navigate('/Socse');
//     }
//   };

//   const handleEditClick = () => {
//     if (userRole !== 'hod@gmail.com') {
//       setIsEditing(!isEditing);
//       setShowInsertForm(false);
//     }
//   };

//   const handleInsertClick = () => {
//     console.log('Insert clicked');
//     setShowInsertForm(true);
//   };

//   const handleDeleteClick = () => {
//     console.log('Delete clicked');
//   };

//   const renderDepartmentContent = () => {
//     if (selectedDepartment === 'CSE') {
//       return (
//         <div>
//           <h3>{selectedDepartment} Department - {userRole}</h3>
//           <p>Additional content for {selectedDepartment} Department</p>
//           {isEditing && (
//             <div>
//               <button onClick={handleInsertClick}>Insert</button>
//               <button onClick={handleDeleteClick}>Delete</button>
//             </div>
//           )}
//           {showInsertForm && (
//             <div>
//               <form>
//                 <label>
//                   Faculty Email:
//                   <input type="email" />
//                 </label>
//                 <label>
//                   Password:
//                   <input type="password" />
//                 </label>
//                 <button type="submit">Submit</button>
//               </form>
//             </div>
//           )}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className='body'>
//       <header className="header">
//         <img src={klefullphoto} alt="Kletech Company Logo" className="logo2" />
//         <nav className="navbar">
//           <div className='navbut'>
//             <button className="search">About</button>
//             <button className="search">Programs</button>
//             <button className="search">Academics</button>
//             <div className="dropdown" onClick={handleDepartmentClick}>
//               <button className="search">Department</button>
//               {showDepartmentDropdown && (
//                 <div className="dropdown-content">
//                   {departments.map((dept) => (
//                     <button className="Dname" key={dept} onClick={() => handleDepartmentChange(dept)}>
//                       {dept}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button className="search">Placement</button>
//             <button className="search">Search</button>
//           </div>
//         </nav>
//       </header>

//       <div className='userCont'>
//         <h2>Welcome, {userRole}!</h2>
//         {userRole && userRole !== 'hod@gmail.com' && (
//           <div>
//             {isEditing && (
//               <div>
//                 <button className="search" onClick={handleInsertClick}>
//                   Insert
//                 </button>
//                 <button className="search" onClick={handleDeleteClick}>
//                   Delete
//                 </button>
//               </div>
//             )}
//             <button
//               className="editButton"
//               onClick={handleEditClick}
//               disabled={userRole === 'hod@gmail.com'}
//               style={{
//                 cursor: userRole === 'hod@gmail.com' ? 'not-allowed' : 'pointer',
//                 backgroundColor: userRole === 'hod@gmail.com' ? '#ccc' : '#007bff',
//                 color: userRole === 'hod@gmail.com' ? '#555' : '#fff',
//               }}
//             >
//               Edit
//             </button>
//           </div>
//         )}
//       </div>

//       {renderDepartmentContent()}
//     </div>
//   );
// };

// export default Home;
// Home.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import klefullphoto from './klefullphoto.png';

const Home = ({ userRole }) => {
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showInsertForm, setShowInsertForm] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const departments = ['ECE', 'CSE', 'Mechanical', 'Civil', 'Chemical'];

  const handleDepartmentClick = () => {
    setShowDepartmentDropdown(!showDepartmentDropdown);
  };

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    setShowDepartmentDropdown(false);
    if (department === 'CSE') {
      navigate('/Socse');
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setShowInsertForm(false);
  };

  const handleInsertClick = () => {
    setShowInsertForm(true);
  };

  const handleDeleteClick = () => {
    console.log('Delete clicked');
  };

  const handleSaveClick = () => {
    // Handle save logic here (e.g., add new username and password to the database)
    console.log('Save clicked');
    setShowInsertForm(false);
    // You may want to make an API call to save the new username and password
  };

  const renderDepartmentContent = () => {
    if (selectedDepartment === 'CSE') {
      return (
        <div>
          <h3>{selectedDepartment} Department - {userRole}</h3>
          <p>Additional content for {selectedDepartment} Department</p>

          {isEditing && (
            <div>
              <button onClick={handleInsertClick}>Insert</button>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          )}

          {showInsertForm && (
            <div>
              <form>
                <label>
                  New Username:
                  <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                </label>
                <label>
                  New Password:
                  <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </label>
                <button type="button" onClick={handleSaveClick}>Save</button>
              </form>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='body'>
      <header className="header">
        <img src={klefullphoto} alt="Kletech Company Logo" className="logo2" />
        <nav className="navbar">
          <div className='navbut'>
             <button className="search">About</button>
             <button className="search">Programs</button>
            <button className="search">Academics</button>
             <div className="dropdown" onClick={handleDepartmentClick}>
               <button className="search">Department</button>
             {showDepartmentDropdown && (
                <div className="dropdown-content">
                  {departments.map((dept) => (
                    <button className="Dname" key={dept} onClick={() => handleDepartmentChange(dept)}>
                      {dept}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="search">Placement</button>
            <button className="search">Search</button>
          </div>
        </nav>
      </header>

      <div className='userCont'>
        <h2>Welcome, {userRole}!</h2>

        {userRole === 'admin@gmail.com' && (
          <button className="editButton" onClick={handleEditClick}>
            Edit
          </button>
        )}

        {isEditing && !showInsertForm && (
          <div>
            <button onClick={handleInsertClick}>Insert</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        )}

        {showInsertForm && (
          <div>
            <form>
              <label>
                New Username:
                <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
              </label>
              <label>
                New Password:
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              </label>
              <button type="button" onClick={handleSaveClick}>Save</button>
            </form>
          </div>
        )}
      </div>

      {renderDepartmentContent()}
    </div>
  );
};

export default Home;
