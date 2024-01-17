// // // // // StructurePage.js
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { useParams } from 'react-router-dom'; // Add this import
// // // import './StructurePage.css';

// // // const StructurePage = () => {
// // //   const { batch } = useParams();
// // //   // State to store the retrieved structure data
// // //   const [structureData, setStructureData] = useState([]);

// // //   // Fetch data when the component mounts
// // //   useEffect(() => {
// // //     axios.get(`http://localhost:3001/batch/${batch}/details`)
// // //       .then(response => {
// // //         setStructureData(response.data);
// // //       })
// // //       .catch(error => {
// // //         console.error('Error fetching BatchDetails:', error);
// // //       });
// // //   }, [batch]);
  

// // //   // Function to dynamically generate table headers based on semesters
// // //   const generateTableHeaders = () => {
// // //     const semesters = structureData.map(course => course.semester);
// // //     const uniqueSemesters = [...new Set(semesters)]; // Remove duplicates

// // //     return uniqueSemesters.map(semester => (
// // //       <th key={semester}>Semester {semester}</th>
// // //     ));
// // //   };

// // //   return (
// // //     <div className='wrr' style={{width:"auto"}}>
// // //       <h2>Structure Page</h2>
// // //       {/* Render the structure data in a table */}
// // //       <table className='table table-striped-columns'>
// // //         <thead>
// // //           <tr>
// // //             <th>Course Code</th>
// // //             <th>Course Name</th>
// // //             <th>Credit Hours (Lectures)</th>
// // //             <th>Credit Hours (Tutorials)</th>
// // //             <th>Credit Hours (Labs)</th>
// // //             {generateTableHeaders()}
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {structureData.map(course => (
// // //             <tr key={course.course_code}>
// // //               <td>{course.course_code}</td>
// // //               <td>{course.course_name}</td>
// // //               <td>{course.credit_hours.lectures}</td>
// // //               <td>{course.credit_hours.tutorials}</td>
// // //               <td>{course.credit_hours.labs}</td>
// // //               {/* Render semester details */}
// // //               {generateSemesterDetails(course)}
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // // Function to dynamically generate semester details
// // // const generateSemesterDetails = (course) => {
// // //   const semesterDetails = [];

// // //   // Loop through semesters and add details to the array
// // //   for (let i = 1; i <= course.semester; i++) {
// // //     const semester = course.semester === i ? course : null;
// // //     semesterDetails.push(
// // //       <td key={i} className='semester-details'>
// // //         {semester && (
// // //           <>
// // //             <div>Course Code: {semester.course_code}</div>
// // //             <div>Course Name: {semester.course_name}</div>
// // //             <div>Lectures: {semester.credit_hours.lectures}</div>
// // //             <div>Tutorials: {semester.credit_hours.tutorials}</div>
// // //             <div>Labs: {semester.credit_hours.labs}</div>
// // //           </>
// // //         )}
// // //       </td>
// // //     );
// // //   }

// // //   return semesterDetails;
// // // };

// // // export default StructurePage;

// // StructurePage.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import './StructurePage.css';

// // const StructurePage = () => {
// //   const { batch } = useParams();
// //   const [structureData, setStructureData] = useState([]);

// //   useEffect(() => {
// //     axios.get(`http://localhost:3001/batch/${batch}/details`)
// //       .then(response => {
// //         setStructureData(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching BatchDetails:', error);
// //       });
// //   }, [batch]);

// //   const generateTableHeaders = () => (
// //     <thead>
// //       <tr>
// //         <th>Semester</th>
// //         <th>Course Code</th>
// //         <th>Course Name</th>
// //         <th>Credit Hours (Lectures)</th>
// //         <th>Credit Hours (Tutorials)</th>
// //         <th>Credit Hours (Labs)</th>
// //       </tr>
// //     </thead>
// //   );
// //   console.log(structureData);
// //   // const generateTableBody = () => (
// //   //   <tbody>
// //   //     {structureData.map(course => (
// //   //       <tr key={course._id}>
// //   //         <td>{course.semester}</td>
// //   //         <td>{course.course_code}</td>
// //   //         <td>{course.course_name}</td>
// //   //         <td>{course.credit_hours?.lectures || 'N/A'}</td>
// //   //         <td>{course.credit_hours?.tutorials || 'N/A'}</td>
// //   //         <td>{course.credit_hours?.labs || 'N/A'}</td>
// //   //         {/* Render additional details if needed */}
// //   //       </tr>
// //   //     ))}
// //   //   </tbody>
// //   // );
// //   const generateTableBody = () => (
// //     <tbody>
// //       {Array.isArray(structureData) && structureData.length > 0 ? (
// //         structureData.map((course) => (
// //           <tr key={course._id}>
// //             <td>{course.semester}</td>
// //             <td>{course.course_code}</td>
// //             <td>{course.course_name}</td>
// //             <td>{course.credit_hours?.lectures || 'N/A'}</td>
// //             <td>{course.credit_hours?.tutorials || 'N/A'}</td>
// //             <td>{course.credit_hours?.labs || 'N/A'}</td>
// //             {/* Render additional details if needed */}
// //           </tr>
// //         ))
// //       ) : (
// //         <tr>
// //           <td colSpan="6">No data available</td>
// //         </tr>
// //       )}
// //     </tbody>
// //   );
  

// //   return (
// //     <div className='wrr' style={{ width: 'auto' }}>
// //       <h2>Structure Page</h2>
// //       <table className='table table-striped-columns'>
// //         {generateTableHeaders()}
// //         {generateTableBody()}
// //       </table>
// //     </div>
// //   );
// // };

// // export default StructurePage;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './StructurePage.css';

// const StructurePage = () => {
//   const { batch } = useParams();
//   const [htmlTable, setHtmlTable] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:3001/batch/${batch}/details`)
//       .then(response => {
//         console.log('Response from server:', response.data);
//         setHtmlTable(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching BatchDetails:', error);
//         setHtmlTable('<p>Error fetching data</p>');
//       });
//   }, [batch]);

//   return (
//     <div className='wrr' style={{ width: 'auto' }}>
//       <table className='table table-striped-columns'>
//       <h2>Structure Page</h2>
//       <div dangerouslySetInnerHTML={{ __html: htmlTable }} />
//       </table>
//     </div>
//   );
// };

// export default StructurePage;
// StructurePage.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './StructurePage.css';

// const StructurePage = () => {
//   const { batch } = useParams();
//   const [structureData, setStructureData] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:3001/batch/${batch}/details`)
//       .then(response => {
//         console.log('Response from server:', response.data);
//         setStructureData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching BatchDetails:', error);
//         setStructureData([]);
//       });
//   }, [batch]);

//   const generateTableHeaders = () => (
//     <thead>
//       <tr>
//         <th>Semester</th>
//         {[1, 2, 3, 4, 5, 7, 8].map(semester => (
//           <th key={semester}>{semester}</th>
//         ))}
//       </tr>
//     </thead>
//   );

//   const generateTableBody = () => (
//     <tbody>
//       {[1, 2, 3, 4, 5, 7, 8].map((semester) => (
//         <tr key={semester}>
//           <td>{semester}</td>
//           {Array.isArray(structureData) && structureData.length > 0
//             ? structureData.map((item) => (
//                 <td key={item.semester}>
//                   {item.semester === semester && item.courses.length > 0
//                     ? item.courses.map((course) => (
//                         <div key={course._id}>
//                           <p>{course.course_name}</p>
//                           <p>{course.course_code}</p>
//                           <p>{`(${course.credit_hours?.lectures}-${course.credit_hours?.tutorials}-${course.credit_hours?.labs})`}</p>
//                         </div>
//                       ))
//                     : 'N/A'}
//                 </td>
//               ))
//             : Array.from({ length: 8 }).map((_, index) => (
//                 <td key={index}>N/A</td>
//               ))}
//         </tr>
//       ))}
//     </tbody>
//   );
  

//   return (
//     <div className='wrr' style={{ width: 'auto' }}>
//       <h2>Structure Page</h2>
//       <table className='table table-striped-columns'>
//         {generateTableHeaders()}
//         {generateTableBody()}
//       </table>
//     </div>
//   );
// };

// export default StructurePage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StructurePage.css';

const StructurePage = () => {
  const { batch } = useParams();
  const [htmlTable, setHtmlTable] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/batch/${batch}/details`)
      .then(response => {
        console.log('Response from server:', response.data);
        setHtmlTable(response.data);
      })
      .catch(error => {
        console.error('Error fetching BatchDetails:', error);
        setHtmlTable('<p>No data available</p>');
      });
  }, [batch]);

  return (
    <div className='wrr' style={{ width: 'auto' }}>
      <h2>Structure Page</h2>
      <div  dangerouslySetInnerHTML={{ __html: htmlTable }} />
    </div>
  );
};

export default StructurePage;