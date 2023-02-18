// Hàm ẩn hiện các section tương ứng khi chọn button nav link

document.getElementById("btn-nav-b1").onclick = function () {
  var sectionStudentManagerment = document.getElementById(
    "section-student-managerment"
  );
  var sectionElectricityBill = document.getElementById(
    "section-electricity-bill"
  );
  var sectionPersonalIncomeTax = document.getElementById(
    "section-personal-income-tax"
  );
  var sectionNetworkCapBill = document.getElementById(
    "section-network-cap-bill"
  );

  sectionStudentManagerment.classList.remove("d-none");
  sectionElectricityBill.classList.add("d-none");
  sectionPersonalIncomeTax.classList.add("d-none");
  sectionNetworkCapBill.classList.add("d-none");
};

document.getElementById("btn-nav-b2").onclick = function () {
  var sectionStudentManagerment = document.getElementById(
    "section-student-managerment"
  );
  var sectionElectricityBill = document.getElementById(
    "section-electricity-bill"
  );
  var sectionPersonalIncomeTax = document.getElementById(
    "section-personal-income-tax"
  );
  var sectionNetworkCapBill = document.getElementById(
    "section-network-cap-bill"
  );

  sectionStudentManagerment.classList.add("d-none");
  sectionElectricityBill.classList.remove("d-none");
  sectionPersonalIncomeTax.classList.add("d-none");
  sectionNetworkCapBill.classList.add("d-none");
};

document.getElementById("btn-nav-b3").onclick = function () {
  var sectionStudentManagerment = document.getElementById(
    "section-student-managerment"
  );
  var sectionElectricityBill = document.getElementById(
    "section-electricity-bill"
  );
  var sectionPersonalIncomeTax = document.getElementById(
    "section-personal-income-tax"
  );
  var sectionNetworkCapBill = document.getElementById(
    "section-network-cap-bill"
  );

  sectionStudentManagerment.classList.add("d-none");
  sectionElectricityBill.classList.add("d-none");
  sectionPersonalIncomeTax.classList.remove("d-none");
  sectionNetworkCapBill.classList.add("d-none");
};

document.getElementById("btn-nav-b4").onclick = function () {
  var sectionStudentManagerment = document.getElementById(
    "section-student-managerment"
  );
  var sectionElectricityBill = document.getElementById(
    "section-electricity-bill"
  );
  var sectionPersonalIncomeTax = document.getElementById(
    "section-personal-income-tax"
  );
  var sectionNetworkCapBill = document.getElementById(
    "section-network-cap-bill"
  );

  sectionStudentManagerment.classList.add("d-none");
  sectionElectricityBill.classList.add("d-none");
  sectionPersonalIncomeTax.classList.add("d-none");
  sectionNetworkCapBill.classList.remove("d-none");
};
