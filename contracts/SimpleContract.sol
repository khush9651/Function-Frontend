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
