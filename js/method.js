/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 1-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/
/**
 * Tính điểm ưu tiên theo khu vực
 * @param {*} khuVuc khu vực
 * @returns điểm ưu tiên theo khu vực
 */
function tinhDiemUuTienKhuVuc(khuVuc) {
  var diemUuTienKhuVuc = 0;
  switch (khuVuc) {
    case "X":
      diemUuTienKhuVuc += 0;
      break;
    case "A":
      diemUuTienKhuVuc += 2;
      break;
    case "B":
      diemUuTienKhuVuc += 1;
      break;
    case "C":
      diemUuTienKhuVuc += 0.5;
      break;
    default:
  }

  console.log("diemUuTienKhuVuc", diemUuTienKhuVuc);
  return diemUuTienKhuVuc;
}

// bài 1
/**
 * Tính điểm ưu tiên theo đối tượng
 * @param {*} doiTuong đối tượng
 * @returns điểm ưu tiên theo đối tượng
 */
function tinhDiemUuTienDoiTuong(doiTuong) {
  var diemUuTienDoiTuong = 0;
  switch (doiTuong) {
    case "0":
      diemUuTienDoiTuong += 0;
      break;
    case "1":
      diemUuTienDoiTuong += 2.5;
      break;
    case "2":
      diemUuTienDoiTuong += 1.5;
      break;
    case "3":
      diemUuTienDoiTuong += 1;
      break;
    default:
  }
  console.log("diemUuTienDoiTuong", diemUuTienDoiTuong);
  return diemUuTienDoiTuong;
}

/**
 * Tính điểm tổng kết bao gồm tổng điểm ưu tiên và điểm các môn
 * @param {*} khuVuc khu vực ưu tiên
 * @param {*} doiTuong đối tượng ưu tiên
 * @param {*} diemMon1 điểm môn 1
 * @param {*} diemMon2 điểm môn 2
 * @param {*} diemMon3 điểm môn 3
 * @returns điểm tổng kết bao gồm tổng điểm ưu tiên và điểm các môn
 */
function tinhDiemTongKet(khuVuc, doiTuong, diemMon1, diemMon2, diemMon3) {
  var diemTongKet = 0;

  var diemUuTienKhuVuc = tinhDiemUuTienKhuVuc(khuVuc);
  var diemUuTienDoiTuong = tinhDiemUuTienDoiTuong(doiTuong);

  diemTongKet =
    diemUuTienKhuVuc + diemUuTienDoiTuong + diemMon1 + diemMon2 + diemMon3;

  return diemTongKet;
}

/**
 * So sánh điểm tổng kết với điểm chuẩn
 * @param {*} diemTongKet điểm chuẩn
 * @param {*} diemChuan điểm tổng kết bao gồm tổng điểm ưu tiên và điểm các môn
 * @returns Trả về true nếu điểm tổng kết cao hơn hoặc bằng điểm chuẩn
 */
function soSanhDiem(diemTongKet, diemChuan) {
  console.log("diemTongKet", diemTongKet);
  console.log("diemChuan", diemChuan);
  return diemTongKet >= diemChuan;
}

/**
 * Kiểm tra điểm hợp lệ của điểm, điểm nằm trong khoảng từ 0 đến điểm tối đa
 * @param {*} diem là điểm chuẩn hoặc thi từng môn
 * @param {*} diemToiDa tối đa 30 điểm so với điểm chuẩn và tối đa 10 điểm so với điểm thi
 * @returns Trả về true nếu điểm từ 0 đến 30, và ngược lại.
 */
function kiemTraDiemHopLe(diem, diemToiDa) {
  return diem >= 0 && diem <= diemToiDa;
}

/**
 * In ra chuỗi html kết quả thi
 * @param {*} diemChuan điểm chuẩn
 * @param {*} khuVuc khu vực ưu tiên
 * @param {*} doiTuong đối tượng ưu tiên
 * @param {*} diemMon1 điểm môn 1
 * @param {*} diemMon2 điểm môn 2
 * @param {*} diemMon3 điểm môn 3
 * @returns chuỗi kết quả thi
 */

