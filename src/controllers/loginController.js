import connectDB  from '../config/connectDB';
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { User_Name, Password } = req.body;
        // Truy vấn để kiểm tra thông tin đăng nhập
        let userQuery = `SELECT *  FROM users WHERE User_Name = '${User_Name}' AND Password = '${Password}'`;
        const user = await connectDB.getDataFromMysql(userQuery);
        const cleanedData = user.map(row => {
            const cleanRow = {};
            for (let key in row) {
              cleanRow[key] = row[key];
            }
            return cleanRow;
          });
        if(cleanedData.length > 0) {
            const access_token = jwt.sign({
                id: cleanedData[0].User_ID,
                Password: cleanedData[0].Password
            },
                process.env.JWT_ACCESS_KEY, {
                expiresIn: "1d"
            })
            const refresh_token = jwt.sign({
                id: cleanedData[0].User_ID,
                Password: cleanedData[0].Password
            },
                process.env.JWT_REFRESH_KEY, {
                expiresIn: "1d"
            })

            const data = {
                access_token,
                refresh_token,
                User_Name: cleanedData[0].User_Name,
                Active: cleanedData[0].Active,
                Email: cleanedData[0].Email,
                User_ID: cleanedData[0].User_ID
            }

            console.log(data);
            return res.status(200).json(data);
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: 500,
            errMessage: 'Error from the server'
        });
    }
};

module.exports = {
    login
}