const { MongoClient } = require("mongodb")

const jjj = async () => {
  const URI = "mongodb+srv://m220-user:m220-pass@m220-test.mongodb.net/test"
  const testClient = await MongoClient.connect(URI, {
    authSource: "admin",
    connectTimeoutMS: 50,
    retryWrites: true,
    useNewUrlParser: true,
  })

  console.log("====================================")
  testClient
    .catch(e => console.log(e))
    .then(e => console.log("================================", e))
  console.log("====================================")
}

jjj()
