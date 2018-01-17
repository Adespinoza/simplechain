# Simple Blockchain Javascript 

## Overview 
My current attempt at understanding the basics of Blockchain, walking through a 200 code line guide [From Naive Chain by Lauri Hartikka](https://medium.com/@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54).

Definitely give his work a look! I appreciate the time he put into his guide as it was really helpful in starting the learning process. 

The original repository can be found [here](https://github.com/lhartikk/naivechain).

# Installation 

### Quick start
(set up two connected nodes and mine 1 block)
```
npm install
HTTP_PORT=3001 P2P_PORT=6001 npm start
HTTP_PORT=3002 P2P_PORT=6002 PEERS=ws://localhost:6001 npm start
curl -H "Content-type:application/json" --data '{"data" : "Some data to the first block"}' http://localhost:3001/mineBlock
```

### Quick start with Docker
(set up three connected nodes and mine a block)
###
```sh
docker-compose up
curl -H "Content-type:application/json" --data '{"data" : "Some data to the first block"}' http://localhost:3001/mineBlock
```

### HTTP API
##### Get blockchain
```
curl http://localhost:3001/blocks
```
##### Create block
```
curl -H "Content-type:application/json" --data '{"data" : "Some data to the first block"}' http://localhost:3001/mineBlock
``` 
##### Add peer
```
curl -H "Content-type:application/json" --data '{"peer" : "ws://localhost:6001"}' http://localhost:3001/addPeer
```
#### Query connected peers
```
curl http://localhost:3001/peers
```


