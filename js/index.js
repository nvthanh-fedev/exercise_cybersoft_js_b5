/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 1-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/

/**
 * Event Function Viết hàm kiểm tra kết quả thi đại học
 */

document.getElementById("b1-btn-ket-qua").onclick = function () {
  var diemChuan = +document.getElementById("b1-diem-chuan").value;
  var khuVuc = document.getElementById("b1-khu-vuc").value;
  var doiTuong = document.getElementById("b1-doi-tuong").value;
  var diemMon1 = +document.getElementById("b1-diem-mon-1").value;
  var diemMon2 = +document.getElementById("b1-diem-mon-2").value;
  var diemMon3 = +document.getElementById("b1-diem-mon-3").value;

  var htmlOutput = handleBai1(
    diemChuan,
    khuVuc,
    doiTuong,
    diemMon1,
    diemMon2,
    diemMon3
  );

  document.getElementById("b1-alert-kq").innerHTML = htmlOutput;
};

/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 2-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/

/**
 * Event Function Viết hàm tính hóa đơn tiền điện
 */

document.getElementById("b2-btn-ket-qua").onclick = function () {
  var hoVaTenKH = document.getElementById("b2-ho-va-ten").value;
  var soDien = +document.getElementById("b2-so-dien").value;

  var htmlOutput = handleBai2(hoVaTenKH, soDien);
  document.getElementById("b2-alert-kq").innerHTML = htmlOutput;
};

/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 3-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/

/**
 * Event Function Viết hàm tính thuế thu nhập cá nhân
 */

document.getElementById("b3-btn-ket-qua").onclick = function () {
  var hoTen = document.getElementById("b3-ho-ten").value;
  var tongThuNhap = +document.getElementById("b3-tong-thu-nhap").value;
  var soNguoiPhuThuoc = +document.getElementById("b3-so-nguoi-phu-thuoc").value;

  var htmlOutput = handleBai3(hoTen, tongThuNhap, soNguoiPhuThuoc);
  document.getElementById("b3-alert-kq").innerHTML = htmlOutput;
};

/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 4-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/

/**
 * Event Function Viết hàm tính hóa đơn cáp
 */

// Hàm ẩn hiện
var b4LoaiKhachHang = document.querySelector("#b4-loai-khach-hang");

b4LoaiKhachHang.addEventListener("change", (event) => {
  const inputCapThuong = document.querySelector("#b4-input-cap-thuong");

  console.log("event.target.value", event.target.value);
  if (event.target.value === "nhaDan") {
    inputCapThuong.classList.add("d-none");
  } else if (event.target.value === "doanhNghiep") {
    inputCapThuong.classList.remove("d-none");
  }
});

document.getElementById("b4-btn-ket-qua").onclick = function () {
  var loaiKhachHang = document.getElementById("b4-loai-khach-hang").value;
  var maKhachHang = +document.getElementById("b4-ma-khach-hang").value;
  var soKenhCaoCap = +document.getElementById("b4-so-kenh-cao-cap").value;
  var soKenhCoBan = +document.getElementById("b4-so-ket-noi").value;

  var htmlOutput = handleBai4(
    loaiKhachHang,
    maKhachHang,
    soKenhCaoCap,
    soKenhCoBan
  );

  document.getElementById("b4-alert-kq").innerHTML = htmlOutput;
};
