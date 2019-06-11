pragma solidity 0.5.1.;

contract ServiceSmartContract {
    address payable provider;
    uint256 value;
    
    service [] public listOfSells;
    
    struct service {
        uint256 contractor;
        uint256 dueDate;
        uint256 valueOfBill;
        uint256 dateOfBill;
        bool servicePayed;
    }
    
    constructor (address payable _providerWallet) public {
        provider = _providerWallet;   
    }
    
    function registrerService(uint256 _contractor, uint256 _dueDate, uint256 _valueOfBill) public {
        require (msg.sender == provider);
        listOfSells.push(service(_contractor, _dueDate, _valueOfBill, 0, false));
    }
    
    function payService(uint256 serviceId) public payable {
        service memory servicePay = listOfSells[serviceId];
        servicePay.dateOfBill == now;
        servicePay.servicePayed == true;
        value += msg.value;
    }
    
    function showBill (uint256 serviceId) public view returns (uint256) {
        return listOfSells[serviceId].contractor;
        return listOfSells[serviceId].dueDate;
        return listOfSells[serviceId].valueOfBill;
    }
    
    function showBalance() public view returns(uint256){
        require (msg.sender == provider);
        return value;
    }
    
    function drawSells(uint256 _value) public payable {
        require (msg.sender == provider);
        value -= _value;
        provider.transfer(_value);
    }
}
