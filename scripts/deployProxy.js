const { ethers, upgrades } = require("hardhat");

async function main() {
    const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
    const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
    await proxy.waitForDeployment();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.target
    );

    console.log("Proxy contract address: " + proxy.target);
    console.log("Implementation contract address: " + implementationAddress);
}

main();

// Proxy contract address: 0x8b7555a39610AB01eeb05DD5D09572e0346F621c
// Implementation contract address: 0x7EcF30b872393f3ba06c8EA309da4F694e5B43A9