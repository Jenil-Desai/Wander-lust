# 🌐 Wanderlust

Welcome to **Wanderlust**! This repository includes a dynamic web application inspired by Airbnb, built using the MERN stack with EJS and EJS-mate templating engines.

---

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Technologies](#-technologies)
3. [Packages & Libraries Used](#-packages--libraries-used)
4. [Getting Started](#-getting-started)
5. [Setup](#-setup)
6. [Features](#-features)
7. [Demo & Screenshots](#-demo--screenshots)
8. [Acknowledgments](#-acknowledgments)
9. [License](#-license)

---

## 🌟 Overview

**Description**: Wanderlust is a dynamic web application inspired by Airbnb, built using the MERN stack (MongoDB, Express.js, Node.js) with EJS and EJS-mate templating engines. The platform allows users to manage property listings seamlessly, including creating, viewing, editing, and deleting listings. It also offers user signup, login functionality, and various advanced features optimized for mobile devices.

---

## 💻 Technologies

Below is a breakdown of the core technologies used in this project.

| 🌐 Web      |
| ----------- |
| **HTML**    |
| **Node.js** |
| **MongoDB** |

---

## 📦 Packages / Libraries Used

This project uses the following essential libraries and packages:

| Package / Library           | Purpose                              |
| --------------------------- | ------------------------------------ |
| `Bootstrap 5.3`             | Responsive design and components     |
| `EJS`                       | Server-side templating               |
| `EJS Mate`                  | Enhanced templating with EJS         |
| `Express.js`                | Backend framework                    |
| `Express-Session`           | Session management                   |
| `Mongoose`                  | MongoDB object modeling              |
| `connect-Mongo`             | MongoDB session storage              |
| `connect-Flash`             | Flash messages                       |
| `method-override`           | HTTP method override                 |
| `passport`                  | Authentication                       |
| `passport-local`            | Local strategy for passport          |
| `passport-local-mongoose`   | Passport plugin for Mongoose         |
| `cloudinary`                | Image storage                        |
| `multer`                    | Middleware for handling file uploads |
| `multer-storage-cloudinary` | Cloudinary storage for multer        |
| `joi`                       | Data validation                      |
| `mapbox`                    | Mapping functionality                |
| `nodemon`                   | Development tool                     |

---

## 🚀 Getting Started

Follow these steps to set up the project in your local environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/Jenil-Desai/Wander-lust.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables by creating `.env` file at root of project and add following :
   ```env
   MONGO_URL=your_mongodb_url
   secret=secret_string
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOEKN=your_mapbox_public_token
   ```
4. Run the web application:
   ```bash
   nodemon app.js
   ```

---

## ⚙️ Setup

1. Go to the `init` folder.
2. Run:
   ```bash
   node index.js
   ```
   You should see "Data Was Initialized".
3. Access the application at `localhost:8080`.

---

## 🎯 Features

Explore the unique features available in this application:

- **Create Listing**
- **View Listings**
- **Edit Listing**
- **Delete Listing**
- **User Signup and Login**
- **Add Review**
- **Delete Review**
- **Map View**
- **Filter Listings**
- **Search Listings**
- **Toggle Tax**
- **View Owners**
- **Mobile Optimization**

---

## 🔗 Demo & Screenshots

- [Live](https://wanderlust-929z.onrender.com)
- The project will take some time to load considering that it is hosted on the free tier. Therefore, maintain patient.

| Mockup                              | Home Page                                 | New Listing Page                                       | Edit Listing                                        | Sign Up Page                               | Log In Page                              |
| ----------------------------------- | ----------------------------------------- | ------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| ![Mockup](./screenshots/Mockup.png) | ![Home Page](./screenshots/HomePage.jpeg) | ![New Listing Page](./screenshots/NewListingPage.jpeg) | ![Edit Listing](./screenshots/EditListingPage.jpeg) | ![Sign Up Page](./screenshots/SignUp.jpeg) | ![Log In Page](./screenshots/LogIn.jpeg) |

---

## 🙏 Acknowledgments

We’d like to thank the following contributors and resources:

- **[Apna College's Delta 3.0 Course](https://www.apnacollege.in/)** - Course resource.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

---

### Enjoy exploring and contributing to Wanderlust!
