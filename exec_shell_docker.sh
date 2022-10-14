#! /bin/bash

export PORT=80
docker build . -t miglia 
docker run -p 5000:5000 -p 3000:3000 -d --rm --name miglia miglia
docker exec -it miglia /bin/bash 
export PORT=
