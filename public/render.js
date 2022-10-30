import gsap from 'gsap';
import { Core as Taxi, Renderer, Transition } from '@unseenco/taxi';
import Lenis from '@studio-freight/lenis';

function delay(n) {
  n = n || 2000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

const lenis = new Lenis({});

gsap.defaults({
  ease: 'expo.inOut',
  duration: '1',
});

class RendererDefault extends Renderer {
  initialLoad() {
    gsap.to('.overlay', {
      yPercent: 100,
      display: 'none',
    });
  }

  onEnterCompleted() {
    gsap.to('.overlay', {
      yPercent: -100,
      display: 'none',
    });
  }
}

class TransitionDefault extends Transition {
  async onLeave({ done }) {
    const tl = gsap.timeline();
    const overlay = document.querySelector('.overlay');

    tl.to(this.wrapper, { opacity: 0 }, 0.1).fromTo(
      overlay,
      { yPercent: 100 },
      { yPercent: 0, display: 'flex' }
    );

    await delay(1200);
    done();
  }

  async onEnter({ done }) {
    const tl = gsap.timeline();
    tl.to(this.wrapper, { opacity: 1 }, 0.1).then(() => {
      done();
    });
  }
}

const taxi = new Taxi({
  renderers: {
    default: RendererDefault,
  },
  transitions: {
    default: TransitionDefault,
  },
  reloadJsFilter: (element) => !element.hasAttribute('data-taxi-once'),
});
