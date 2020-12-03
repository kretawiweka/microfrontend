# base image
FROM node:9.11.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY services/product/package.json /usr/src/app/package.json
COPY services/product/package-lock.json /usr/src/app/package-lock.json

RUN npm install 
#RUN npm install react-router-dom
#RUN npm install react-scripts@1.1.1 -g 

# start app
CMD ["npm", "start"]
