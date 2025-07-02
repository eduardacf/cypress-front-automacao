import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';
import * as dotenv from 'dotenv';
import * as path from 'path';

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
            const ambiente = process.env.CYPRESS_ENV || 'dev';
            dotenv.config({path: path.resolve(__dirname, `.env.${ambiente}`)});
            config.baseUrl = config.env.BASE_URL || process.env.BASE_URL || 'https://demoqa.com';
            mochawesome(on);
            return config;
        },
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: false,
            html: true,
            json: true,
            charts: true,
            embeddedScreenshots: true,
            saveAllAttempts: false
        },
        experimentalRunAllSpecs: true,
    },
});