const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const CommityModel = require ('./models/Commity');
const BatchDetailsModel = require('./models/BatchDetails');
const app = express();

app.use(express.json());
app.use(cors());




const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://boardofstudies:webtech%402023@boardofstudies.dqcxb4r.mongodb.net/BoS', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
   CommityModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

// app.post('/login', (req, res) => {
//   // To find record from the database
//   const { email, password } = req.body;

//   CommityModel.findOne({ email: email })
//     .then(user => {
//       if (user) {
//         // If user found then these 2 cases
//         if (user.password === password) {
//           // Check if the user is hod@gmail.com
//           if (email === 'HoD@gmail.com') {
//             // Return "Success" along with the user role
//             res.json({ status: "Success", userRole: "hod" });
//           } else {
//             // Return "Success" without user role for other users
//             res.json("Success");
//           }
//         } else {
//           res.json("Wrong password");
//         }
//       }
//       // If user not found then 
//       else {
//         res.json("No records found!");
//       }
//     })
//     .catch(error => {
//       console.error('Error during login:', error);
//       // Add any additional error handling logic here
//       res.status(500).json("Internal Server Error");
//     });
// });

// app.get('/api/batch/:batchId/details', async(req, res) => {
//   const { batchId } = req.params;

//   BatchDetailsModel.find({ batch: batchId })
//     .then(data => {
//       if (data.length > 0) {
//         res.json(data);
//       } else {
//         res.json("No records found for the given batch ID.");
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });
// app.get('/batch/:batch/details', async (req, res) => {
//   const { batch } = req.params;

//   try {
//     const batchDetails = await BatchDetailsModel.find({ batch });
//     res.json(batchDetails);
//   } catch (error) {
//     console.error('Error fetching BatchDetails:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// app.get('/batch/:batch/details', async (req, res) => {
//   const { batch } = req.params;
//   console.log('Batch Parameter:', batch);

//   try {
//     const batchDetails = await BatchDetailsModel.findOne({ batch });
//     console.log('Batch Details:', batchDetails);
//     res.json(batchDetails);
//   } catch (error) {
//     console.error('Error fetching BatchDetails:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// app.get('/batch/:batch/details', async (req, res) => {
//   const { batch } = req.params;

//   try {
//     const batchDetails = await BatchDetailsModel.find({ batch });

//     if (Array.isArray(batchDetails) && batchDetails.length > 0) {
//       const tableRows = batchDetails.map((item) => {
//         const coursesBySemester = {};

//         // Group courses by semester
//         item.courses.forEach((course) => {
//           coursesBySemester[course.semester] = {
//             course_code: course.course_code,
//             course_name: course.course_name,
//             credit_hours: course.credit_hours,
//           };
//         });

//         // Create table rows
//         return `<tr>
//                   <td>${item.semester}</td>
//                   ${Array.from({ length: 8 }, (_, index) => index + 1).map((semester) => {
//                     const course = coursesBySemester[semester];
//                     return `
//                       <td>${course ? `${course.course_name} (${course.course_code})\n(${course.credit_hours})` : 'N/A'}</td>
//                     `;
//                   }).join('')}
//                 </tr>`;
//       });

//       const htmlTable = `
//         <table>
//           <thead>
//             <tr>
//               <th>Semester</th>
//               ${Array.from({ length: 8 }, (_, index) => index + 1).map((semester) => `
//                 <th>${semester}</th>
//               `).join('')}
//             </tr>
//           </thead>
//           <tbody>
//             ${tableRows.join('')}
//           </tbody>
//         </table>
//       `;

//       res.send(htmlTable);
//     } else {
//       res.send('No data available for the specified batch');
//     }
//   } catch (error) {
//     console.error('Error fetching BatchDetails:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.get('/batch/:batch/details', async (req, res) => {
//   const { batch } = req.params;

//   try {
//     const batchDetails = await BatchDetailsModel.find({ batch });

//     if (Array.isArray(batchDetails) && batchDetails.length > 0) {
//       const tableRows = [];
      
//       // Loop through semesters
//       for (let semester = 1; semester <= 8; semester++) {
//         const semesterCourses = batchDetails
//           .filter(item => item.semester === semester)
//           .map(item => item.courses[0]); // Assuming each semester has one course, adjust accordingly

