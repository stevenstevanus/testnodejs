FROM readytalk/nodejs
WORKDIR /app
ADD package.json /app/
RUN npm install
RUN npm install express --save
ADD . /app
EXPOSE 3000
CMD ["node", "/app/hello.js"]
#ENTRYPOINT ["/nodejs/bin/npm", "start"]
