'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const formatUser = function (userData) {
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;

  for (let key of Object.keys(user)) {
    console.log(`${key}:${user[key]}`);
  }
};

formatUser(user);
