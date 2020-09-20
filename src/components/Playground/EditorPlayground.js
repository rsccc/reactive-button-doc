import React, { useEffect, useState } from 'react';
import ReactiveButton from 'reactive-button';
import './EditorPlayground.scss';
import palenight from 'prism-react-renderer/themes/palenight';
import {LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditorPlayground = () => {
    const code = `
    function App() {
        const [state, setState] = useState('idle');

        const onClickHandler = () => {
            setState('loading');
            setTimeout(() => {
            setState('success');
            }, 2000);
        }

        return (
            <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'primary'}
                idleText={'Click Me'}
                loadingText={<span><span><FontAwesomeIcon icon={faSpinner} spin/></span> Loading</span>}
                successText={<span><span><FontAwesomeIcon icon={faCheck}/></span> Success</span>}
                errorText={<span><span><FontAwesomeIcon icon={faTimes}/></span> Error</span>}
                type={'button'}
                className={'class1 class2'}
                style={{ textAlign: 'center' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'normal'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
            />
        );
    }
    `;
    return (
        <div className="editor-playground-component-wrapper">
            <LiveProvider code={code} theme={palenight} scope={{useState, ReactiveButton, FontAwesomeIcon, faCheck, faSpinner, faTimes}}>
                <div className="mb-3">
                    <div className="card playground__card">
                        <div className="card__body my-auto text-center">
                            <LiveError />
                            <LivePreview />
                        </div>
                    </div>
                </div>
                <div className="card shadow-dim">
                    <div className="card__body editor__card__body">
                        <LiveEditor />
                    </div>
                </div>
            </LiveProvider>
        </div>
    );
};

export default EditorPlayground;