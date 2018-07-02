const Test = artifacts.require("Test");

contract("Test", accounts => {
  it("Should make first account an owner", async () => {
    let instance = await Test.deployed();
    let owner = await instance.owner();
    assert.equal(owner, accounts[0]);
  });
});
