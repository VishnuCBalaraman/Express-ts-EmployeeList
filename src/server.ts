import app from './app';
import connectDB from './config/db'; // Adjust the path as necessary

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
