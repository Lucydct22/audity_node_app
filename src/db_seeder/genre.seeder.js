const { ObjectId } = require('bson');

function getBaseGenre() {
  return [
     {
      _id: new ObjectId(),
      name: "Blues",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212593/development/genreImage/nxpucpt0kndghjyihntq.webp'
    },
    {
      _id: new ObjectId(),
      name: "Rock",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212651/development/genreImage/qqesppk1ukln1gub8sz0.webp'
    },
    {
      _id: new ObjectId(),
      name: "Funk",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212797/development/genreImage/rjyj9bvspu4wwsvzkux7.webp'
    },
    {
      _id: new ObjectId(),
      name: "Folk",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212824/development/genreImage/hzpa8q619nj7vy4ci6zz.webp'
    },
    {
      _id: new ObjectId(),
      name: "Tango",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212874/development/genreImage/wwushlkqtojzn5r81vau.webp'
    },
    {
      _id: new ObjectId(),
      name: "Indie",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212898/development/genreImage/etocf9hq8h2rmjh5nrpj.webp'
    },
    {
      _id: new ObjectId(),
      name: "Metal",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212929/development/genreImage/kwea1aggvizi0eipg670.webp'
    },
    {
      _id: new ObjectId(),
      name: "Classic",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683212961/development/genreImage/pttyeh8o1dctq21yiu21.webp'
    },
    {
      _id: new ObjectId(),
      name: "Country",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213000/development/genreImage/idqvkny3bzk9k5zapz0a.webp'
    },
    {
      _id: new ObjectId(),
      name: "Electronic",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213094/development/genreImage/fifasnf3enxwfhw8hppn.webp'
    },
    {
      _id: new ObjectId(),
      name: "Lounge",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213489/development/genreImage/k9q3jtkc86oj2j99greb.webp'
    },
    {
      _id: new ObjectId(),
      name: "Grunge",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213515/development/genreImage/ejptgi7nhahgerhsddwq.webp'
    },
    {
      _id: new ObjectId(),
      name: "Pop",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213561/development/genreImage/ppdlyd4718ihvl98fehs.webp'
    },
    {
      _id: new ObjectId(),
      name: "Soul",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213584/development/genreImage/dp8ln9gr7ficki20eej6.webp'
    },
    {
      _id: new ObjectId(),
      name: "Jazz",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213617/development/genreImage/qeqbssax132l233i580e.webp'
    },
    {
      _id: new ObjectId(),
      name: "Urbano latino",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213644/development/genreImage/sqbbphkc6kxndaxzgcxe.webp'
    },
    {
      _id: new ObjectId(),
      name: "HipHop",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213674/development/genreImage/dbxwueper1ki6quvfg7c.webp'
    },
    {
      _id: new ObjectId(),
      name: "Reggae",
      imageUrl: 'https://res.cloudinary.com/di3kpwpjx/image/upload/v1683213696/development/genreImage/x63svjbumnc5stvu4eto.webp'
    }
  ]
}

module.exports = {
  getBaseGenre
}