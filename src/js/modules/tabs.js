const tabs = (selector) => {

  const tabs = document.querySelectorAll(selector);

  function hideTabs() {
    tabs.forEach((tab) => {
      tab.nextElementSibling.classList.add('hide');
    });
  }
  
  hideTabs();

  tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
      if (this.nextElementSibling.classList.contains('hide')) {
        hideTabs();
        this.nextElementSibling.classList.add('show');
        this.nextElementSibling.classList.remove('hide');
      } else {
        this.nextElementSibling.classList.remove('show');
        this.nextElementSibling.classList.add('hide');
      }
    });
  });

};

export default tabs;