var CreditCard = function () {
  var self = this

  var card_holder_name,
      card_number,
      card_cvv,
      card_month,
      card_year,
      card_installments

  return {
    getHolderName:     getHolderName,
    setHolderName:     setHolderName,
    getNumber:         getNumber,
    setNumber:         setNumber,
    getCVV:            getCVV,
    setCVV:            setCVV,
    getMonth:          getMonth,
    setMonth:          setMonth,
    getYear:           getYear,
    setYear:           setYear,
    getExpirationDate: getExpirationDate,
    getInstallments:   getInstallments,
    setInstallments:   setInstallments,
    toObject:          toObject
  }

  function getHolderName () {
    return self.card_holder_name
  }

  function setHolderName (name) {
    self.card_holder_name = name
  }

  function getNumber () {
    return self.card_number || ''
  }

  function setNumber (number) {
    self.card_number = number
  }

  function getCVV () {
    return self.card_cvv
  }

  function setCVV (cvv) {
    self.card_cvv = cvv
  }

  function getMonth () {
    return self.card_month
  }

  function setMonth (month) {
    self.card_month = month
  }

  function getYear () {
    return self.card_year
  }

  function setYear (year) {
    self.card_year = year
  }

  function getExpirationDate () {
    if (!self.card_month || !self.card_year) return ''

    return numberWithTwoDigits(self.card_month) + '/' + numberWithTwoDigits(self.card_year)
  }

  function getInstallments () {
    return self.card_installments
  }

  function setInstallments (installments) {
    self.card_installments = installments
  }

  function numberWithTwoDigits(value) {
    return ('0' + value).slice(-2)
  }

  function toObject () {
    return {
      card_cvv:             self.card_cvv,
      card_number:          self.card_number,
      card_holder_name:     self.card_holder_name,
      card_expiration_date: getExpirationDate()
    }
  }
}
