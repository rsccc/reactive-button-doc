---
id: usage
title: Usage
---

- Initialize a state with string value <code>'idle'</code>
- When the button is clicked, set state to <code>'loading'</code>
- When the task is completed, set state to <code>'success'</code> or <code>'error'</code> according to your need

## Basic Usage

```jsx 
import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

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
      />
   );
}

export default App;
```

## Full Usage

```jsx 
import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

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
         width={null}
         height={null}
      />
  );
}

export default App;
```

:::note

Above examples demonstrate an asynchronous task. For non asynchronous task, state management is not needed. Use as like normal button.

:::

## Available Props 

<div className="z-table-wrapper">
  <table>
   <thead>
      <tr>
         <th align="left">Props</th>
         <th align="center">Type</th>
         <th align="left">Description</th>
         <th align="center">Default</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td align="left">buttonState</td>
         <td align="center">string</td>
         <td align="left">Current button state</td>
         <td align="center">'idle'</td>
      </tr>
      <tr>
         <td align="left">onClick</td>
         <td align="center">function</td>
         <td align="left">Callback function when clicking button</td>
         <td align="center"> {'() => {}'} </td>
      </tr>
      <tr>
         <td align="left">color</td>
         <td align="center">string</td>
         <td align="left">Button color</td>
         <td align="center">'primary'</td>
      </tr>
      <tr>
         <td align="left">idleText</td>
         <td align="center">string | ReactNode</td>
         <td align="left">Button text when idle</td>
         <td align="center">'Click Me'</td>
      </tr>
      <tr>
         <td align="left">loadingText</td>
         <td align="center">string | ReactNode</td>
         <td align="left">Button text when loading</td>
         <td align="center">'Loading'</td>
      </tr>
      <tr>
         <td align="left">successText</td>
         <td align="center">string | ReactNode</td>
         <td align="left">Button text when loading successful</td>
         <td align="center">'Success!'</td>
      </tr>
      <tr>
         <td align="left">errorText</td>
         <td align="center">string | ReactNode</td>
         <td align="left">Button text when loading failed</td>
         <td align="center">'Error!'</td>
      </tr>
      <tr>
         <td align="left">type</td>
         <td align="center">string</td>
         <td align="left">Button type attribute</td>
         <td align="center">'button'</td>
      </tr>
      <tr>
         <td align="left">className</td>
         <td align="center">string</td>
         <td align="left">Button classnames</td>
         <td align="center">''</td>
      </tr>
      <tr>
         <td align="left">style</td>
         <td align="center">React.CSSProperties</td>
         <td align="left">Custom style</td>
         <td align="center">{'{}'}</td>
      </tr>
      <tr>
         <td align="left">outline</td>
         <td align="center">boolean</td>
         <td align="left">Enable outline effect</td>
         <td align="center">false</td>
      </tr>
      <tr>
         <td align="left">shadow</td>
         <td align="center">boolean</td>
         <td align="left">Enable shadow effect</td>
         <td align="center">false</td>
      </tr>
      <tr>
         <td align="left">rounded</td>
         <td align="center">boolean</td>
         <td align="left">Enable rounded button</td>
         <td align="center">false</td>
      </tr>
      <tr>
         <td align="left">size</td>
         <td align="center">string</td>
         <td align="left">Button size</td>
         <td align="center">'normal'</td>
      </tr>
      <tr>
         <td align="left">block</td>
         <td align="center">boolean</td>
         <td align="left">Block Button</td>
         <td align="center">false</td>
      </tr>
      <tr>
         <td align="left">messageDuration</td>
         <td align="center">number</td>
         <td align="left">Success/Error message duration in millisecond</td>
         <td align="center">2000</td>
      </tr>
      <tr>
         <td align="left">disabled</td>
         <td align="center">boolean</td>
         <td align="left">Disable button</td>
         <td align="center">false</td>
      </tr>
      <tr>
         <td align="left">buttonRef</td>
         <td align="center">React.Ref | null</td>
         <td align="left">Button reference</td>
         <td align="center">null</td>
      </tr>
      <tr>
         <td align="left">width</td>
         <td align="center">string | null</td>
         <td align="left">Override button width</td>
         <td align="center">null</td>
      </tr>
      <tr>
         <td align="left">height</td>
         <td align="center">string | null</td>
         <td align="left">Override button height</td>
         <td align="center">null</td>
      </tr>
   </tbody>
</table>
</div>
