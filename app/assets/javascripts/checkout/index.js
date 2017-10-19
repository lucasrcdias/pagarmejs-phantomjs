//= require checkout/validations
//= require checkout/credit-card

var validations = new Validations()
var creditCard  = new CreditCard()

creditCard.setHolderName('JOAO DA SILVA')
creditCard.setNumber('4111 1111 1111 1111')
creditCard.setMonth('08')
creditCard.setYear('18')
creditCard.setCVV('737')

console.log("Holder name: "     + validations.creditCard.holderName(creditCard))
console.log("Card Number: "     + validations.creditCard.cardNumber(creditCard))
console.log("Expiration date: " + validations.creditCard.expirationDate(creditCard))
console.log("Card CVV: "        + validations.creditCard.cardCVV(creditCard))

pagarme.client.connect({ encryption_key: 'ek_test_KB6COYzyobP4CZFQQg6ZAGOuGnarwK' })
  .then(function (client) {
    return client.security.encrypt(creditCard.toObject())
  })
  .then(function (cardHash) {
    console.log("Card hash: " + cardHash)
    alert('Credit card validated and card hash generated successfully! Check your console!')
  })
