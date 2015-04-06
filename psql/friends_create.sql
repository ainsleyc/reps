
create extension "uuid-ossp";

DROP TABLE friends;
DROP TABLE users;

CREATE TABLE users (
  id uuid PRIMARY KEY default uuid_generate_v4(),
  first VARCHAR(30),
  last VARCHAR(30),
  age INTEGER,
  address VARCHAR(100),
  city VARCHAR(30),
  state VARCHAR(10)
);
CREATE INDEX ON users USING hash (state);

CREATE TABLE friends (
  id uuid PRIMARY KEY default uuid_generate_v4(),
  user_id uuid references users(id),
  friend_id uuid references users(id)
);

INSERT INTO users VALUES 
  (DEFAULT, 'Ainsley', 'Chong', 32, '608 El Mercado Ave', 'Monterey Park', 'CA'),
  (DEFAULT, 'Dude', 'Blah', 231, null, null, 'AZ'),
  (DEFAULT, 'Some', 'Guy', null, null, null, null),
  (DEFAULT, 'Nice', 'Guy', 32, null, 'Ney York', 'NY'),
  (DEFAULT, 'Blah', 'Blah', 90, '444 Street Place', 'Monterey Park', 'NY'),
  (DEFAULT, 'Derp', 'Derp', 2, null, '444 Other Street', 'AZ'),
  (DEFAULT, 'Jennifer', 'Ta', 31, '608 El Mercado Ave', 'Monterey Park', 'CA');

INSERT INTO friends VALUES
  (DEFAULT, 
    (SELECT id from users WHERE first='Ainsley'),
    (SELECT id from users WHERE first='Jennifer')
  ),
  (DEFAULT, 
    (SELECT id from users WHERE first='Jennifer'),
    (SELECT id from users WHERE first='Ainsley')
  ),
  (DEFAULT, 
    (SELECT id from users WHERE first='Ainsley'),
    (SELECT id from users WHERE first='Dude')
  ),
  (DEFAULT, 
    (SELECT id from users WHERE first='Dude'),
    (SELECT id from users WHERE first='Ainsley')
  ),
  (DEFAULT, 
    (SELECT id from users WHERE first='Ainsley'),
    (SELECT id from users WHERE first='Blah')
  ),
  (DEFAULT, 
    (SELECT id from users WHERE first='Jennifer'),
    (SELECT id from users WHERE first='Dude')
  );

