
// Replace this with your deployed contract address
const contractAddress = "0x440051dF4E4E248D3e80EFE978989Ba0979B6f54";

// ABI of the contract(Replace it with your contract ABI)
[
	{
		"inputs": [],
		"name": "decrementValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "incrementValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "ValueChanged",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

async function getValue() {
    try {
        const value = await contract.getValue();
        document.getElementById("value").innerText = value.toString();
    } catch (error) {
        console.error("Error getting value:", error);
    }
}

async function incrementValue() {
    try {
        const tx = await contract.incrementValue();
        await tx.wait();
        getValue(); 
    } catch (error) {
        console.error("Error incrementing value:", error);
    }
}

async function setValue() {
    const newValue = document.getElementById("newValue").value;
    if (newValue === "") {
        alert("Please enter a value");
        return;
    }

    try {
        const tx = await contract.setValue(newValue);
        await tx.wait();
        getValue(); e
    } catch (error) {
        console.error("Error setting value:", error);
    }
}

window.ethereum.enable().catch(console.error);
