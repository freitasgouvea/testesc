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
				"type": "address"
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
				"name": "serviceId",
				"type": "uint256"
			}
		],
		"name": "getSell",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listOfSells",
		"outputs": [
			{
				"name": "contractor",
				"type": "address"
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
				"name": "dateOfPayment",
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
    contractAddress = "0x47ff9120B641BA18896d5b04b9291E29D98B9ad3"; 
} else {
    contractAddress = "0x47ff9120B641BA18896d5b04b9291E29D98B9ad3"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
