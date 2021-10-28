$(document).ready(function () {
  const activeIndex = $(".active-tab").index(),
    $contentlis = $(".tabs-content li"),
    $tabslis = $(".tabs li");

  // Show content of active tab on loads
  $contentlis.eq(activeIndex).show();

  $(".tabs").on("click", "li", function (e) {
    const $current = $(e.currentTarget),
      index = $current.index();

    $tabslis.removeClass("active-tab");
    $current.addClass("active-tab");
    $contentlis.hide().eq(index).show();
  });

  const checkboxValues = JSON.parse(localStorage.getItem("checkboxValues")) || {},
    $checkboxes = $("#checkbox-container :checkbox");

  $checkboxes.on("change", function () {
    $checkboxes.each(function () {
      checkboxValues[this.id] = this.checked;
    });

    localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
  });

  // On page load
  $.each(checkboxValues, function (key, value) {
    $("#" + key).prop("checked", value);
  });
});
