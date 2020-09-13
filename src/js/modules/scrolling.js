const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);
  
  const element = document.documentElement,
    body = document.body;

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1200) {
      upElem.style.opacity = 1;
    } else {
      upElem.style.opacity = 0;
    }
  });

  const calcScroll = () => {
    upElem.addEventListener('click', function (event) {

      let scrollTop = Math.round(element.scrollTop || body.scrollTop);
      
      if (this.hash != '') {
        event.preventDefault();
        let hashElement = document.querySelector(this.hash),
          hashElementTop = 0;


        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  };

  const smoothScroll = (from, to, hash) => {
    let timerInterval = 1,
      prevScrollTop,
      speed;

      if (to > from) {
        speed = 20;
      } else {
        speed = -20;
      }

      let move = setInterval(function () {
        let scrollTop = Math.round(element.scrollTop || body.scrollTop);

        if (
          prevScrollTop === scrollTop ||
          (to > from && scrollTop >= to) ||
          (to < from && scrollTop <= to)
        ) {
          clearInterval(move);
          history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
        } else {
          body.scrollTop += speed;
          element.scrollTop += speed;
          prevScrollTop = scrollTop;
        }
      }, timerInterval);
  };

  calcScroll();

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) :
            Math.min(widthTop + progress / speed, widthTop + toBlock));

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
  
};

export default scrolling;