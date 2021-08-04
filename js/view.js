$("body").on("keyup", (e) => {
  if (e.key === "Escape") {
    location.href = "/";
  }
});

$("#custom-styles").html(localStorage.getItem("css-text"));
