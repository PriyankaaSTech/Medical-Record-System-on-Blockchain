let provider;
let signer;
let contract;

// Replace with your deployed contract address
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

const abi = [
    "function addRecord(string memory _patientName, string memory _disease, string memory _treatment) public",
    "function getRecord(uint256 _id) public view returns (string memory, string memory, string memory, uint256)"
];

async function init() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, abi, signer);
    } else {
        alert("Install MetaMask!");
    }
}

async function addRecord() {
    const patientName = document.getElementById("patientName").value;
    const disease = document.getElementById("disease").value;
    const treatment = document.getElementById("treatment").value;
    await contract.addRecord(patientName, disease, treatment);
    alert("Record added!");
}

async function getRecord() {
    const id = document.getElementById("recordId").value;
    const result = await contract.getRecord(id);
    document.getElementById("recordResult").innerText = `
        Patient: ${result[0]}, Disease: ${result[1]}, Treatment: ${result[2]}, Date: ${new Date(result[3]*1000)}
    `;
}

init();
