import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

const Example = (props) => {
    const [state, setState] = useState('idle');

    const onclickHandler = () => {
        setState('loading');
        setTimeout(() => {
        setState('success');
        }, 2000);
    }

    return (
        <React.Fragment>
            <ReactiveButton
            buttonState={state} /* idle|loading|success/error Default: idle*/
            onClick={onclickHandler} /* function|null Default: null*/
            color={'primary'} /* primary|dark|light|green|red Default: primary*/
            type={'button'} /* button|submit Default: button*/
            idleLabel={'Button'} /* Default: Button*/
            loadingLabel={'<span class="drbll1"><i class="rdbs1"></i>Loading</span>'} /* Default: Loading*/
            successLabel={'Success!'} /* Default: Success!*/
            errorLabel={'Error!'} /* Default: Error!*/
            className={'class1 class 2'} /* Default: null*/
            style={{ textAlign: 'center' }} /* Default: null*/
            size={'normal'} /* Default: normal*/
            autoHideMessage={true} /* Default: true*/
            messageDuration={2000} /* Default: 2000*/
            disabled={false} /* Default: false*/
            outline={false} /* Default: false*/
            shadow={false} /* Default: false*/
            rounded={false} /* Default: false*/
            />
        </React.Fragment>
    );
};

export default Example;