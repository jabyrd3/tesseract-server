FROM node:10
WORKDIR /scripts
RUN apt-get update
RUN apt-get install -y tesseract-ocr
ADD package.json /scripts/package.json
COPY index.js /scripts
RUN npm install
CMD ["/scripts/node_modules/.bin/nodemon", "/scripts/index.js"]
