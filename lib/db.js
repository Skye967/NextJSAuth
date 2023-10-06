import { MongoClient } from 'mongodb'

import React from 'react'

async function connectToDatabase() {

    const client = await MongoClient.connect(
       'mongodb+srv://user:575Password!@cluster0.0x70j2l.mongodb.net/auth-demo?retryWrites=true&w=majority'
    );

    return client;
}

export default connectToDatabase
