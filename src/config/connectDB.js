const mysql = require('mysql2');


const connectionMysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cs403anhom3'
});

let connectDB = async () => {
  try {
    await connectionMysql.connect();
    console.log("Connection mysql has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


const getDataFromMysql = (query) => {
  return new Promise((resolve, reject) => {
    connectionMysql.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const putDataToMysql = (query) => {
  return new Promise((resolve, reject) => {
    connectionMysql.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}

const deleteDataFromMysql = (query) => {
  return new Promise((resolve, reject) => {
    connectionMysql.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
};

const postDataToMysql = (query) => {
  return new Promise((resolve, reject) => {
    connectionMysql.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
};




module.exports = {
  getDataFromMysql,
  putDataToMysql,
  postDataToMysql,
  deleteDataFromMysql,
  connectDB
};