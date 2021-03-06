"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ClassNames_1 = require("../util/ClassNames");
exports.SuggestionsDropdown = function (_a) {
    var classes = _a.classes, suggestions = _a.suggestions, caret = _a.caret, onSuggestionSelected = _a.onSuggestionSelected, focusIndex = _a.focusIndex;
    var handleSuggestionClick = react_1.useCallback(function (event) {
        event.preventDefault();
        var index = parseInt(event.currentTarget.attributes["data-index"].value);
        onSuggestionSelected(index);
    }, [suggestions]);
    // onMouseDown should be cancelled because onClick will handle it propertly. This way, the textarea does not lose
    // focus
    var handleMouseDown = react_1.useCallback(function (event) { return event.preventDefault(); }, []);
    return React.createElement("ul", { className: ClassNames_1.classNames("mde-suggestions", classes), style: { left: caret.left, top: caret.top } }, suggestions.map(function (s, i) { return React.createElement("li", { onClick: handleSuggestionClick, onMouseDown: handleMouseDown, key: i, "aria-selected": focusIndex === i ? "true" : "false", "data-index": "" + i }, s.preview); }));
};
