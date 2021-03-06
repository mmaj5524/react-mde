import * as React from "react";
import { CommandMap, GenerateMarkdownPreview, GetIcon, PasteOptions, Suggestion, ToolbarCommands } from "../types";
import { Tab } from "../types/Tab";
import { Classes, L18n } from "..";
import { ChildProps } from "../child-props";
import { CommandOrchestrator } from "../commands/command-orchestrator";
import { Refs } from "../refs";
import { ButtonHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ComponentSimilarTo } from "../util/type-utils";
export interface ReactMdeProps {
    value: string;
    onChange: (value: string) => void;
    selectedTab: "write" | "preview";
    onTabChange: (tab: "write" | "preview") => void;
    generateMarkdownPreview: GenerateMarkdownPreview;
    minEditorHeight: number;
    maxEditorHeight: number;
    minPreviewHeight: number;
    classes?: Classes;
    refs?: Refs;
    toolbarCommands?: ToolbarCommands;
    commands?: CommandMap;
    getIcon?: GetIcon;
    loadingPreview?: React.ReactNode;
    readOnly?: boolean;
    disablePreview?: boolean;
    suggestionTriggerCharacters?: string[];
    loadSuggestions?: (text: string) => Promise<Suggestion[]>;
    childProps?: ChildProps;
    paste?: PasteOptions;
    l18n?: L18n;
    /**
     * Custom textarea component. "textAreaComponent" can be any React component which
     * props are a subset of the props of an HTMLTextAreaElement
     */
    textAreaComponent?: ComponentSimilarTo<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>;
    /**
     * Custom toolbar button component. "toolbarButtonComponent" can be any React component which
     * props are a subset of the props of an HTMLButtonElement
     */
    toolbarButtonComponent?: ComponentSimilarTo<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>;
}
export interface ReactMdeState {
    editorHeight: number;
}
export declare class ReactMde extends React.Component<ReactMdeProps, ReactMdeState> {
    /**
     * "finalRefs" is a clone of "props.refs" except that undefined refs are set to default values
     */
    finalRefs: Refs;
    commandOrchestrator: CommandOrchestrator;
    gripDrag: {
        originalDragY: number;
        originalHeight: number;
    };
    static defaultProps: Partial<ReactMdeProps>;
    constructor(props: ReactMdeProps);
    handleTextChange: (value: string) => void;
    handleGripMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleGripMouseUp: () => void;
    handleGripMouseMove: (event: MouseEvent) => void;
    handlePaste: (event: React.ClipboardEvent<HTMLTextAreaElement>) => Promise<void>;
    handleTabChange: (newTab: Tab) => void;
    componentDidMount(): void;
    handleCommand: (commandName: string) => Promise<void>;
    render(): JSX.Element;
}
