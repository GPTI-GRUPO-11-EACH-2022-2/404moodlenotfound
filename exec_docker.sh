#! /bin/bash

docker build . -t miglia 
docker run -d miglia --name miglia  
docker exec -it -d miglia /bin/bash 
