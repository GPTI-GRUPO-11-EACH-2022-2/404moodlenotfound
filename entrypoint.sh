#! /bin/bash

WORKDIR=$(pwd)
cd $WORKDIR/server && npm install && npm run dev &
cd $WORKDIR/client && npm install && npm start
