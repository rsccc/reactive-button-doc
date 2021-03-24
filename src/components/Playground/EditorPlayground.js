import React, { useEffect, useState } from 'react';
import ReactiveButton from 'reactive-button';
import './EditorPlayground.scss';
import palenight from 'prism-react-renderer/themes/palenight';
import {LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { faCheck, faSpinner, faTimes, faCircleNotch, faThumbsUp, faBomb } from '@fortawesome/free-solid-svg-icons';
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
                loadingText={
                    <React.Fragment>
                        <FontAwesomeIcon icon={faCircleNotch} spin/> Loading
                    </React.Fragment>
                }
                successText={
                    <React.Fragment>
                        <FontAwesomeIcon icon={faThumbsUp}/> Success
                    </React.Fragment>
                }
                errorText={
                    <React.Fragment>
                        <FontAwesomeIcon icon={faBomb}/> Error
                    </React.Fragment>
                }
                type={'button'}
                className={'class1 class2'}
                style={{ 
                    borderRadius: '5px'
                }}
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
            <LiveProvider code={code} theme={palenight} scope={{useState, ReactiveButton, FontAwesomeIcon, faCheck, faSpinner, faTimes, faCircleNotch, faThumbsUp, faBomb}}>
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