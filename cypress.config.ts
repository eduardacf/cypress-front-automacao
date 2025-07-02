import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
    e2e: {
        baseUrl: process.env.BASE_URL || 'https://demoqa.com',
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,
        viewportWidth: 1280,
        viewportHeight: 720,
        screenshotOnRunFailure: true,
        video: false,
        setupNodeEvents(on, config) {
            mochawesome(on);
            return config;
        },
        reporter: 'cypress-mochawesome-reporter',
        experimentalRunAllSpecs: true,
    },
});