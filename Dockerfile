FROM node:latest

WORKDIR /usr/mynodeapp 

COPY ./ ./

RUN npm install

CMD ["npm", "start"]
