// import User from "../model/user-schema.js";

// export const userSignUp = async (request, response) => {
//   try {
//     const exist = await User.findOne({ username: request.body.username });
//     if (exist) {
//       return response.status(401).json({ message: "User already exist" });
//     }
//     const user = request.body;
//     const newUser = new User(user);
//     await newUser.save();
//     response.status(200).json({ message: user });
//   } catch (error) {
//     response.status(500).json({ message: error.message });
//   }
// };

// export const userLogIn = async (request, response) => {
//   try {
//     // const username  = request.body.username;
//     // const password = request.body.password;

//     let user = await User.findOne({
//       username: request.body.username,
//       password: request.body.username,
//     });
//     if (user) {
//     return response.status(200).json(`${username} login successfull`);
      
//     } else {
//       return response.status(401).json("Invalid Login");
//     }
//   } catch (error) {
//     response.status(500).json({ error: "An error occurred", message: error.message });
//   }
// };
import jwt from 'jsonwebtoken';
import User from '../model/user-schema.js';

// Helper function to generate a JWT token
const generateToken = (userId) => {
  const secretKey = 'ajru-deen'; // Replace with your actual secret key
  const expiresIn = '12h'; // Token expiration time
  return jwt.sign({ userId }, secretKey, { expiresIn });
};

export const userSignUp = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ message: 'User already exists' });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    const token = generateToken(newUser._id); // Generate JWT token
    response.status(200).json({ message: 'User registered successfully', token });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogIn = async (request, response) => {
  try {
    const { username, password } = request.body;

    let user = await User.findOne({ username, password });
    if (user) {
      const token = generateToken(user._id); // Generate JWT token
       return response.status(200).json({/* message: 'Login successful'*/data:user, token });
    } else {
      return response.status(401).json({ message: 'Invalid login' });
    }
  } catch (error) {
    response.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

