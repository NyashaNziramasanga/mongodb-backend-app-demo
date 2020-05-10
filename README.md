<div align="center">
    <h1> Mongo DB backend demo </h1>
</div>

Simple MongoDB, Express.js and Node.js app for [presentation demo](https://speakerdeck.com/nyashanziramasanga/nosql-document-stores) on NoSQL datastore database technology

![mongoDb-demo.gif](images/mongoDb-demo.gif)

## Getting Started

1. Clone repo

2. Run :

```bash
# install dependencies
$ npm i

# Start node server
$ npm start
```

3. In the `config` folder add a file `config.env` and add the following:

```javascript
PORT = 8000

MONGO_URI=
```

Create a db on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and insert the MongoDB URI to the `config.env` file

4. Using postman POST/GET from the endpoint `http://localhost:8000/students`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Built With

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_australia_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&gclid=Cj0KCQjwncT1BRDhARIsAOQF9Lmu4IphD_Hb2cF6snFD1U0QegaKY1_vYdvSYD9Et9iE5puf7KsUa9oaAjGuEALw_wcB)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
