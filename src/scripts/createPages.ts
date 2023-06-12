import pages from "../data/pages";

export default function createPages(template) {
    if (template === "simple") {
        for (let page of pages.simple.slice(1)) {
            let newPage = figma.createPage();
            newPage.name = page;
        }
        figma.currentPage.name = pages.simple[0];
        figma.notify("✅ Successfully created a simple template for you!");
    } else if (template === "intermediate") {
        for (let page of pages.intermediate.slice(1)) {
            let newPage = figma.createPage();
            newPage.name = page;
        }
        figma.currentPage.name = pages.intermediate[0];
        figma.notify(
            "✅ Your intermediate project has been setup successfully!"
        );
    } else if (template === "advanced") {
        for (let page of pages.advanced.slice(1)) {
            let newPage = figma.createPage();
            newPage.name = page;
        }
        figma.currentPage.name = pages.advanced[0];
        figma.notify("✅ Your Advanced project has been setup successfully!");
    }
}
