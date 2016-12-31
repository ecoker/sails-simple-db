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
cd learn-react && npm install
```

Launch the site!
```
sails lift
```

Want to see some API responses? Try these:
[All Customers](http://localhost:1337/customers)
[One Customer](http://localhost:1337/customers/1)
[All Customer Homes](http://localhost:1337/customers/1/homes)
[All Homes](http://localhost:1337/homes)
[One Home](http://localhost:1337/homes/2)

Full CRUD is supported on those endpoints. Take a look at the models for more information:
[Customer Model](api/models/Customer.js)
[Home Model](api/models/Home.js)

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