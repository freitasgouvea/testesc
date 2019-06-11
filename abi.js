/* This is for example purposes */
const contractABI = [
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "listOfSells",
			"outputs": [
				{
					"name": "contractor",
					"type": "uint256"
				},
				{
					"name": "dueDate",
					"type": "uint256"
				},
				{
					"name": "valueOfBill",
					"type": "uint256"
				},
				{
					"name": "dateOfBill",
					"type": "uint256"
				},
				{
					"name": "servicePayed",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_contractor",
					"type": "uint256"
				},
				{
					"name": "_dueDate",
					"type": "uint256"
				},
				{
					"name": "_valueOfBill",
					"type": "uint256"
				}
			],
			"name": "registrerService",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "showBalance",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "serviceId",
					"type": "uint256"
				}
			],
			"name": "payService",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "serviceId",
					"type": "uint256"
				}
			],
			"name": "showBill",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "drawSells",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "_providerWallet",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		}
	]

if (network === "4") {
    contractAddress = "0x017d72e65e7396465b193b7cf36466C3F2b08759"; 
} else {
    contractAddress = "0x017d72e65e7396465b193b7cf36466C3F2b08759"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
