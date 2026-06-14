(function () {
  var invitation = document.querySelector(".invitation");
  var countdown = document.querySelector("[data-countdown]");
  var feedback = document.querySelector("[data-feedback]");
  var lightbox = document.querySelector("[data-lightbox-view]");
  var lightboxImage = document.querySelector("[data-lightbox-image]");
  var lightboxClose = document.querySelector("[data-lightbox-close]");

  function writeStatus(message) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("is-visible", Boolean(message));
    window.clearTimeout(writeStatus.timer);
    writeStatus.timer = window.setTimeout(function () {
      feedback.classList.remove("is-visible");
      feedback.textContent = "";
    }, 2400);
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      writeStatus("복사되었습니다.");
    } catch (error) {
      writeStatus(text);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  document.addEventListener("click", function (event) {
    var copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      var text = copyButton.getAttribute("data-copy");
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(text)
          .then(function () {
            writeStatus("복사되었습니다.");
          })
          .catch(function () {
            fallbackCopy(text);
          });
      } else {
        fallbackCopy(text);
      }
      return;
    }

    var shareButton = event.target.closest("[data-share]");
    if (shareButton) {
      var shareData = {
        title: document.title,
        text: "민준과 서연의 결혼식에 초대합니다.",
        url: window.location.href,
      };

      if (navigator.share) {
        navigator.share(shareData).catch(function () {});
      } else if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(window.location.href).then(function () {
          writeStatus("청첩장 주소가 복사되었습니다.");
        });
      } else {
        fallbackCopy(window.location.href);
      }
      return;
    }

    var galleryItem = event.target.closest("[data-lightbox]");
    if (galleryItem && lightbox && lightboxImage) {
      lightboxImage.src = galleryItem.getAttribute("data-lightbox");
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    }
  });

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLightbox();
  });

  if (invitation && countdown) {
    var weddingDate = new Date(invitation.getAttribute("data-wedding-date"));
    var today = new Date();
    var day = 1000 * 60 * 60 * 24;
    var diff = Math.ceil((weddingDate - today) / day);

    if (Number.isFinite(diff)) {
      if (diff > 0) {
        countdown.textContent = "예식까지 " + diff + "일 남았습니다.";
      } else if (diff === 0) {
        countdown.textContent = "오늘, 저희가 결혼합니다.";
      } else {
        countdown.textContent = "함께해 주셔서 감사합니다.";
      }
    }
  }
})();
