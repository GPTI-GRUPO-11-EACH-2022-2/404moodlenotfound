from node:18.10

RUN mkdir /miglia
WORKDIR /miglia

RUN mkdir /miglia/server
RUN mkdir /miglia/client

COPY ./server/	/miglia/server/
COPY ./client/ /miglia/client/

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 80
EXPOSE 5000
ENTRYPOINT ["entrypoint.sh"]
