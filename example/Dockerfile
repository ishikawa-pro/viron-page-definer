FROM node:9

RUN mkdir -p /example-viron-page-definer
RUN chown -R node:node /example-viron-page-definer
ENV HOME /example-viron-page-definer
USER node
WORKDIR $HOME

# Setup project
ADD package.json /example-viron-page-definer/package.json
#RUN npm install --production --no-progress && npm cache verify
RUN npm install --no-progress && npm cache verify

# Copy source files
ADD shared /example-viron-page-definer/shared
ADD config /example-viron-page-definer/config
ADD app.js /example-viron-page-definer/app.js
ADD controllers /example-viron-page-definer/controllers
ADD fittings /example-viron-page-definer/fittings
ADD swagger /example-viron-page-definer/swagger

EXPOSE 3000
USER root
CMD npm start