function handleBai1(diemChuan, khuVuc, doiTuong, diemMon1, diemMon2, diemMon3) {
  var htmlOutput = "";
  var diemTongKet = tinhDiemTongKet(
    khuVuc,
    doiTuong,
    diemMon1,
    diemMon2,
    diemMon3
  );

  var soSanhDiemTuyenSinh = soSanhDiem(diemTongKet, diemChuan);

  console.log("diemTongKet", diemTongKet);
  if (
    kiemTraDiemHopLe(diemChuan, 30) &&
    kiemTraDiemHopLe(diemMon1, 10) &&
    kiemTraDiemHopLe(diemMon2, 10) &&
    kiemTraDiemHopLe(diemMon3, 10)
  ) {
    if (soSanhDiemTuyenSinh) {
      htmlOutput = "Bạn đã đậu. Tổng điểm của bạn là: " + diemTongKet;
    } else {
      htmlOutput = "Bạn đã rớt. Tổng điểm của bạn là: " + diemTongKet;
    }
  } else {
    htmlOutput =
      "Vui lòng nhập điểm hợp lệ! Điểm chuẩn có giá trị từ 0 đến 30. Điểm các môn có giá trị từ 0 đến 10.";
  }

  return htmlOutput;
}

/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 2-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/

/**
 * Tính tiền điện
 * @param {*} soDien số điện nhập vào
 * @returns tiền điện tương ứng
 */
function tinhTienDien(soDien) {
  console.log("soDien", soDien);
  var tienDien = 0;

  var bac1 = 500; // 0 - 50
  var bac2 = 650; // 51 - 100
  var bac3 = 850; // 101 - 200
  var bac4 = 1100; // 201 - 350
  var bac5 = 1300; // 351 trở lên

  if (soDien < 0) {
    return 0;
  } else if (soDien <= 50) {
    tienDien = soDien * bac1;
  } else if (soDien <= 100) {
    tienDien = 50 * bac1 + (soDien - 50) * bac2;
  } else if (soDien <= 200) {
    tienDien = 50 * bac1 + 50 * bac2 + (soDien - 100) * bac3;
  } else if (soDien <= 350) {
    tienDien = 50 * bac1 + 50 * bac2 + 100 * bac3 + (soDien - 200) * bac4;
  } else if (soDien > 350) {
    tienDien =
      50 * bac1 + 50 * bac2 + 100 * bac3 + 150 * bac4 + (soDien - 350) * bac5;
  }

  return tienDien;
}

/**
 * In ra hóa đơn tiền điện
 * @param {*} hoVaTenKH Họ và tên khách hàng
 * @param {*} soDien Số điện
 * @returns Chuỗi String hóa đơn tiền điện
 */
function handleBai2(hoVaTenKH, soDien) {
  var htmlOutput = "";
  var tienDien = tinhTienDien(soDien);

  console.log("tienDien", tienDien);

  if (soDien > 0) {
    htmlOutput =
      "Tiền điện của hách hàng " +
      hoVaTenKH +
      " là " +
      tienDien.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  } else {
    htmlOutput =
      "Vui lòng nhập số điện hợp lý! Số điện phải là số dương lớn hơn 0!";
  }

  return htmlOutput;
}

/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 3-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/

function tinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc) {
  return tongThuNhap - 4_000_000 - soNguoiPhuThuoc * 1_600_000;
}

function tinhThueThuNhapCaNhan(thuNhapChiuThue) {
  var thue = 0;

  console.log("thuNhapChiuThue", thuNhapChiuThue);

  var bac1 = 0.05; // 0 - 60_000_000
  var bac2 = 0.1; // 60_000_001 - 120_000_000
  var bac3 = 0.15; // 120_000_001 - 210_000_000
  var bac4 = 0.2; // 210_000_001 - 384_000_000
  var bac5 = 0.25; // 384_000_001 - 624_000_000
  var bac6 = 0.3; // 624_000_000 - 960_000_000
  var bac7 = 0.35; // 960_000_001 trở lên

  if (thuNhapChiuThue < 0) {
    return 0;
  } else if (thuNhapChiuThue <= 60_000_000) {
    thue = thuNhapChiuThue * bac1;
  } else if (thuNhapChiuThue <= 120_000_000) {
    thue = thuNhapChiuThue * bac2;
  } else if (thuNhapChiuThue <= 210_000_000) {
    thue = thuNhapChiuThue * bac3;
  } else if (thuNhapChiuThue <= 384_000_000) {
    thue = thuNhapChiuThue * bac4;
  } else if (thuNhapChiuThue <= 624_000_000) {
    thue = thuNhapChiuThue * bac5;
  } else if (thuNhapChiuThue <= 960_000_000) {
    thue = thuNhapChiuThue * bac6;
  } else if (thuNhapChiuThue > 960_000_000) {
    thue = thuNhapChiuThue * bac7;
  }

  return thue;
}

