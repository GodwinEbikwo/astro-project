import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    storyblok({
      accessToken: "<your-access-token>",
    }),
  ],
});
