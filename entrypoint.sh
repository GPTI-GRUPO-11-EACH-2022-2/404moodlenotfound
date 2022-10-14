#! /bin/bash

WORKDIR=$(pwd)
cd $WORKDIR/server && npm install && npm run dev 2>&1 > server.log &
cd $WORKDIR/client && npm install && npm start --port $PORT 2>&1 > client.log
