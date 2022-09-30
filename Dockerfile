from node:18.10

RUN mkdir /miglia
WORKDIR /miglia

RUN mkdir /miglia/server
RUN mkdir /miglia/client

COPY ./server/package.json	/miglia/server/package.json
COPY ./server/package-lock.json	/miglia/server/package-lock.json
COPY ./client/package.json /miglia/client/package.json
COPY ./client/package-lock.json /miglia/client/package-lock.json

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
