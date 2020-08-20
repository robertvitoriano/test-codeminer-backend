const mongoose = require('mongoose');

const Schema = mongoose.Schema(
    {
        "location": "http://zssn-backend-example.herokuapp.com/api/people/01f48f81-528e-47f6-a0a5-751ab47e6331/properties/3599",
        "quantity": 10,
        "created_at": "2020-08-20T15:14:45.426Z",
        "updated_at": "2020-08-20T15:14:45.426Z",
        "item": {
            "name": "Fiji Water",
            "points": 14
        }
    },
)