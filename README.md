# Voting system

Alyra course project - phase 3

A small organization has decided, to use a new vote system.  
All voters are known to the organization and are whitelisted using their Ethereum address.   
They can submit new proposals during a proposal registration session and can vote on proposals only during the voting session.  
When the administrator has tallied the votes, the vote is closed.

Few rules:  
✔️ Voting is not secret for users added to the Whitelist.  
✔️ Each voter can see the votes of others.  
✔️ The winner is determined by simple majority.  
✔️ The proposal that gets the most votes wins.  

## Contents
- [Important](#important)
- [How to use this project](#how-to-use-this-project)
- [Resources](#resources)

## Important

- [App demo](https://youtu.be/-qlC1fpG_Ag)
- [Vercel app](https://nextjs-voting-system-mdczrnyz7-wdevblockchain-gmailcom.vercel.app/)
- [Backend code base - Smart Contracts, Tests, Deployment ...](https://github.com/waymaiker/dapps-voting-system/blob/master/README.md#need-to-deploy-the-contract-on-goerli)


## How to use this project
This project will require that you have already installed
* Yarn
* Node
* Git

If you are familiar with git and the terminal, here are few steps to follow

### Clone the project
```shell
git clone https://github.com/waymaiker/voting-system.git
```

### Install libraries
```shell
cd nextjs-voting-system
yarn install
```
### commands next
```shell
# Start the Client on localhost:3000/
yarn dev
```

## Resources

* https://chakra-ui.com/
* https://nextjs.org/
* https://vercel.com/home
