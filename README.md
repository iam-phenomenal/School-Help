# School-Help
As pupils, we often have a lot of tasks to complete and not enough time to do them all. To assist with this, School-Help was created with this in mind. Here are some of the things you can do with School-Help:
- Explain topics
- Answer random questions
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
Account registration can be done by sending a request with below properties
- Method: POST
- body:
`username:` **[your username]**
`email:` **[your email]**  
`password:` **[your password]**
- API endpoint: `/api/v0/auth/register`

#### Login
User's with existing account can login to their account by sending a request with the below properties
- Method: POST
- body:
`email:` **[your email]**  
`password:` **[your password]**
- API endpoint: `/api/v0/auth/login`

### Users
Authenticated user's are given privilege to performs some actions guest users can't, some of this actions are
- Update a user profile: `PUT /api/v0/users/:userid`
- Delete a user profile: `DELETE /api/v0/users/:userid`
- Get a user profile: `GET /api/v0/users/:userid`

### Features
#### Explain Topic
Lecturers strive to ensure all students can keep up with the material presented in their lectures, but it's not always possible for everyone to understand what is being taught. To help students gain a deeper understanding of the topics, we have developed this feature. To access it, send a POST request to the endpoint with the topic as the request body.

- Method: POST
- Body: `query:` **[topic]**
- API endpoint: `/api/v0/explain`

#### Answer Random Question
Google is everyone's go-to for finding answers, but sometimes it can be hard to find the exact answer you're looking for by reading through multiple search results. That's why we developed this feature to help you get the precise answer you need without the hassle. To access this feature, send a POST request to the endpoint with the properties listed below.

- Method: POST
- Body: `query:` **[question]**
- API endpoint: `/api/v0/question`

#### Get Online Resources On A Topic
We understand the importance of having up-to-date resources to stay informed about a particular topic. To help make your research easier, we have developed this feature. To access it, send a POST request to the endpoint with the topic as the request body. The response will contain a list of online resources related to the topic.
- Method: POST
- Body: `query:` **[topic]**
- API endpoint: `/api/v0/resource`

#### Generate unique essays based on a subject
Generating unique essays on a given subject can be time consuming and challenging. To make this easier, we have developed a feature that allows you to generate unique essays with just ease. To access this feature, send a POST request to the endpoint with the subject as the request body. The response will contain an essay tailored to the given subject.
- Method: POST
- Body: `query:` **[subject]**
- API endpoint: `/api/v0/essay`

#### Obtain Key Points To Study For Exams
Studying for exams can be overwhelming and it's often hard to know which topics to focus on. To help you, we have developed a feature that will generate a list of key points to focus on for a given topic. To access this feature, send a POST request to the endpoint with the topic as the request body. The response will contain a list of key points to study for the given topic.
- Method: POST
- Body: `query:` **[topic]**
- API endpoint: `/api/v0/essay`

#### Summarize notes
Taking notes can be a great way to retain information, but it can be hard to keep track of all the notes you take. To make it easier to review your notes, we have developed a feature that will automatically summarize your notes. To access this feature, send a POST request to the endpoint with the notes as the request body. The response will contain a summary of your notes.
- Method: POST
- body: query
- API endpoint: `/api/v0/note`

## Built With
- [Node.js](https://nodejs.org/) - The JavaScript runtime
- [MongoDB](https://www.mongodb.com/) - The database
- [Express.js](https://expressjs.com/) - The web framework