//         const semesterRow = `<tr>
//                               <td>${semester}</td>
//                               ${semesterCourses.map(course => `
//                                 <td>
//                                   <p>${course.course_name}</p>
//                                   <p>${course.course_code}</p>
//                                   <p>(${course.credit_hours?.lectures || 'N/A'}-${course.credit_hours?.tutorials || 'N/A'}-${course.credit_hours?.labs || 'N/A'})</p>
//                                 </td>`).join('')}
//                               </tr>`;

//         tableRows.push(semesterRow);
//       }

//       const htmlTable = `
//         <table>
//           <thead>
//             <tr>
//               <th>Semester</th>
//               ${[1, 2, 3, 4, 5, 6, 7, 8].map(semester => `<th>${semester}</th>`).join('')}
//             </tr>
//           </thead>
//           <tbody>
//             ${tableRows.join('')}
//           </tbody>
//         </table>
//       `;

//       res.send(htmlTable);
//     } else {
//       res.send('No data available for the specified batch');
//     }
//   } catch (error) {
//     console.error('Error fetching BatchDetails:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(3001, () => {
//   console.log("Server listening on http://127.0.0.1:3001");
// });
// app.get('/batch/:batch/details', async (req, res) => {
//   const { batch } = req.params;

//   try {
//     const batchDetails = await BatchDetailsModel.find({ batch });

//     if (Array.isArray(batchDetails) && batchDetails.length > 0) {
//       const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

//       const tableRows = semesters.map((semester) => {
//         const semesterCourses = batchDetails
//           .filter((item) => item.semester === semester)
//           .map((item) => {
//             const firstCourse = item.courses[0];
//             return `
//               <p>${firstCourse ? firstCourse.course_name : 'N/A'}</p>
//               <p>${firstCourse ? firstCourse.course_code : 'N/A'}</p>
//               <p>(${firstCourse ? firstCourse.credit_hours.lectures : 'N/A'}-${firstCourse ? firstCourse.credit_hours.tutorials : 'N/A'}-${firstCourse ? firstCourse.credit_hours.labs : 'N/A'})</p>
//             `;
//           });

//         return `
//           <td>
//             ${semesterCourses.join('')}
//           </td>
//         `;
//       });

//       const htmlTable = `
//         <table>
//           <thead>
//             <tr>
//               <th>Semester</th>
//               ${semesters.map((semester) => `<th>${semester}</th>`).join('')}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td></td>
//               ${tableRows.join('')}
//             </tr>
//           </tbody>
//         </table>
//       `;

//       res.send(htmlTable);
//     } else {
//       res.send('No data available for the specified batch');
//     }
//   } catch (error) {
//     console.error('Error fetching BatchDetails:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.get('/batch/:batch/details', async (req, res) => {
//   const { batch } = req.params;

//   try {
//     const batchDetails = await BatchDetailsModel.find({ batch });

//     if (Array.isArray(batchDetails) && batchDetails.length > 0) {
//       const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

//       const tableRows = semesters.map((semester) => {
//         const semesterCourses = batchDetails
//           .filter((item) => item.semester === semester)
//           .map((item) => {
//             return item.courses.map((course) => `
//               <p>${course.course_name}</p>
//               <p>${course.course_code}</p>
//               <p>(${course.credit_hours.lectures || 'N/A'}-${course.credit_hours.tutorials || 'N/A'}-${course.credit_hours.labs || 'N/A'})</p>
//             `).join('');
//           });

//         return `
//           <td>
//             ${semesterCourses.join('')}
//           </td>
//         `;
//       });

//       const htmlTable = `
//       <table style="border-collapse: collapse; width: 100%; margin-top: 20px; border: 1px solid #ddd;">
//       <thead style="background-color: #f2f2f2;">
//       <tr>
//       <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Semester</th>
//       ${semesters.map((semester) => `<th style="border: 1px solid #ddd; padding: 8px; text-align: center;>${semester}</th>`).join('')}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td></td>
//               ${tableRows.join('')}
//             </tr>
//           </tbody>
//         </table>
//       `;

//       res.send(htmlTable);
//     } else {
//       res.send('No data available for the specified batch');
//     }
//   } catch (error) {
//     console.error('Error fetching BatchDetails:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.get('/batch/:batch/details', async (req, res) => {
//   const { batch } = req.params;

//   try {
//     const batchDetails = await BatchDetailsModel.find({ batch });

