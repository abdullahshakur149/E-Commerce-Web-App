// // axiosConfig.js
// import axios from 'axios';

// axios.interceptors.request.use((config) => {
//   console.log('Interceptor executed');
  
//   // Get the token from the cookie or wherever you store it
//   const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

//   // Include the token in the request headers
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
