// SPDX-License-Identifier: MIT
pragma solidity >=0.6.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply)
        ERC20("StarDucks Capuccino Token", "CAPPU")
    {
        _mint(msg.sender, initialSupply);
    }

    //The constructor function detailed above has 18 decimals by default.
    //If you want to specifically change that number of decimals, you should add the below
    //Function, detailing the decimals in place.
    //function decimals() public view virtual override returns (uint8) {
    //    return 16;
    //}
}