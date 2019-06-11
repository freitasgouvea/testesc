/* This is for example purposes */
const contractABI = [
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
		"inputs": [
			{
				"name": "_providerWallet",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
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
	}
]

if (network === "4") {
    contractAddress = "0x96e74a7cabd607a878ab73a8D8c63d1874EA3d18"; 
} else {
    contractAddress = "0x96e74a7cabd607a878ab73a8D8c63d1874EA3d18"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
