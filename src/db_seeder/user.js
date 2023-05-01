const { ObjectId } = require('bson');

function getBaseUser() {
  return [
    {
      _id: new ObjectId(),
      userId: 'AUTH0-ID_0',
      name: 'David',
      lastname: 'Pizarro',
      nickname: 'dtpf',
      email: 'david@david.com',
      dateOfBirth: '1988-05-01T09:08:38.935+00:00',
      country:'Spain',
      language: 'es',
    },
    {
      _id: new ObjectId(),
      userId: 'AUTH0-ID_1',
      name: 'Joe',
      lastname: 'Joy',
      nickname: 'joejoy',
      email: 'joe@joe.com',
      dateOfBirth: '1998-05-01T09:08:38.935+00:00',
      country:'Holland',
      language: 'es',
    }
  ]
}

module.exports = {
  getBaseUser
}