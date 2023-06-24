import pages from "./data/pages";

figma.showUI(__html__, { themeColors: true, width: 240, height: 408 });

figma.ui.onmessage = (msg) => {
    if (msg.type === "create-pages") {
        if (msg.template === "simple") {
            for (let page of pages.simple.slice(1)) {
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.simple[0];
            figma.notify("✅ Successfully created a simple template for you!");
        } else if (msg.template === "intermediate") {
            for (let page of pages.intermediate.slice(1)) {
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.intermediate[0];
            figma.notify(
                "✅ Your intermediate project has been setup successfully!"
            );
        } else if (msg.template === "advanced") {
            for (let page of pages.advanced.slice(1)) {
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.advanced[0];
            figma.notify(
                "✅ Your Advanced project has been setup successfully!"
            );
        }
    } else if (msg.type === "create-custom-pages") {
        if (msg.customPages.length === 0) {
            figma.notify(
                "❌ Please add pages to the list before creating them!"
            );
        } else {
            for (let page of msg.customPages.slice(1)) {
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = msg.customPages[0];
            figma.notify("✅ Pages created!");
        }
    }
    figma.closePlugin();
};
