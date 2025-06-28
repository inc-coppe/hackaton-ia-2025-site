#!/bin/bash

git pull origin main

docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d

docker image prune -f
