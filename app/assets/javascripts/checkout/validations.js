var Validations = function () {
  function isNumber (value) {
    return !isNaN(parseInt(value, 10))
  }

  function holderName (card) {
    return validate(card, 'card_holder_name')
  }

  function cardNumber (card) {
    return validate(card, 'card_number')
  }

  function expirationDate (card) {
    return validate(card, 'card_expiration_date')
  }

  function cardCVV (card) {
    return validate(card, 'card_cvv')
  }

  function validate (card, attribute) {
    return pagarme.validate({
      'card': card.toObject()
    }).card[attribute]
  }

  var creditCard = {
    holderName: holderName,
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    cardCVV: cardCVV
  }

  return {
    isNumber:   isNumber,
    creditCard: creditCard
  }
}
