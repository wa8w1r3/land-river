## Directory descriptions

This a mono-repo project structured using `yarn workspace`. The `node_modules` is shared across all apps to improve performance. There are 5 folders in this directory, each for specific part of the system: frontend, backend, chaincode, fabric-network, and mobile.

1. Dashboard is written in React.js, TypeScript, and Tailwind.
2. Backend is written in Node.js and Express.js, connected to Hyperledger through SDK.
3. Chaincode is an analog of smart-contract in Hyperledger Fabric, without chaincode, the network is useless. It's wrote in TypeScript.
4. Fabric-network folder contains fabric network setup. This folder is also the core of the system, without network our backend and frontend does not work.
5. Mobile is written in React Native, TypeScript, and Tailwind-rn.
