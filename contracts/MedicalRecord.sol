// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecord {

    struct Record {
        string patientName;
        string disease;
        string treatment;
        uint256 recordDate;
    }

    mapping(uint256 => Record) public records;
    uint256 public recordCount;

    // Add a new medical record
    function addRecord(string memory _patientName, string memory _disease, string memory _treatment) public {
        recordCount++;
        records[recordCount] = Record(_patientName, _disease, _treatment, block.timestamp);
    }

    // Get a medical record by ID
    function getRecord(uint256 _id) public view returns (string memory, string memory, string memory, uint256) {
        Record memory r = records[_id];
        return (r.patientName, r.disease, r.treatment, r.recordDate);
    }
}
