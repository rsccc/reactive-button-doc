import React from 'react';
import styled, { css } from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import useThemeContext from '@theme/hooks/useThemeContext';
import palenight from 'prism-react-renderer/themes/palenight';

const background = '#42374a';
const foreground = '#f8f8f2';
const red = '#ff5555';

const blue = '#d1b0dd';
const lightGrey = '#42374a';

const reactLiveHome = {
    plain: {
        color: '#e7d2ed'
    },
    styles: [
        {
            types: ['prolog', 'comment', 'doctype', 'cdata'],
            style: {
                color: 'hsl(30, 20%, 50%)'
            }
        },
        {
            types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
            style: { color: '#f677e1' }
        },
        {
            types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
            style: {
                color: 'hsl(75, 70%, 70%)'
            }
        },
        {
            types: [
                'operator',
                'entity',
                'url',
                'string',
                'variable',
                'language-css'
            ],
            style: {
                color: 'hsl(40, 90%, 70%)'
            }
        },
        {
            types: ['deleted'],
            style: {
                color: 'rgb(255, 85, 85)'
            }
        },
        {
            types: ['italic'],
            style: {
                fontStyle: 'italic'
            }
        },
        {
            types: ['important', 'bold'],
            style: {
                fontWeight: 'bold'
            }
        },
        {
            types: ['regex', 'important'],
            style: {
                color: '#e90'
            }
        },
        {
            types: ['atrule', 'attr-value', 'keyword'],
            style: {
                color: '#f677e1'
            }
        },
        {
            types: ['punctuation', 'symbol'],
            style: {
                opacity: '0.7'
            }
        }
    ]
};

const StyledProvider = styled(LiveProvider)`
border-radius: 3px;
box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
overflow: hidden;
margin-bottom: 100px;
`;

const LiveWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: stretch;
align-items: stretch;
@media (max-width: 600px) {
    flex-direction: column;
}
`;

const Column = css`
flex-basis: ${props => props.previewOnly ? "100%" : "50%"};
width: ${props => props.previewOnly ? "100%" : "50%"};
max-width: ${props => props.previewOnly ? "100%" : "50%"};
@media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
    height: ${props => props.height};
    max-height: ${props => props.height};
}
`;

const StyledEditor = styled.div`
font-family: 'Source Code Pro', monospace;
font-size: 14px;
height: ${props => props.height};
max-height: ${props => props.height};
overflow: auto;
${Column};
* > textarea:focus {
    outline: none;
}
`;

const StyledPreview = styled(LivePreview)`
position: relative;
padding: 1.5rem;
background: ${props => props.isDarkTheme ? "#232525" : "#e3eaea"};
color: black;
height: auto;
overflow: hidden;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
${Column};
`;

const StyledError = styled(LiveError)`
display: block;
padding: 0.5rem;
background: ${red};
color: ${foreground};
white-space: pre-wrap;
text-align: left;
font-size: 0.9em;
font-family: 'Source Code Pro', monospace;
`;

const Playground = ({ noInline, code, scope, height, previewOnly = false }) => {
    const {isDarkTheme} = useThemeContext();

    return (
        <StyledProvider code={code} noInline={noInline} theme={palenight} scope={scope}>
            <LiveWrapper>
                {!previewOnly &&
                    <StyledEditor previewOnly={previewOnly} height={height}>
                        <LiveEditor />
                    </StyledEditor>
                }
                <StyledPreview previewOnly={previewOnly} height={height} isDarkTheme={isDarkTheme}/>
            </LiveWrapper>
            <StyledError />
        </StyledProvider>
    )
};

export default Playground;