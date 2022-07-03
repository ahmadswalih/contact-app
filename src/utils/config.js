//TODO: add firebase configuration and export it
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_Api_Key,
  authDomain: process.env.REACT_APP_Auth_Domain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_STORAGE_Bucket,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_Measurement_Id,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};
//image configuration
export const imageConfig = {
  quality: 0.2,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true,
};
