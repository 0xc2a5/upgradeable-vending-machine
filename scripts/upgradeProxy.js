const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x8b7555a39610AB01eeb05DD5D09572e0346F621c";

async function main() {
    const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        upgraded.target
    );

    console.log("The current contract owner is: " + await upgraded.owner());
    console.log("Implementation contract address: " + implementationAddress);
}

main();

// The current contract owner is: 0x6f4678489cb47DC662d4259836e693A2ddD55BD2
// Implementation contract address: 0x51bb526A7E989398ed1FA4A4E4959afF919B2411