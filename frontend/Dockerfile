FROM node:15.13.0-alpine
WORKDIR /react
ENV PATH /react/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
CMD ["npm", "run", "build"]