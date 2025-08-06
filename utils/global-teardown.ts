import { FullConfig } from "@playwright/test";

async function globalTeardown(config: FullConfig) {
    try {
        // Perform any necessary cleanup actions here
        console.log("Global teardown started...");

        // Example: Close any open connections, clean up resources, etc.
        // await someCleanupFunction();

        console.log("Global teardown completed successfully.");
    } catch (error) {
        console.error(`Global teardown failed: ${error}`);
        throw new Error(`Global teardown failed: ${error}`);
    }
}
export default globalTeardown;