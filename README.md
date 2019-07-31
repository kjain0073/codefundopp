
# Reducing Impact of Fake News in elections using  Blockchain

## Overview
Digital deceptions distributed in the pre-election stages have a profound effect on election outcomes. Computational propaganda, digitally doctored photos and videos, weaponized social media, and more all can derail the democratic process.

## Proposed Solution

### Publishers Management Protocol

![alt text](https://github.com/kjain0073/codefundopp/blob/master/Publishers%20management%20protocol.png)

**Enroll Smart Contract**: 
- Maintains a mapping of public keys by searching the web through third-party APIs.

**Update Identity Smart Contract**:
- Any registered news publisher can update its identity and is allowed to obtain multiple identities and operate different handles.

**Revoke Identity Smart Contract**: 
- This deals with the termination of existing news publishers either on their own request or if the system has identified a certain news publisher to behave anomalously over a specified period of time.


**Evolvable Reputation Set**:
- The score(initially zero) is allowed to evolve with time if that news entity shares true news or the news posted by the verified media outlets. 


### Smart Contract for News
![alt text](https://github.com/kjain0073/codefundopp/blob/master/smart%20contract%20for%20news.png)
 
**Create news smart contract**
- Publishes the news on the network. 
- Can be invoked by the account(s) of media outlets willing to publish any news by giving their public key and digitally signed news.

**News Instance**
- Created using Publisher, Status, Public Key, Timestamp, News String


### Building The News Blockchain
![alt text](https://github.com/kjain0073/codefundopp/blob/master/building%20the%20news%20blockchain.jpeg)




**Role of Honest Miner Nodes**
- Since there can be malicious nodes in the P2P(Peer-to-Peer) network, the proof-of-authority (PoA) consensus protocol can be used by miner nodes for maintaining the blockchain while proposing a new “news block”. 

**Semantic Similarity**
- Done using tools such as word embeddings (e.g., word2vec) or some advanced ML methods.


## How the Framework is executed?

![alt text](https://github.com/kjain0073/codefundopp/blob/master/framework.JPG)

When a new news publisher requests to join the system, the **enrollment smart contract** will be invoked and will check whether this publisher’s public key is in **existing mapping** or not. Based on the outcome, the publisher will be assigned public and secret key pair along with a status of either verified or unverified publisher and an **initial reputation score** will become a part of an **evolvable reputation set**. During the period an existing publisher can update (Become verified) or revoke its identity (identity of a misbehaving publisher will be revoked automatically)

Whenever a publisher wants to publish, **create news smart contract** will be invoked to facilitate the news publishing and it will put the news along with other required parameters in a block and will broadcast it to a **Peer-to-Peer (P2P) network**.
In a P2P network, the **honest miner nodes** will put this block on the blockchain after identifying it is as a valid block. Once the news block becomes part of the blockchain, news integrity and truthfulness can be verified using **semantic similarity** and **Merkle tree** respectively. Contextual similarity can be computed between words and across documents stamp and news string in a structure and will broadcast the news instance to the P2P network.In the P2P network, the miner nodes will put this block on the blockchain if it is identified as a valid block. Once the news block becomes the part of the blockchain, news integrity and truthfulness can be verified using semantic similarity and Merkle tree respectively.


### Technology  Used :-

- Azure Blockchain
- Third party APIs
- Python
- Tensorflow
- Solidity
