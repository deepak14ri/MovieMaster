// employees.js
var faker = require('faker')
function generateMovies () {
  var movieslist = []
  for (var id = 0; id < 50; id++) {
    var name = faker.name.name()
    var ratings = faker.name.ratings()
    var release = faker.internet.release()
    movieslist.push({
      "id": id,
      "name": name,
      "ratings": ratings,
      "release": release
    })
  }
  return { "movieslist": movieslist }
}
module.exports = generateMovies