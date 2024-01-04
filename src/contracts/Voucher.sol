// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

contract Voucher {

    mapping(address => uint256) private received;

    event FreeVoucher(address sender, uint256 time);

    function receiveVoucher(uint time) public {
        require(block.timestamp > received[msg.sender] + time, "Wait for next time.");

        received[msg.sender] = block.timestamp;

        emit FreeVoucher(msg.sender, block.timestamp);
    }
}
