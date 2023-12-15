import connectDB from '../config/connectDB';

const getAllHoKhau = async (req, res) => {
  const queryGetAllHoKhau= `select * from hokhau`;
  try {
     let result = await connectDB.getDataFromMysql(queryGetAllHoKhau);
     res.status(200).json({
      data: result,
      statusCode: 200,
      message: "OK"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Error from server!"
    });
    console.log(error);
  }
}


module.exports = {
  getAllHoKhau,
};