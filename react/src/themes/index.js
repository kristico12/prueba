// Dependencies
import css from 'styled-jsx/css';

const blueOne = '#0080c0';

export const inputTheme = css`
    .inputTheme {
        font-size: 1.5em;
        background-color: white;
        color: black;
        border: 1px solid ${blueOne};
        padding: 3px 3px 3px 20px;
        border-radius: 25px;
        width: 100%;
    }
    .inputTheme::-moz-placeholder { color: ${blueOne} }
`
export const areaTheme = css`
    .areaTheme {
        resize: none;
        font-size: 2em;
        background-color: white;
        color: black;
        border: 1px solid ${blueOne};
        padding: 5px;
        border-radius: 10px;
        height: 8em;
        width: 100%;
    }
    .areaTheme::-moz-placeholder { color: ${blueOne} }
`
export const labelFormTheme = css`
    .labelFormTheme {
        color: 1eae04;
        font-size: 1.2em;
        display: grid;
        grid-template-rows: auto auto;
        grid-row-gap: .3em;
        text-transform: capitalize;
    }
`
export const buttomSendTheme = css`
    .buttomSendTheme {
        background-color: ${blueOne};
        border: none;
        padding: 13px;
        color: white;
        font-size: 1.2em;
    }
    .buttomSendTheme:hover {
        background-color: white;
        border: 3px solid ${blueOne};
        color: ${blueOne};
        border-radius: 10px;
        padding: 10px;
    }
`
export const buttomCancelTheme = css`
    .buttomCancelTheme {
        background-color: red;
        border: none;
        padding: 13px;
        color: white;
        font-size: 1.2em;
    }
    .buttomCancelTheme:hover {
        background-color: white;
        border: 3px solid red;
        color: red;
        border-radius: 10px;
        padding: 10px;
    }
`
export const checkboxTheme = css`
    .checkboxThemeInput {
        cursor: context-menu;
        display: none;
    }

    .checkboxThemeSpan {
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    .checkboxThemeInput:hover ~ .checkboxThemeSpan {
        background-color: #ccc;
    }

    .checkboxThemeInput:checked ~ .checkboxThemeSpan {
        background-color: ${blueOne};
    }

    .checkboxThemeSpan:after {
        content: "";
        position: absolute;
        display: none;
    }

    .checkboxThemeInput ~ .checkboxThemeSpan:after {
        display: block;
    }
`
