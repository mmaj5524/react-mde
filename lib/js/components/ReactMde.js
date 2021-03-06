"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _1 = require(".");
var defaults_1 = require("../commands/default-commands/defaults");
var react_mde_en_1 = require("../l18n/react-mde.en");
var icons_1 = require("../icons");
var ClassNames_1 = require("../util/ClassNames");
var command_orchestrator_1 = require("../commands/command-orchestrator");
var grip_svg_1 = require("./grip-svg");
var ReactMde = /** @class */ (function (_super) {
    __extends(ReactMde, _super);
    function ReactMde(props) {
        var _this = _super.call(this, props) || this;
        // resizeYStart will be null when it is not resizing
        _this.gripDrag = null;
        _this.handleTextChange = function (value) {
            var onChange = _this.props.onChange;
            onChange(value);
        };
        _this.handleGripMouseDown = function (event) {
            _this.gripDrag = {
                originalHeight: _this.state.editorHeight,
                originalDragY: event.clientY
            };
        };
        _this.handleGripMouseUp = function () {
            _this.gripDrag = null;
        };
        _this.handleGripMouseMove = function (event) {
            if (_this.gripDrag !== null) {
                var newHeight = _this.gripDrag.originalHeight +
                    event.clientY -
                    _this.gripDrag.originalDragY;
                if (newHeight >= _this.props.minEditorHeight &&
                    newHeight <= _this.props.maxEditorHeight) {
                    _this.setState(__assign(__assign({}, _this.state), { editorHeight: _this.gripDrag.originalHeight +
                            (event.clientY - _this.gripDrag.originalDragY) }));
                }
            }
        };
        _this.handlePaste = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var paste;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paste = this.props.paste;
                        if (!paste || !paste.saveImage) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.commandOrchestrator.executePasteCommand(event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleTabChange = function (newTab) {
            var onTabChange = _this.props.onTabChange;
            onTabChange(newTab);
        };
        _this.handleCommand = function (commandName) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commandOrchestrator.executeCommand(commandName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.finalRefs = __assign({}, (props.refs || {}));
        if (!_this.finalRefs.textarea) {
            _this.finalRefs.textarea = React.createRef();
        }
        if (!_this.finalRefs.preview) {
            _this.finalRefs.preview = React.createRef();
        }
        _this.commandOrchestrator = new command_orchestrator_1.CommandOrchestrator(_this.props.commands, _this.finalRefs.textarea, _this.props.l18n, _this.props.paste);
        _this.state = {
            editorHeight: props.minEditorHeight
        };
        return _this;
    }
    ReactMde.prototype.componentDidMount = function () {
        document.addEventListener("mousemove", this.handleGripMouseMove);
        document.addEventListener("mouseup", this.handleGripMouseUp);
    };
    ReactMde.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        var _g = this.props, getIcon = _g.getIcon, toolbarCommands = _g.toolbarCommands, classes = _g.classes, loadingPreview = _g.loadingPreview, readOnly = _g.readOnly, disablePreview = _g.disablePreview, value = _g.value, l18n = _g.l18n, minPreviewHeight = _g.minPreviewHeight, childProps = _g.childProps, selectedTab = _g.selectedTab, generateMarkdownPreview = _g.generateMarkdownPreview, loadSuggestions = _g.loadSuggestions, suggestionTriggerCharacters = _g.suggestionTriggerCharacters, textAreaComponent = _g.textAreaComponent;
        var finalChildProps = childProps || {};
        var toolbarButtons = toolbarCommands.map(function (group) {
            return group.map(function (commandName) {
                var command = _this.commandOrchestrator.getCommand(commandName);
                return {
                    commandName: commandName,
                    buttonContent: command.icon
                        ? command.icon(getIcon)
                        : getIcon(commandName),
                    buttonProps: command.buttonProps
                };
            });
        });
        return (React.createElement("div", { className: ClassNames_1.classNames("react-mde", "react-mde-tabbed-layout", (_a = classes) === null || _a === void 0 ? void 0 : _a.reactMde) },
            React.createElement(_1.Toolbar, { classes: (_b = classes) === null || _b === void 0 ? void 0 : _b.toolbar, buttons: toolbarButtons, onCommand: this.handleCommand, onTabChange: this.handleTabChange, tab: selectedTab, readOnly: readOnly, disablePreview: disablePreview, l18n: l18n, buttonProps: finalChildProps.commandButtons, writeButtonProps: finalChildProps.writeButton, previewButtonProps: finalChildProps.previewButton }),
            React.createElement("div", { className: ClassNames_1.classNames({ invisible: selectedTab !== "write" }) },
                React.createElement(_1.TextArea, { classes: (_c = classes) === null || _c === void 0 ? void 0 : _c.textArea, suggestionsDropdownClasses: (_d = classes) === null || _d === void 0 ? void 0 : _d.suggestionsDropdown, refObject: this.finalRefs.textarea, onChange: this.handleTextChange, onPaste: this.handlePaste, readOnly: readOnly, textAreaComponent: textAreaComponent, textAreaProps: childProps && childProps.textArea, height: this.state.editorHeight, value: value, suggestionTriggerCharacters: suggestionTriggerCharacters, loadSuggestions: loadSuggestions, onPossibleKeyCommand: this.commandOrchestrator.handlePossibleKeyCommand }),
                React.createElement("div", { className: ClassNames_1.classNames("grip", (_e = classes) === null || _e === void 0 ? void 0 : _e.grip), onMouseDown: this.handleGripMouseDown },
                    React.createElement(grip_svg_1.GripSvg, null))),
            selectedTab !== "write" && (React.createElement(_1.Preview, { classes: (_f = classes) === null || _f === void 0 ? void 0 : _f.preview, refObject: this.finalRefs.preview, loadingPreview: loadingPreview, minHeight: minPreviewHeight, generateMarkdownPreview: generateMarkdownPreview, markdown: value }))));
    };
    ReactMde.defaultProps = {
        commands: defaults_1.getDefaultCommandMap(),
        toolbarCommands: defaults_1.getDefaultToolbarCommands(),
        getIcon: function (name) { return React.createElement(icons_1.SvgIcon, { icon: name }); },
        readOnly: false,
        l18n: react_mde_en_1.enL18n,
        minEditorHeight: 200,
        maxEditorHeight: 500,
        minPreviewHeight: 200,
        selectedTab: "write",
        disablePreview: false,
        suggestionTriggerCharacters: ["@"]
    };
    return ReactMde;
}(React.Component));
exports.ReactMde = ReactMde;
