import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://demoqa.com',
        defaultCommandTimeout: 10000,
        viewportWidth: 1280,
        viewportHeight: 720,
        screenshotOnRunFailure: true,
        video: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        experimentalRunAllSpecs: true,
    }
});