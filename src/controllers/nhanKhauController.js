import connectDB from '../config/connectDB';

const getAllNhanKhau = async (req, res) => {
  const queryGetAllNhanKhau = `select * from nhankhau`;
  try {
    let result = await connectDB.getDataFromMysql(queryGetAllNhanKhau);
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

const createNhanKhau = async (req, res) => {
  const { HoTen, BiDanh, NgayThangNamSinh, NoiSinh, NguyenQuan, DanToc, NgheNghiep, NoiLamViec, SoCMND_CCDC, NgayCapCCND_CCDC, DiaChiTruocKhiChuyenDen, HoKhauID, QuanHeVoiChuHo } = req.body;
  const queryAddNhanKhau = `INSERT INTO NhanKhau (HoTen, BiDanh, NgayThangNamSinh, NoiSinh, NguyenQuan, DanToc, NgheNghiep, NoiLamViec, SoCMND_CCDC, NgayCapCCND_CCDC, DiaChiTruocKhiChuyenDen, HoKhauID, QuanHeVoiChuHo)
  VALUES('${HoTen}', '${BiDanh}', '${NgayThangNamSinh}', '${NoiSinh}', '${NguyenQuan}', '${DanToc}', '${NgheNghiep}', '${NoiLamViec}', '${SoCMND_CCDC}', '${NgayCapCCND_CCDC}', '${DiaChiTruocKhiChuyenDen}', ${HoKhauID}, '${QuanHeVoiChuHo}')`;
  try {
    let result = await connectDB.getDataFromMysql(queryAddNhanKhau);
    res.status(200).json({
      data: result,
      statusCode: 200,
      message: "Thêm mới Nhân Khẩu Thành Công!"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Error from server!"
    });
    console.log(error);
  }
}

const updateNhanKhau = async (req, res) => {
  const { MaSoDinhDanh, HoTen, BiDanh, NgayThangNamSinh, NoiSinh, NguyenQuan, DanToc, NgheNghiep, NoiLamViec, SoCMND_CCDC, NgayCapCCND_CCDC, DiaChiTruocKhiChuyenDen, HoKhauID, QuanHeVoiChuHo } = req.body;

  const queryUpdateNhanKhau = `UPDATE NhanKhau SET
    HoTen = '${HoTen}',
    BiDanh = '${BiDanh}',
    NgayThangNamSinh = '${NgayThangNamSinh}',
    NoiSinh = '${NoiSinh}',
    NguyenQuan = '${NguyenQuan}',
    DanToc = '${DanToc}',
    NgheNghiep = '${NgheNghiep}',
    NoiLamViec = '${NoiLamViec}',
    SoCMND_CCDC = '${SoCMND_CCDC}',
    NgayCapCCND_CCDC = '${NgayCapCCND_CCDC}',
    DiaChiTruocKhiChuyenDen = '${DiaChiTruocKhiChuyenDen}',
    HoKhauID = ${HoKhauID},
    QuanHeVoiChuHo = '${QuanHeVoiChuHo}'
    WHERE MaSoDinhDanh = ${MaSoDinhDanh}`;

  try {
    let result = await connectDB.getDataFromMysql(queryUpdateNhanKhau);
    res.status(200).json({
      data: result,
      statusCode: 200,
      message: "Cập nhật Nhân Khẩu thành công!"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Lỗi từ phía server!"
    });
    console.log(error);
  }
}

const deleteNhanKhau = async (req, res) => {
  const { MaSoDinhDanh } = req.params;

  const queryDeleteNhanKhau = `DELETE FROM NhanKhau WHERE MaSoDinhDanh = ${MaSoDinhDanh}`;

  try {
    let result = await connectDB.getDataFromMysql(queryDeleteNhanKhau);
    res.status(200).json({
      data: result,
      statusCode: 200,
      message: "Xóa Nhân Khẩu thành công!"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Lỗi từ phía server!"
    });
    console.log(error);
  }
}

module.exports = {
  getAllNhanKhau,
  createNhanKhau,
  updateNhanKhau,
  deleteNhanKhau
};