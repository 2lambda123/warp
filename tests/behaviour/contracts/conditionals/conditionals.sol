pragma solidity ^0.8.10;

// SPDX-License-Identifier: MIT

contract WARP {
    function simpleScalar(bool choice, uint8 a, uint8 b) pure public returns (uint8) {
        return choice ? a : b;
    }
    
    function returnStr(bool choice) pure public returns (string memory){
        return choice ? "WARP" : "OTHER";
    }
    
    function updateVar(bool choice) pure public returns (uint, uint){
        uint a = 15;
        uint b = 46;
        choice ? a+=5 : b+=4;
        return (a, b);
    }
}