//     if (Array.isArray(batchDetails) && batchDetails.length > 0) {
//       const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

//       const tableRows = semesters.map((semester) => {
//         const semesterCourses = batchDetails
//           .filter((item) => item.semester === semester)
//           .map((item) => {
//             return item.courses.map((course) => `
//               <p>${course.course_name}</p>
//               <p>${course.course_code}</p>
//               <p>(${course.credit_hours.lectures || 'N/A'}-${course.credit_hours.tutorials || 'N/A'}-${course.credit_hours.labs || 'N/A'})</p>
//             `).join('');
//           });

//         return `
//           <td>
//             ${semesterCourses.join('')}
//           </td>
//         `;
//       });

//       const htmlTable = `
//       <html>
//         <head>
//           <style>
//             table {
//               border-collapse: collapse;
//               width: 100%;
//               margin-top: 20px;
//             }
//             th, td {
//               border: 1px solid #dddddd;
//               text-align: left;
//               padding: 8px;
//               font-size: 14px;
//               font-family: 'Times New Roman', Times, serif;

//             }
//             th {
//               background-color: #f2f2f2;
//             }
//             table {
//               border-collapse: collapse;
//               width: 100%;
//               margin-top: 20px;
//               border: 1px solid #ddd;
//               font-size: 14px;
//               background-color: white;
//               font-family: 'Times New Roman', Times, serif;

//             }
//           </style>
//         </head>
//         <body>
//           <table className="table table-bordered">
//             <thead style="background-color: #f2f2f2;">
//               <tr>
//                 <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Semester</th>
//                 ${semesters.map((semester) => `<th style="border: 1px solid #ddd; padding: 8px; text-align: center;">${semester}</th>`).join('')}
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td></td>
//                 ${tableRows.join('')}
//               </tr>
//             </tbody>
//           </table>
//         </body>
//       </html>
//       `;

//       res.send(htmlTable);
//     } else {
//       res.send('No data available for the specified batch');
//     }
//   } catch (error) {
//     console.error('Error fetching BatchDetails:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
app.get('/batch/:batch/details', async (req, res) => {
  const { batch } = req.params;

  try {
    const batchDetails = await BatchDetailsModel.find({ batch });

    if (Array.isArray(batchDetails) && batchDetails.length > 0) {
      const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

      const tableRows = semesters.map((semester) => {
        const semesterCourses = batchDetails
      
        // .flatMap((item) => item.courses) // Flatten the courses array
          .filter((item) => item.semester === semester)
          .map((item) => {
            return item.courses.map((course) => `
            <p>${course.course_name}</p>
              <p>${course.course_code}</p>
              <p>(${course.credit_hours.lectures || '0'}-${course.credit_hours.tutorials || '0'}-${course.credit_hours.labs || '0'})</p>
            `).join('');
          });

        return `
          <td>
            ${semesterCourses.join('')}
          </td>
        `;

    
    return `
      <td>
        ${semesterCourses}
      </td>
    `;
       });

     

      const htmlTable = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
      border: 1px solid #ddd; /* Add border to the table */
    }
    th{
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      font-size: 14px;
      font-family: 'Times New Roman', Times, serif;
    }
    th {
      background-color: #f2f2f2;
    }
    .scrollable-table {
      max-height: 500px;
      overflow-y: auto;
      border: 1px solid #ddd; /* Add border to the scrollable container */
    }
  </style>
</head>
<body>
  <div class="scrollable-table">
    <table class="table table-bordered border-primary">
      <thead style="background-color: #f2f2f2;">
        <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Semester</th>
          ${semesters.map((semester) => `<th style="border: 1px solid #ddd; padding: 8px; text-align: center;">${semester}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"></td>
          ${tableRows.join('')}
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
`;

// Now you can use the 'htmlTable' string as needed in your application.

      res.send(htmlTable);
    } else {
      res.send('No data available for the specified batch');
    }
  } catch (error) {
    console.error('Error fetching BatchDetails:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/edit', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await CommityModel.findOne({ email });

    if (existingUser) {
      // Update the password for the existing user
      existingUser.password = password;
      const updatedUser = await existingUser.save();
      res.json(updatedUser);
    } else {
      // If the user doesn't exist, create a new user
      const newUser = await CommityModel.create(req.body);
      res.json(newUser);
    }
  } catch (error) {
    console.error('Error in edit:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});


//<th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Semester</th>