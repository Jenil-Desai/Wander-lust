# Wanderlust

## Overview

Wanderlust is a dynamic web application inspired by Airbnb, built using the MERN stack (MongoDB, Express.js, Node.js) with EJS and EJS-mate templating engines. The platform allows users to seamlessly manage property listings, including creating, viewing, editing, and deleting listings. Additionally, it offers user signup and login functionality, review management, and various advanced features to enhance user experience. The application is fully optimized for mobile devices.

## Features

- **Listing Management**: Effortlessly create, view, edit, and delete property listings.
- **User Signup and Login**: Secure user registration and login functionality.
- **Review Management**: Add and delete reviews for property listings.
- **User-Friendly Interface**: Browse through properties with detailed descriptions and images.
- **Dynamic Templates**: EJS and EJS-mate ensure a responsive and reusable HTML structure.
- **Map Integration**: Display property locations on a map based on the entered address.
- **Category Filtering**: Filter listings based on categories.
- **Search Functionality**: Search for listings based on keywords.
- **New Category Field**: Add and manage categories for listings.
- **Tax Switch**: Toggle tax inclusion for listing prices.
- **Listing and Review Owners**: View information about listing and review owners.
- **Mobile Optimization**: Fully responsive design for an enhanced mobile experience.

## Technologies Used

- **MongoDB**: For robust and scalable database management.
- **Express.js**: To build a powerful and flexible backend.
- **Node.js**: Ensuring a fast and efficient runtime environment.
- **EJS & EJS-mate**: For creating dynamic and reusable HTML templates.

## Dependencies

The project uses the following packages:

- **@mapbox/mapbox-sdk**: Mapbox SDK for integrating maps and location services.
- **cloudinary**: Cloudinary library for managing image uploads and storage.
- **connect-flash**: Flash messages for Express applications.
- **connect-mongo**: MongoDB session store for Express and Connect.
- **dotenv**: Loads environment variables from a .env file.
- **ejs**: Embedded JavaScript templating.
- **ejs-mate**: Layout, partials, and blocks for EJS templates.
- **express**: Web framework for Node.js.
- **express-session**: Session middleware for Express.
- **joi**: Data validation library for JavaScript.
- **method-override**: Allows using HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **multer**: Middleware for handling multipart/form-data, used for file uploads.
- **multer-storage-cloudinary**: Multer storage engine for Cloudinary.
- **nodemon**: Tool that helps develop Node.js based applications by automatically restarting the node application when file changes are detected.
- **passport**: Authentication middleware for Node.js.

## Live Demo

- Check out the live demo of the project [Here](https://wanderlust-929z.onrender.com/listings).
- The project will take some time to load considering that it is hosted on the free tier. Therefore, maintain patient.

## Version Releases

Track the version releases and updates on our Notion page [here](https://jenil-desai.notion.site/Version-Releases-Wanderlust-c373e18729c844dcae64495edb58f865?pvs=4).

## Environment Variables

Create a .env file in the root directory of your project and add the following environment variables:

```bash
MONGO_URL=your_mongodb_url
secret=secret_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOEKN=your_mapbox_public_token
```

Replace your_mongodb_connection_string, your_session_secret, and your_google_maps_api_key with your actual MongoDB URI, session secret, and Google Maps API key.

## initialization

1. Navigate to init directory:

   ```bash
   cd init
   ```

2. Open index.js file and change the owner object ID to new user object id. You will get your user_object_id after siging up new user.

3. Go To mongodb and find new user and copy object ID.

4. Run the initializer:

   ```bash
   node index.js
   ```

5. If everything is proper then it will show:

   ```bash
   Data Was Initialized
   ```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jenil-desai/wanderlust.git
   ```

2. Navigate to the project directory:

   ```bash
   cd wanderlust
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB database and update the `.env` file with your database URI.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:8080`.

## Usage

- **Create Listing**: Add new property listings with detailed information.
- **View Listings**: Browse through all the available property listings.
- **Edit Listing**: Update existing property details.
- **Delete Listing**: Remove property listings from the platform.
- **User Signup and Login**: Register and log in to access personalized features.
- **Add Review**: Leave reviews and ratings for property listings.
- **Delete Review**: Remove reviews from property listings.
- **Map View**: View property locations on a map.
- **Filter Listings**: Use categories to filter property listings.
- **Search Listings**: Search for listings using keywords.
- **Toggle Tax**: Include or exclude tax in listing prices.
- **View Owners**: See information about listing and review owners.
- **Mobile Optimization**: Enjoy a fully responsive design for a seamless mobile experience.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact me via [LinkedIn](https://www.linkedin.com/in/desaijenil).

---

_Thank you for checking out Wanderlust!_
