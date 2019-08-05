const Entry = require('../models/entryModel');

const logs = [
  {
    captain: 'Jean-Luc Picard',
    stardate: 41153.7,
    ship: 'USS Enterprise (NCC-1701-D)',
    entry:
      "Captain's Log, Stardate 41153.7. Our destination is planet Deneb IV beyond which..."
  },
  {
    captain: 'James T. Kirk',
    stardate: 1513.1,
    ship: 'USS Enterprise (NCC-1701)',
    entry:
      'Our position, orbiting planet M-113. On board the Enterprise, Mr. Spock, temporarily in command...'
  },
  {
    captain: 'Kathryn Janeway',
    stardate: 48315.6,
    ship: 'USS Voyager',
    entry:
      "We've traced the energy pulses from the array to the fifth planet of the neighboring system..."
  },
  {
    captain: 'Kendrick Zhang',
    stardate: 48315.6,
    ship: 'USS Skynet',
    entry: "We're in the CRUD"
  }
];

console.log('file is running ');

const seedDb = () => {
  Entry.insertMany(logs, (err, collection) => {
    if (err) console.log(err);
    console.log('seeded', collection);
  });
};

seedDb();
