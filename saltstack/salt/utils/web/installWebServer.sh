#!/bin/bash
sudo apt-get update

#Installing Node.js
#Source: https://github.com/nodesource/distributions
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs


#Installing node modules
sudo npm i --save express body-parser path -y
sudo npm install --save mongoose -y
