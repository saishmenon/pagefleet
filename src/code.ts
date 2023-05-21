import pages from './data/pages';

figma.showUI(__html__, { themeColors: true, width: 256, height: 300 });

figma.ui.onmessage = (msg) => {
    
    if(msg.type === 'create-pages'){
        if(msg.template === "simple"){
            for(let page of pages.simple.slice(1)){
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.simple[0];
        }else if(msg.template === "intermediate"){
            for(let page of pages.intermediate.slice(1)){
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.intermediate[0];
        }else if(msg.template === "advanced"){
            for(let page of pages.advanced.slice(1)){
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.advanced[0];
        }

        figma.notify("✅ Pages created!")
    }
    figma.closePlugin();
}
