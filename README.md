Example Sails DB Interactions
-----------------------------

First, install [Sails.js](http://sailsjs.com/)
```
sudo npm -g install sails
```

Next, clone the repo
```
git clone https://github.com/ecoker/sails-simple-db.git
```

Jump into the project and install the dependencies:
```
cd sails-simple-db && npm install
```

Launch the site!
```
sails lift
```

Want to see some API responses? Try these:
- [All Customers](http://localhost:1337/customers)
- [One Customer](http://localhost:1337/customers/1)
- [All Customer Homes](http://localhost:1337/customers/1/homes)
- [All Homes](http://localhost:1337/homes)
- [One Home](http://localhost:1337/homes/2)

You can look at how the specific models are set up here:
- [Customer Model](api/models/Customer.js)
- [Home Model](api/models/Home.js)

Assuming you didn't disable it, you have a bunch of *Blueprint Actions* available to you when you create controllers/models in sails. Checkout the [documentation](http://sailsjs.com/documentation/concepts/blueprints/blueprint-actions)!

Take special notice of the syntax that binds these models together:

_src: `api/models/Customer.js`:
```
homes: {
    collection: 'home',
    via: 'customer'
}
```

_src: `api/models/Customer.js`:
```
customer: {
    model: 'Customer'
}
```