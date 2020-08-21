Backend Test  Codeminer


In order to run this project, you should first add a mongodb connection string into the  files .env and test.env , which can be found inside the 'config' folder. After that you should run:
### `yarn ` or `npm i`

The project runs with the command
### `yarn dev ` or `npm run dev`

After the project is running you  test the application by running:
### `yarn test ` in other terminal


### `port 4000`

Open  http://localhost:4000 to run the API



### ENDPOINTS

### POST '/survivors', you register a new survivor
name:STRING,
age:NUMBER,
gender:STRING,
lastLocation:STRING, (`format: longitude, latitude. Ex: 65.0,46.6 ` )

ak:NUMBER,
aid:NUMBER,
soup:NUMBER,
water:NUMBER

When item is not desired, its value must be set to 0


### PATCH '/{survivor_id}/update' you can update the location of a specific survivor 
information to send:
location: STRING (`format: longitude, latitude. Ex: 65.0,46.6 ` )

### POST '/reported/{survivor_id}', you can flag a survivor as infected  the  through the id. When five rerports have taken place, user is infected
information to send: survivor_id (params)
user id must be set in headers as `user`

### POST '/survivor/{survivor_id}/trade' you this route, survivors can trade items between themselves
user id must be set in headers as `user`

information to send:
akQuantityToPay:NUMBER
aidQuantityToPay: NUMBER
soupQuantityToPay: NUMBER 
waterQuantityToPay: NUMBER

akQuantityToPick:NUMBER
aidQuantityToPick: NUMBER
soupQuantityToPick: NUMBER 
waterQuantityToPick: NUMBER

When item is not desired, its value must be set to 0

### GET '/properties/{survivor_id}', you can get information about the items each survivor carries by the _id
information to send: survivor_id (params)



### GET '/survivors/{survivor_id}, you can get all available information about a user'
information to send: survivor_id (params)

### GET '/survivors', survivorController' lists all registered survivors

### GET '/reports/infected' , you can get the percentage of  infected survivors

### GET '/reports/noninfected'' , you can get the percentage of  noninfected survivors

### GET '/reports/items', you can get the average quantity of each item per survivor

### GET '/reports/items', you can get the average quantity of each item per survivor