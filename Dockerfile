FROM node

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . /app/

RUN git clone https://github.com/vishnubob/wait-for-it.git

EXPOSE 3000

CMD [ "npm", "start" ]

