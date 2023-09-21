# Be-Better-Project

Full Be Better final University Project Submission codebase
Project by: **Kai Parsons**

## Core Framework/libraries Used

**Frontend**

- Ionic
- Angular
- Capacitor
- Swiper

**Backend/API**

- Node JS
- Express
- MYSQL

## Setup the project

To get the app running you can follow these steps:

### Backend/API Setup

**Database**

- Create a new MYSQL database
- Import the database from: "Be-Better-API/db/db_export.sql"
- Create a user with full permisions for the database

**API Aplication**

- Run "yarn install"
- Update the "api.js" with the correct database info
- Run "node api.js"

### Frontend setup

## Basic setup

- run "yarn install"
- update endpoint URL to the correct API domain

## Web preview

- run "yarn start"

## Build web distributable files

- run "yarn build"

## Build native apps

- run "yarn build"
- run "yarn cap sync android" or "yarn cap sync ios"
- run "yarn cap open android" or "yarn cap open ios"
- finish build in Android Studio or Xcode
