# Zomato Backend Clone

## Overview

This repository contains the backend code for a Zomato clone, implemented using Node.js, Express, and MongoDB. It provides RESTful API endpoints for user authentication, posts, and other features required for the Zomato clone application.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Sanjoy-droid/Zomato-Backend.git

   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Create .env file:**

```bash
PORT=5000
MONGOURI=<your_mongodb_connection_uri>
```

2. **Start the development server:**

   ```bash
   nodemon index
   ```

3. **Access the API:**

   The API will be available at http://localhost:5000/api.

**Available Endpoints**

     POST "/api/auth/createuser" Register a new user.
     POST "/api/auth/login" Log in an existing user.
     POST "/api/auth/getuser" Get details of an existing user.

     GET "/api/posts/fetchdeliveryposts" Get all delivery section posts.
     GET "/api/posts/fetchnightlifeposts" Get all nightlife section posts.
     GET "/api/posts/fetchresturantposts" Get all resturants section posts.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Disclaimer

This Zomato Clone project is created for educational purposes, aiming to showcase skills in web development and React programming. It is not an official Zomato product, and all credits for the original Zomato platform go to the dedicated team at Zomato. The use of the term "Zomato" is for descriptive purposes only.

This project is not intended for commercial use or to imply any official association with Zomato. All trademarks, registered trademarks, and service marks mentioned herein are the property of their respective owners.
