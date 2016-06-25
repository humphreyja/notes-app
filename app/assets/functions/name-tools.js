module.exports = {

  initials: function (name) {
    var nameArray = name.split(' ')
    var initalChars = []
    initalChars.push(nameArray[0].charAt(0).toUpperCase())
    if (nameArray.length > 1) {
      initalChars.push(nameArray[1].charAt(0).toUpperCase())
    }
    return initalChars.join('')
  }

}
