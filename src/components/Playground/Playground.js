import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import './Playground.scss';

const Playground = () => {
    const [state, setState] = useState('idle');
 
    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
        setState('success');
        }, 2000);
    }
    
    return (
        <div className="playground-component-wrapper">
            <div className="mb-3">
                <div className="card p-3 bg-dark">
                    <div className="card__body text-center">
                        <ReactiveButton
                            buttonState={state}
                            onClick={onClickHandler}
                            color={'primary'}
                            idleText={'Button'}
                            loadingText={<span><i className="reactive-btn-spinner"></i>Loading</span>} 
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
                            width={'100px'}
                            height={'35px'}
                        />
                    </div>
                </div>
            </div>
            <div className="card shadow--lw">
                <div className="card__header">
                    Props
                </div>
                <div className="card__body">
                    <div class="container props__container">
                        <div class="row">
                            <div class="col col--6">
                                <div className="flex-section">
                                    <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
                                </div>
                                <div className="flex-section">
                                    <input type="checkbox" name='test' checked={true} onChange={()=> {}} className="z-switch" /> Test
                                </div>
                            </div>
                            <div class="col col--6">
                                sdfsdf
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playground;