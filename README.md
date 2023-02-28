# School-Help
As pupils, we often have a lot of tasks to complete and not enough time to do them all. To assist with this, School-Help was created with this in mind. Here are some of the things you can do with School-Help:
- Explain topics
- Ask and answer questions
- Get online resources on a topic
- Research a subject
- Generate unique essays based on a subject
- Summarize notes
- Obtain key points to study for exams.

## Getting Started
### Installation
1. Clone the repository to your local machine.
2. Navigate to the cloned directory and run `npm install` to install all the dependencies.
3. Configure MongoDB connection in the `.env` file.
4. Start the API by running `node server.js`

## Usage

### Authentication

#### Registration 
Account registration can be done by sending a request with below params
- Method: POST
- body: username, email, password
- API endpoint: `/api/v0/auth/register`

#### Login
User's with existing account can login to their account by sending a request with the below params
- Method: POST
- body: email, password
- API endpoint: `/api/v0/auth/login`

### Users
Authenticated user's are given privilege to performs some actions guest users can't, some of this actions are
- Update a user profile: `PUT /api/v0/users/:userid`
- Delete a user profile: `DELETE /api/v0/users/:userid`
- Get a user profile: `GET /api/v0/users/:userid`

### Features

## Built With
- [Node.js](https://nodejs.org/) - The JavaScript runtime
- [MongoDB](https://www.mongodb.com/) - The database
- [Express.js](https://expressjs.com/) - The web framework
