# Submit Jokes Microservice

This microservice allows users to submit new jokes and categorize them by type.

## Features

- Submit a new joke.
- Retrieve available joke categories.

## Technologies

- **Nest.js**: Framework for creating efficient, scalable Node.js applications.
- **MongoDB Atlas**: Cloud-hosted NoSQL database for storing submitted jokes.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Laughfy/submit-jokes-microservice.git
   cd submit-jokes-microservice
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file with the following:
     ```plaintext
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/laughfy
     ```

4. **Start the service**:
   ```bash
   npm run start:dev
   ```

## Endpoints

- **POST /jokes/submit**: Submit a new joke.
- **GET /jokes/types**: Retrieve a list of available joke types.

## Docker Instructions

1. **Build Docker image**:

   ```bash
   docker build -t submit-jokes-service .
   ```

2. **Run Docker container**:
   ```bash
   docker run -p 3002:3002 --env-file .env submit-jokes-service
   ```

## License

Licensed under the MIT License.
