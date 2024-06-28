# function-frontend

This repository showcases a basic Solidity smart contract paired with a frontend interface for interacting with its functions. The contract includes simple counter functionality and integer storage capabilities.

## Project Structure

- **`contracts/`** - Directory containing the Solidity smart contract:
  - `SimpleContract.sol`: The file that implements a counter and integer storage.

- **`frontend/`** - Directory housing the frontend code (HTML and JavaScript):
  - `index.html`: The HTML file for the user interface.
  - `app.js`: The JavaScript file that interacts with the smart contract using ethers.js.

## Features

- **Increment Counter**: Increases the counter by one with each function call.
- **Set Value**: Enables setting a new integer value in the contract.
- **Get Value**: Fetches and displays the current integer value stored in the contract.

## Getting Started

### Prerequisites

- **Node.js**: Make sure [Node.js](https://nodejs.org/) is installed on your system.
- **MetaMask**: Install the [MetaMask](https://metamask.io/) browser extension to interact with the Ethereum network.

### Smart Contract Deployment

1. **Compile and Deploy the Contract**:

   Use Remix, Hardhat, or Truffle to compile and deploy the `SimpleContract.sol` on the Ethereum network of your choice (e.g., Rinkeby, Ropsten).

2. **Get Contract Address and ABI**:

   After deployment, retrieve the contract's address and ABI (Application Binary Interface). The ABI outlines how to interact with the smart contract from the frontend.

### Frontend Setup

1. **Open an IDE (e.g., VSCode)**:
   Ensure you have an integrated development environment like VSCode installed for editing the frontend files.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/function-frontend.git
   cd function-frontend

2. **Now you can just open the live server.**
   Use an extension like "Live Server" in VSCode to run index.html and start interacting with the frontend.

# Solidity Smart Contract (SimpleContract.sol)
'''solidity
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

## LICENSE
This project is licensed under the MIT License - see the LICENSE.md file for details.
