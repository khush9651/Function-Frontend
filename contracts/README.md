# function-frontend

This project demonstrates a simple Solidity smart contract with a frontend for interacting with its functions. It includes a basic counter and integer storage functionality.

## Project Structure
- **contracts/** - Contains the Solidity smart contract.
  - **SimpleContract.sol**: The smart contract file implementing a counter and integer storage.
- **frontend/** - Contains the frontend code (HTML and JavaScript).
  - **index.html**: The HTML file for the frontend.
  - **app.js**: The JavaScript file for interacting with the smart contract using ethers.js.

## Features
- **Increment Counter**: Increases the counter by one each time the function is called.
- **Set Value**: Allows setting a new integer value in the contract.
- **Get Value**: Retrieves and displays the current integer value stored in the contract.

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MetaMask**: Install the MetaMask browser extension for interacting with the Ethereum network. You can get it from [metamask.io](https://metamask.io/).

### Smart Contract Deployment
#### Compile and Deploy the Contract:
1. **Using Remix**:
   - Open [Remix IDE](https://remix.ethereum.org/).
   - Create a new file named `SimpleContract.sol` and paste the smart contract code into it.
   - Compile the contract using the Solidity compiler.
   - Deploy the contract using the Injected Web3 environment (MetaMask).

2. **Using Hardhat**:
   - Install Hardhat:
     ```sh
     npm install --save-dev hardhat
     ```
   - Initialize a Hardhat project:
     ```sh
     npx hardhat
     ```
   - Create a new file in the `contracts` directory named `SimpleContract.sol` and paste the smart contract code into it.
   - Compile and deploy the contract:
     ```sh
     npx hardhat compile
     npx hardhat run scripts/deploy.js --network <network-name>
     ```

3. **Using Truffle**:
   - Install Truffle:
     ```sh
     npm install -g truffle
     ```
   - Initialize a Truffle project:
     ```sh
     truffle init
     ```
   - Create a new file in the `contracts` directory named `SimpleContract.sol` and paste the smart contract code into it.
   - Compile and deploy the contract:
     ```sh
     truffle compile
     truffle migrate --network <network-name>
     ```

#### Obtain Contract Address and ABI:
After deployment, obtain the deployed contract address and ABI (Application Binary Interface). The ABI defines how to interact with the smart contract from your frontend.

### Frontend Setup
1. **Open VSCode or Any Other IDE**: Ensure you have an integrated development environment (IDE) like VSCode installed on your machine for editing frontend files.

2. **Clone the Repository**:
   ```sh
   git clone https://github.com/YOUR_USERNAME/function-frontend.git
   cd function-frontend
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 private value;

    constructor() {
        value = 0;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function incrementValue() public {
        value += 1;
    }

    function setValue(uint256 _value) public {
        value = _value;
    }
}

# LICENSE
This project is licensed under the MIT License - see the LICENSE.md file for details.
