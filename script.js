document.addEventListener("DOMContentLoaded", function () {
  // Bật Carousel (Banner) chạy tự động
  const myCarouselElement = document.querySelector("#promoCarousel");
  if (myCarouselElement) {
    new bootstrap.Carousel(myCarouselElement, {
      interval: 3000,
      touch: true,
    });
  }

  // Xử lý báo lỗi Form đăng nhập
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;
      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;

      document.getElementById("emailError").classList.add("d-none");
      document.getElementById("pwError").classList.add("d-none");

      if (!email.includes("@")) {
        document.getElementById("emailError").classList.remove("d-none");
        isValid = false;
      }
      if (password.trim() === "") {
        document.getElementById("pwError").classList.remove("d-none");
        isValid = false;
      }
      if (isValid) {
        alert("Đăng nhập thành công!");
        bootstrap.Modal.getInstance(
          document.getElementById("loginModal"),
        ).hide();
      }
    });
  }

  // Lấy dữ liệu đẩy vào Modal chi tiết
  const detailTriggers = document.querySelectorAll(".view-detail");
  detailTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const card = this.closest(".product-card");
      const title = card.querySelector(".product-title").innerText;
      const imgSrc = card.querySelector("img").src;
      const price =
        card.querySelector(".price-whole").innerText +
        " " +
        card.querySelector(".price-symbol").innerText;

      document.getElementById("detailTitle").innerText = title;
      document.getElementById("detailImage").src = imgSrc;
      document.getElementById("detailPrice").innerText = price;
    });
  });
});
