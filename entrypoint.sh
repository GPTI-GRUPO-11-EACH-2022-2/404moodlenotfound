#! /bin/bash

WORKDIR=$(pwd)
cd $WORKDIR/server && npm run dev 2>&1 > server.log &
cd $WORKDIR/client && npm start --port $PORT 2>&1 > client.log
