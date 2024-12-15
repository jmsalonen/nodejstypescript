# Description

Typescript template with React frontend and Node backend.

## Development

### Frontend

install frontend packages

```bash
cd frontend
npm i
```

### Backend

install backend packages and create .env file

```bash
cd backend
npm i
cat example.env > .env
```

### Concurrently

In the project root, install npm concurrently and run frontend and backend simultaneusly

```bash
npm i
npm start
```

### Production 

Build frontend and run backend in production mode

```bash
npm run production
```

### Docker

```bash
docker build -t nodejstypescript .
docker run -d -p 5000:5000 nodejstypescript
```
