const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

// const fs = require('fs');
// const json_data = require('../services/contributors.JSON');

// fs.readFile(json_data, 'utf8', function (err, data) {
//   try {
//     data = JSON.parse(data)
//     for (let i in data){
//     console.log('Name:',data[i].name)
//     }
//   } catch (e) {
//     // Catch error in case file doesn't exist or isn't valid JSON
//   }
// });


