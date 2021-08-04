const cssTextarea = $("#css-text");
const savedDiv = $("#saved");

$("body").on("keyup", (e) => {
  if (e.key === "Escape") {
    location.href = "/view.html";
  }
});

// Saves to localStorage upon cssTextarea change event
cssTextarea.on("input propertychange", () => {
  localStorage.setItem("css-text", cssTextarea.val());
});

cssTextarea.html(localStorage.getItem("css-text"));
