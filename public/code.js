'use strict';

figma.showUI(__html__, { themeColors: true, width: 256, height: 300 });
figma.ui.onmessage = (msg) => {
    figma.closePlugin();
};
