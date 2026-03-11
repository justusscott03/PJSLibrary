import { pjsSettings } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.3/pjsSettings.js";
import { fill } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.3/colors.js";
import { sin, cos } from "https://cdn.jsdelivr.net/gh/justusscott03/PJSLibrary@v1.1.3/trigonometry.js";

const ctx = document.getElementById("canvas").getContext("2d");

function textFont (font) {
    pjsSettings.globalFont = font;
    updateText();
}

function textSize (size) {
    pjsSettings.globalSize = size;
    updateText();
}

function textWeight(weight) {
    if (!["lighter", "normal", "bold", "bolder"].includes(weight)) {
        console.error("Invalid textWeight:", weight);
    }   

    pjsSettings.globalWeight = weight;
    updateText();
}

function textStyle(style) {
    if (!["normal", "italic"].includes(style)) {
        console.error("Invalid textStyle:", style);
    }  

    pjsSettings.globalStyle = style;
    updateText();
}

function updateText() {
    ctx.font = `${pjsSettings.globalStyle} ${pjsSettings.globalWeight} ${pjsSettings.globalSize}px ${pjsSettings.globalFont}`;
}

/**
 * Configures the alignment of text drawn to the canvas.
 * @param { string } ALIGN - The horizontal alignment of the text. Can be "LEFT", "CENTER", or "RIGHT". Default is "LEFT".
 * @param { string } YALIGN - The vertical alignment of the text. Can be "BASELINE", "CENTER", or "BOTTOM". Default is "BASELINE".
 */
function textAlign (ALIGN, YALIGN = "BASELINE") {
    if (!["LEFT", "CENTER", "RIGHT"].includes(ALIGN)) {
        console.error("Invalid textAlign ALIGN:", ALIGN);
    }
    if (!["BASELINE", "CENTER", "BOTTOM"].includes(YALIGN)) {
        console.error("Invalid textAlign YALIGN:", YALIGN);
    }

    ALIGN = ALIGN === "LEFT" ? "start" : ALIGN === "CENTER" ? "center" : "end";
    YALIGN = YALIGN === "BASELINE" ? "alphabetic" : YALIGN === "CENTER" ? "middle" : "bottom";
    
    ctx.textAlign = ALIGN;
    ctx.textBaseline = YALIGN;
}

function text (message, x, y) {
    ctx.fillText(message, x, y);
}

function outlinedText (message, x, y, weight, main, outline, inc = 10) {
    fill(outline);
    for (let i = 0; i < 360; i += inc) {
        text(message, x + sin(i) * weight, y + cos(i) * weight);
    }
    fill(main);
    text(message, x, y);
}

export { textFont, textSize, textWeight, textStyle, textAlign, text, outlinedText };