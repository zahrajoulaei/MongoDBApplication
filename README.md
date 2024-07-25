# Jewelry Shop Application

This is a simple web application for managing a jewelry shop, built using Node.js, Express, and MongoDB. It allows users to manage jewelry items, users, and comments. The application supports CRUD operations and provides a clean user interface to interact with the data.

## Features

- Add, update, delete, and list jewelry items.
- Add, update, delete, and list users.
- Add, update, delete, and list comments.
- Clean and intuitive user interface.
- Built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1.  **Clone the repository:**

    ```
    git clone https://github.com/zahrajoulaei/MongoDBApplication
    cd MongoDBApplication
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```

3.  **Set up environment variables:**

    Create a .env file in the root of the project and add your MongoDB Atlas connection string and the port number:

    ```
    ATLAS_URI=your_mongodb_atlas_connection_string
    PORT=3000
    ```

4.  **Run the application:**

    ```
    nodemon index.js
    ```

    The application will start running on http://localhost:3000.

## Usage

To use the application, open your web browser and navigate to http://localhost:3000.

## Adding Initial Data

To test the application, you need to add some initial data to your MongoDB database.

**_Follow these steps:_**

1. Open MongoDB Atlas:
   Log in to your MongoDB Atlas account and navigate to your cluster.
2. Create a new database:
   Create a new database called jewelryShop.
3. Create collections:
   Create the following collections:
-   jewelry
-  users
-  comments 
4. Insert initial data:
Insert some initial data into the collections. You can use the following sample data:

Jewelry Collection:
```bash
[
  {
    "name": "Gold Ring",
    "category": "Rings",
    "price": 250
  },
  {
    "name": "Silver Necklace",
    "category": "Necklaces",
    "price": 150
  },
  {
    "name": "Diamond Bracelet",
    "category": "Bracelets",
    "price": 500
  },
  {
    "name": "Platinum Earrings",
    "category": "Earrings",
    "price": 300
  },
  {
    "name": "Ruby Pendant",
    "category": "Pendants",
    "price": 400
  },
  {
    "name": "Sapphire Ring",
    "category": "Rings",
    "price": 350
  },
  {
    "name": "Emerald Necklace",
    "category": "Necklaces",
    "price": 600
  },
  {
    "name": "Gold Bracelet",
    "category": "Bracelets",
    "price": 200
  },
  {
    "name": "Silver Earrings",
    "category": "Earrings",
    "price": 100
  },
  {
    "name": "Diamond Pendant",
    "category": "Pendants",
    "price": 700
  }
]
```
Users Collection:

```
[
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  },
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  },
  {
    "name": "Bob Brown",
    "email": "bob.brown@example.com"
  },
  {
    "name": "Charlie Davis",
    "email": "charlie.davis@example.com"
  },
  {
    "name": "Daisy Evans",
    "email": "daisy.evans@example.com"
  },
  {
    "name": "Eve Ford",
    "email": "eve.ford@example.com"
  },
  {
    "name": "Frank Green",
    "email": "frank.green@example.com"
  },
  {
    "name": "Grace Hall",
    "email": "grace.hall@example.com"
  },
  {
    "name": "Hank Ives",
    "email": "hank.ives@example.com"
  }
]
```

comments collection:

```
[
  {
    "userId": "ObjectId_of_John_Doe",
    "text": "Great jewelry!"
  },
  {
    "userId": "ObjectId_of_Jane_Smith",
    "text": "Love this store!"
  },
  {
    "userId": "ObjectId_of_Alice_Johnson",
    "text": "Amazing quality!"
  },
  {
    "userId": "ObjectId_of_Bob_Brown",
    "text": "Fantastic prices!"
  },
  {
    "userId": "ObjectId_of_Charlie_Davis",
    "text": "Fast shipping!"
  },
  {
    "userId": "ObjectId_of_Daisy_Evans",
    "text": "Excellent customer service!"
  },
  {
    "userId": "ObjectId_of_Eve_Ford",
    "text": "Beautiful designs!"
  },
  {
    "userId": "ObjectId_of_Frank_Green",
    "text": "High-quality products!"
  },
  {
    "userId": "ObjectId_of_Grace_Hall",
    "text": "Will buy again!"
  },
  {
    "userId": "ObjectId_of_Hank_Ives",
    "text": "Highly recommend!"
  }
]
```


## API Endpoints

Jewelry

	•	GET /jewelry - Get all jewelry items.
	•	GET /jewelry/:id - Get a specific jewelry item by ID.
	•	POST /jewelry - Add a new jewelry item.
	•	PATCH /jewelry/:id - Update a specific jewelry item by ID.
	•	DELETE /jewelry/:id - Delete a specific jewelry item by ID.

Users

	•	GET /users - Get all users.
	•	GET /users/:id - Get a specific user by ID.
	•	POST /users - Add a new user.
	•	PATCH /users/:id - Update a specific user by ID.
	•	DELETE /users/:id - Delete a specific user by ID.

Comments

	•	GET /comments - Get all comments.
	•	GET /comments/:id - Get a specific comment by ID.
	•	POST /comments - Add a new comment.
	•	PATCH /comments/:id - Update a specific comment by ID.
	•	DELETE /comments/:id - Delete a specific comment by ID.



## Contact

For any inquiries, please contact me at zahrajoulaei@gmail.com