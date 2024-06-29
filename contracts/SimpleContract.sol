// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AlternativeContract {
    uint256 private value;

    // Event to log value changes
    event ValueChanged(uint256 newValue);

    constructor() {
        value = 0;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function incrementValue() public {
        value += 1;
        emit ValueChanged(value);
    }

    function decrementValue() public {
        require(value > 0, "Value cannot be less than zero");
        value -= 1;
        emit ValueChanged(value);
    }

    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChanged(value);
    }
}
