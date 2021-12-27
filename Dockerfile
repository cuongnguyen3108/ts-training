FROM node:16

RUN node -v

RUN yarn -v

RUN mkdir /calculator

WORKDIR /calculator

COPY . /calculator

RUN yarn install 

RUN yarn clean

RUN yarn build

# ENTRYPOINT ["node", "build/index"] 
CMD [ "node", "build/server" ]