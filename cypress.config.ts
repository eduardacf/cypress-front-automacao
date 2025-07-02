import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
    e2e: {
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,
        viewportWidth: 1280,
        viewportHeight: 720,
        screenshotOnRunFailure: true,
        video: false,
        setupNodeEvents(on, config) {
            on('task', {
                log(message: string) {
                    console.log(message);
                    return null;
                }
            });
            mochawesome(on);
            config.baseUrl =
                config.env.BASE_URL || process.env.BASE_URL || config.baseUrl;
            return config;
        },
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'mochawesome-report',
            overwrite: false,
            html: true,
            json: true
        },
        experimentalRunAllSpecs: true,
    },
});