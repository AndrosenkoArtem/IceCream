(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-modal-open]"),
    openTabletBtn: document.querySelector("[data-buy-tablet]"),
    closeModalBtn: document.querySelector("[data-buy-modal-close]"),
    modal: document.querySelector("[data-buy-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openTabletBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
