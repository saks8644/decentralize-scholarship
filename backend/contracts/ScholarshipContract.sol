// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ScholarshipContract {

    struct Scholarship {
        string name;
        uint256 amount;
        uint256 deadline;
        bool isActive;
    }

    mapping(uint256 => Scholarship) public scholarships;
    uint256 public scholarshipCount;

    mapping(address => bool) public verifiedDIDs;

    address public admin;

    // Events for transparency
    event ScholarshipAdded(uint256 indexed id, string name, uint256 amount, uint256 deadline);
    event ScholarshipUpdated(uint256 indexed id, bool isActive);
    event DIDVerified(address indexed student);
    event OwnershipTransferred(address indexed previousAdmin, address indexed newAdmin);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function addScholarship(string memory _name, uint256 _amount, uint256 _deadline) public onlyAdmin {
        require(bytes(_name).length > 0 && bytes(_name).length <= 100, "Invalid name length");
        require(_amount > 0, "Amount must be greater than zero");
        require(_deadline > block.timestamp, "Deadline must be in the future");

        scholarships[scholarshipCount] = Scholarship({
            name: _name,
            amount: _amount,
            deadline: _deadline,
            isActive: true
        });

        emit ScholarshipAdded(scholarshipCount, _name, _amount, _deadline);

        scholarshipCount++;
    }

    function updateScholarshipStatus(uint256 _id, bool _isActive) public onlyAdmin {
        require(_id < scholarshipCount, "Invalid scholarship ID");

        scholarships[_id].isActive = _isActive;

        emit ScholarshipUpdated(_id, _isActive);
    }

    function verifyDID(address student) public onlyAdmin {
        require(student != address(0), "Invalid student address");
        verifiedDIDs[student] = true;

        emit DIDVerified(student);
    }

    function checkEligibility(address student) public view returns (bool) {
        return verifiedDIDs[student];
    }

    // Ownership Transfer
    function transferOwnership(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "Invalid address");
        emit OwnershipTransferred(admin, newAdmin);
        admin = newAdmin;
    }
}
