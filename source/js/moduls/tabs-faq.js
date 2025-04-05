const buttonTabs = document.querySelectorAll('.faq__button-tab');
const tabs = document.querySelectorAll('.faq__accardion');

const showTabs = (evt) => {
  const currentButton = evt.target;
  const buttonId = currentButton.getAttribute('data-tab');
  const currentTab = document.querySelector(buttonId);

  if (!currentTab.classList.contains('faq__accardion--active')) {
    buttonTabs.forEach((button) => {
      button.classList.remove('faq__button-tab--active');
    });

    tabs.forEach((tab) => {
      tab.classList.remove('faq__accardion--active');
    });

    currentTab.classList.add('faq__accardion--active');
    currentButton.classList.add('faq__button-tab--active');
  }


};

buttonTabs.forEach((button) => {
  button.addEventListener('click', showTabs);
});
