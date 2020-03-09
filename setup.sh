#!/bin/bash

cd app/ && yarn && cd ..
cd backend/ && yarn && cd ..

yarn global add foreman