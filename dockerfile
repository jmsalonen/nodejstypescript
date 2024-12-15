FROM node:slim

WORKDIR /app/frontend
COPY frontend/package.json .
RUN npm install
COPY frontend .
RUN npm run build

WORKDIR /app/backend
COPY backend/package.json .
RUN npm install
COPY backend .

WORKDIR /app
COPY package.json .

EXPOSE 5000

CMD ["npm", "run", "production"]