/**
 * In ra thuế thu nhập cá nhân
 * @param {*} hoTen Họ tên khách hàng
 * @param {*} tongThuNhap Tổng thu nhập
 * @param {*} soNguoiPhuThuoc Số người phụ thuộc
 * @returns Chuỗi string trả về thuế thu nhập cá nhân
 */
function handleBai3(hoTen, tongThuNhap, soNguoiPhuThuoc) {
  var htmlOutput = "";

  if (tongThuNhap > 0 && soNguoiPhuThuoc > 0) {
    var thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc);
    var thue = tinhThueThuNhapCaNhan(thuNhapChiuThue);
    htmlOutput =
      "Tiền thuế thu nhập cá nhân của " +
      hoTen +
      " là " +
      thue.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  } else {
    htmlOutput =
      "Tổng thu nhập và số người phụ thuộc phải là số dương! Vui lòng nhập lại!";
  }

  return htmlOutput;
}

/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*-----------------------Bài 4-----------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/

/**
 * Tính hóa đơn cáp nhà dân
 * @param {*} soKetNoiCaoCap số cáp cao cấp
 * @returns tiền cáp nhà dân
 */
function tinhTienCapNhaDan(soKetNoiCaoCap) {
  var phiXuLyHoaDon = 4.5;
  var phiDichVuCoBan = 20.5;
  return phiXuLyHoaDon + phiDichVuCoBan + 7.5 * soKetNoiCaoCap;
}

/**
 * Tính hóa đơn cáp doanh nghiệp
 * @param {*} soKetNoiCaoCap số cáp kết nối cao cấp
 * @param {*} soKetNoiCoBan số cáp kết nối cơ bản
 * @returns tiền cáp doanh nghiệp
 */
function tinhTienCapDoanhNghiep(soKetNoiCaoCap, soKetNoiCoBan) {
  var phiXuLyHoaDon = 15;
  var tienCapDoanhNghiep = 0;

  if (soKetNoiCoBan <= 10) {
    tienCapDoanhNghiep = phiXuLyHoaDon + 75 + soKetNoiCaoCap * 50;
  } else {
    tienCapDoanhNghiep =
      phiXuLyHoaDon + 75 + (soKetNoiCoBan - 10) * 5 + soKetNoiCaoCap * 50;
  }

  return tienCapDoanhNghiep;
}

/**
 * In hóa đơn tiền cáp
 * @param {*} soKetNoiCaoCap số cáp kết nối cao cấp
 * @param {*} soKetNoiCoBan số cáp kết nối cơ bản
 * @returns Chuỗi string chứa tiền cáp
 */
function handleBai4(loaiKhachHang, maKhachHang, soKenhCaoCap, soKenhCoBan) {
  var htmlOutput = "";

  if (loaiKhachHang === "nhaDan") {
    var tienCapNhaDan = tinhTienCapNhaDan(soKenhCaoCap);

    htmlOutput =
      "Hóa đơn tiền cáp của khách hàng có mã " +
      maKhachHang +
      " là " +
      tienCapNhaDan.toLocaleString("it-IT", {
        style: "currency",
        currency: "USD",
      });
  } else if (loaiKhachHang === "doanhNghiep") {
    var tienCapDoanNghiep = tinhTienCapDoanhNghiep(soKenhCaoCap, soKenhCoBan);

    htmlOutput =
      "Hóa đơn tiền cáp của doanh nghiệp có mã " +
      maKhachHang +
      " là " +
      tienCapDoanNghiep.toLocaleString("it-IT", {
        style: "currency",
        currency: "USD",
      });
  }

  return htmlOutput;
}
