FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -s
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .    

EXPOSE 9000
CMD [ "npm", "start" ]

# *** STEP
# docker build -t <your-image-name> .
# docker run -p 9000:3000 -d <your-image-name>