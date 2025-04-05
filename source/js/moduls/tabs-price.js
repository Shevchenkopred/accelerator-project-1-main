const buttonTabs = document.querySelectorAll('.price__button-tabs');
const tabs = document.querySelectorAll('.price__tab');

const showTab = (evt) => {
  const currentButton = evt.target;
  const buttonId = currentButton.getAttribute('data-tab');
  const currentTab = document.querySelector(buttonId);

  if (!currentTab.classList.contains('price__tab--active')) {
    buttonTabs.forEach((button) => {
      button.classList.remove('price__button-tabs--active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('price__tab--active');
    });

    currentButton.classList.add('price__button-tabs--active');
    currentTab.classList.add('price__tab--active');
  }
};

buttonTabs.forEach((button) => {
  button.addEventListener('click', showTab);
});
