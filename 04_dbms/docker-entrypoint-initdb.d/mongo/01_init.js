db.createUser({
    user: "app",
    pwd: "pass",
    roles: [
        {
            role: "readWrite",
            db: "db",
        }
    ]
});

db.createCollection('orders', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['film', 'start', 'duration', 'price', 'created'],
            properties: {
                film: {
                    bsonType: 'object',
                    required: ['title'],
                    properties: {
                        title: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }
    }
});

db.orders.insertOne({
    start: 1335988800000,
    film: {
        title: 'Мстители',
        rating: 9.0,
        genres: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    },
    duration: 137,
    seats: [{row: 11, number: 8}, {row: 11, number: 9}],
    price: 150000,
    created: new Date(1335988800000),
    tags: ['Marvel', 'Тони Старк'],
});

db.orders.insertOne({
    start: Date.now(),
    film: {
        title: 'Карты, деньги, два ствола',
        rating: 8.5,
        cashback: 0.05,
        genres: ['комедия', 'криминал'],
    },
    duration: 160,
    seats: [{row: 1, number: 3}, {row: 1, number: 4}],
    price: 200000,
    created: new Date(),
});

