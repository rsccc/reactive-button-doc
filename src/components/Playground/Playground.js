import React, { useEffect, useState } from 'react';
import ReactiveButton from 'reactive-button';
import './Playground.scss';
import '../../css/bootstrap.scss'

const Playground = () => {
    const [buttonState, setButtonState] = useState('idle');
    const [color, setColor] = useState('primary');
    const [idleText, setIdleText] = useState('Click Me');
    const [loadingText, setLoadingText] = useState(`<span><i className="reactive-btn-spinner"></i>Loading</span>`);

    const [disableButtonStateProp, setDisableButtonStateProp] = useState(false);

    const [messageDuration, setMessageDuration] = useState(2000);
 
    const buttonOnClickHandler = () => {
        setDisableButtonStateProp(true);
        setButtonState('loading');
        setTimeout(() => {
            setButtonState('success');
            setDisableButtonStateProp(false);
        }, messageDuration);
    }

    useEffect(() => {
        if (buttonState === 'success' || buttonState === 'error') {
            setTimeout(() => {
                setButtonState('idle');
            }, messageDuration);
        }
    }, [buttonState])

    const buttonStateOnChangeHandler = (e) => {
        setButtonState(e.target.value);
    }

    const colorOnChangeHandler = (e) => {
        setColor(e.target.value);
    }

    const idleTextOnChangeHandler = (e) => {
        setIdleText(e.target.value);
    }

    const loadingTextOnChangeHandler = (e) => {
        setLoadingText(e.target.value);
    }
    
    return (
        <div className="playground-component-wrapper">
            <div className="mb-3">
                <div className="card p-3 bg-dark">
                    <div className="card__body text-center">
                        <ReactiveButton
                            buttonState={buttonState}
                            onClick={buttonOnClickHandler}
                            color={color}
                            idleText={idleText}
                            loadingText={loadingText} 
                            // loadingText={<span><i className="reactive-btn-spinner"></i>Loading</span>} 
                            successText={'Success!'}
                            errorText={'Error!'} 
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
                        />
                    </div>
                </div>
            </div>
            <div className="card shadow--lw">
                <div className="card__header">
                    <h4>Props</h4>
                </div>
                <div className="card__body">
                    <div class="container props__container">
                        <div class="row" style={{fontSize: '13px'}}>
                            <div class="col col--6 bootstrap">
                                <div className="pt-4">
                                    <div class="form-group row">
                                        <label htmlFor="buttonState" class="col-sm-4 col-form-label text-lg-right">buttonState</label>
                                        <div class="col-sm-6">
                                            <select class="form-control form-control-sm" id="buttonState" value={buttonState} onChange={buttonStateOnChangeHandler} disabled={disableButtonStateProp}>
                                                <option value="idle">idle</option>
                                                <option value="loading">loading</option>
                                                <option value="success">success</option>
                                                <option value="error">error</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label htmlFor="buttonState" class="col-sm-4 col-form-label text-lg-right">idleText</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-sm" id="idleText" placeholder="Click Me" value={idleText} onChange={idleTextOnChangeHandler}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col--6 bootstrap">
                                <div className="pt-4">
                                    <div class="form-group row">
                                        <label htmlFor="buttonState" class="col-sm-4 col-form-label text-lg-right">color</label>
                                        <div class="col-sm-6">
                                            <select class="form-control form-control-sm" id="color" value={color} onChange={colorOnChangeHandler}>
                                                <option value="primary">Primary</option>
                                                <option value="dark">Dark</option>
                                                <option value="light">Light</option>
                                                <option value="green">Green</option>
                                                <option value="red">Red</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label htmlFor="buttonState" class="col-sm-4 col-form-label text-lg-right">loadingText</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-sm" id="loadingText" placeholder="Loading" value={loadingText} onChange={loadingTextOnChangeHandler}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playground;

                                    // <input type="checkbox" name='test' checked={true} onChange={()=> {}} className="z-switch" /> Test