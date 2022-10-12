# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

<!-- <section>
  <div class='sticky'>
    <div class='container'>
      <h1>Godwin Ebikwo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        deleniti explicabo quas quos atque distinctio ipsa dolore, aliquam quo
        illo assumenda id nam quasi, voluptate, voluptatibus minima fugit sequi
        deserunt.
      </p>
    </div>
  </div>
</section>

<section>
  <div class='sticky'>
    <div class='container'>
      <h1>About The Ebikwo's Fortune</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        deleniti explicabo quas quos atque distinctio ipsa dolore, aliquam quo
        illo assumenda id nam quasi, voluptate, voluptatibus minima fugit sequi
        deserunt.
      </p>
    </div>
  </div>
</section>

<section>
  <div class='sticky'>
    <div class='container'>
      <h1>Going Global Ebikwo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        deleniti explicabo quas quos atque distinctio ipsa dolore, aliquam quo
        illo assumenda id nam quasi, voluptate, voluptatibus minima fugit sequi
        deserunt.
      </p>
    </div>
  </div>
</section>

<section>
  <div class='sticky'>
    <div class='container'>
      <h1>Wakanada Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        deleniti explicabo quas quos atque distinctio ipsa dolore, aliquam quo
        illo assumenda id nam quasi, voluptate, voluptatibus minima fugit sequi
        deserunt.
      </p>
    </div>
  </div>
</section>

<style lang='scss'>
  section {
    position: relative;
    height: 200vh;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(100vw - 30vw);
      max-width: calc(100vw - 30vw);
    }

    @media (min-width: 1025px) {
      width: calc(100vw - 17.25vw);
      max-width: calc(100vw - 17.25vw);
    }
  }

  section:nth-child(2) {
    top: -100vh;
  }
  section:nth-child(3) {
    top: -200vh;
  }
  section:nth-child(4) {
    top: -300vh;
    height: 100vh;
  }

  .sticky {
    position: sticky;
    width: 100%;
    height: 100vh !important;
    top: 10px;
    padding: 2rem;
    will-change: filter, transform;
  }

  .container {
    width: 100%;
    height: 100% !important;
    background-color: var(--fg);
    padding: 1rem;
    overflow: scroll;
  }
</style>

<script>
  let stickySections = [...document.querySelectorAll('.sticky')];

  function animate() {
    for (let i = 0; i < stickySections.length; i++) {
      let { top } = stickySections[i].parentElement.getBoundingClientRect();
      let transTop = top > 0 ? 0 : top * -1;

      if (transTop >= 1000) transTop = 1000;

      if (top <= 0 && i !== stickySections.length - 1) {
        stickySections[i].style.filter = `blur(${0 + transTop * 0.04}px)`;
        stickySections[i].style.transform = `scale3d(${1 - transTop * 0.001}, ${
          1 - transTop * 0.001
        }, ${1 - transTop * 0.001})`;
        stickySections[i].style.opacity = 1 - transTop * 0.0015;
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
</script> -->
# astro-project
