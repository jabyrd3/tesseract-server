FROM node:10
WORKDIR /scripts
RUN apt-get update
RUN apt-get install -y tesseract-ocr
COPY package.json /scripts
COPY index.js /scripts
RUN npm install
CMD ["/scripts/node_modules/.bin/nodemon", "/scripts/index.js"]
