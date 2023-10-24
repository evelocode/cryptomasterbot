
FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js", "--server"]