












function detectWeb3 () {
  if ($('#metamask-detecting').hasClass('visible')) {
    $('#metamask-detecting').dimmer('hide')
  }

  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider)
    web3Mode = 'metamask'
    currentAddress = web3js.eth.accounts[0]
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/e0e015244b9e4ca88acc512b81a37502'))
    web3Mode = 'direct'
  }

  var ks = localStorage.getItem('keystore')
  if (ks !== null) {
    keystore = lightwallet.keystore.deserialize(ks)
    $('#unlock-wallet-container').show()
  }

  var contractClass = web3js.eth.contract(abi)
  contract = contractClass.at(contractAddress)

  updateData()
  attachEvents()
  updateTokenInfo()
}
