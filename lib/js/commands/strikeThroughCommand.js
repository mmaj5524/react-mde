"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = require("../util/MarkdownUtil");
exports.strikeThroughCommand = {
    name: "strikethrough",
    buttonProps: { "aria-label": "Add strikethrough text" },
    execute: function (state0, api) {
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({
            text: state0.text,
            selection: state0.selection
        });
        var state1 = api.setSelectionRange(newSelectionRange);
        // Replaces the current selection with the strikethrough mark up
        var state2 = api.replaceSelection("~~" + state1.selectedText + "~~");
        // Adjust the selection to not contain the ~~
        api.setSelectionRange({
            start: state2.selection.end - 2 - state1.selectedText.length,
            end: state2.selection.end - 2
        });
    }
};
