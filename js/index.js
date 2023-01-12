(() => {
  const menuHeader = document.querySelector(".header-lock");
  console.log("test", menuHeader);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      menuHeader.classList.add("compact");
    } else {
      menuHeader.classList.remove("compact");
    }
  }
})();
