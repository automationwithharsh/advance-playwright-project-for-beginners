import { FullConfig } from "@playwright/test";
import {ReportingApi} from "@reportportal/agent-js-playwright";

 async function globalSetup(config:FullConfig) {
    try {
        ReportingApi.info("Global setup started...");
        // Example: Initialize ReportPortal, open connections, etc.
        // await for connecttion to database or API

        ReportingApi.info("Global setup completed successfully.");

        
    } catch (error) {
        ReportingApi.error(`Global setup failed: ${error}`);
        throw new Error(`Global setup failed: ${error}`); 
    }
    
 }

 export default globalSetup;