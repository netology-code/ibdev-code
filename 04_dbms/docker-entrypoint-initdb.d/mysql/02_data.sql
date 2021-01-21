INSERT INTO users (id, login, password)
VALUES (1, "vasya", "password");

INSERT INTO users (id, login, password)
VALUES (2, "petya", "password");

INSERT INTO cards (id, user_id, number, balance_in_kopecks)
VALUES (1, 1, "5559000000000001", 1000000),
       (2, 1, "5559000000000002", 1000000);

INSERT INTO card_transactions (source, target, amount_in_kopecks)
VALUES ("5559000000000001", "5559000000000002", 10000);