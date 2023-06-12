export default function createCustomPages(customPages) {
    for (let page of customPages.slice(1)) {
        let newPage = figma.createPage();
        newPage.name = page;
    }
    figma.currentPage.name = customPages[0];
    figma.notify("✅ Pages created!");
}
