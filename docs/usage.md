---
id: usage
title: Usage
---

import Playground from '../src/components/Playground/Playground'
import UsingIcons from '../src/components/DemoCodes/UsingIcons'
import AnchorTag from '../src/components/DemoCodes/AnchorTag'
import Colors from '../src/components/DemoCodes/Colors'
import Size from '../src/components/DemoCodes/Size'
import Style from '../src/components/DemoCodes/Style'
import ReactiveButton from 'reactive-button'
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

:::note

Below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed.

:::

- Initialize a state with string value <code>'idle'</code> and assign it as <strong>'buttonState'</strong> prop. Now it will render an idle text.
- When the button is clicked, set state's value to <code>'loading'</code>. 
- When the task is completed, set state to <code>'success'</code>, <code>'error'</code> or <code>'idle'</code> according to your need.

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
         loadingText={'Loading'}
         successText={'Success'}
         errorText={'Error'}
         type={'button'}
         className={'class1 class2'}
         style={{ borderRadius: '5px' }}
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

export default App;
```

:::note

For non asynchronous task, state management is not needed. Use as like normal button.

:::

import Link from '@docusaurus/Link';

## Other Usage

Reactive Button has all the functionalities of a normal button.

### Color

Reactive Button comes with 10 default color options.

<div>
    <Playground
        code={Colors}
        scope={{ReactiveButton, FontAwesomeIcon, faReply}}
        previewOnly={true}
    />
</div>

``` jsx
<ReactiveButton color="primary"/>
<ReactiveButton color="secondary"/>
<ReactiveButton color="teal"/>
<ReactiveButton color="green"/>
<ReactiveButton color="red"/>
<ReactiveButton color="violet"/>
<ReactiveButton color="blue"/>
<ReactiveButton color="yellow"/>
<ReactiveButton color="dark"/>
<ReactiveButton color="light"/>
```

### Size

There are 4 sizes available.

<div>
    <Playground
        code={Size}
        scope={{ReactiveButton, FontAwesomeIcon, faReply}}
        previewOnly={true}
    />
</div>

``` jsx
<ReactiveButton size="tiny"/>
<ReactiveButton size="small"/>
<ReactiveButton size="medium"/>
<ReactiveButton size="large"/>
```

### Style

Make the buttons more beautiful with these customization options.

<div>
    <Playground
        code={Style}
        scope={{ReactiveButton, FontAwesomeIcon, faReply}}
        previewOnly={true}
    />
</div>

``` jsx
<ReactiveButton outline/>
<ReactiveButton rounded/>
<ReactiveButton shadow/>
```

### Existing State

In your project, There might be existing state for loading indicator which accepts boolean value only. If you don't want to define new state for Reactive Button, then utilize the existing state.

``` jsx
const [loading, setLoading] = useState(false);

return (
   <ReactiveButton
      buttonState={loading ? 'loading' : 'idle'}
      idleText={'Button'}
      loadingText={'Loading'}
   />
);
```

### Without State

You are not limited to use state always.

``` jsx
<ReactiveButton
   onClick={doSomething}
   idleText={"Some Text"}
/>
```

### Using Icons

You can use your own icons. Don't forget to wrap them with a parent element.

<div>
    <Playground
        code={UsingIcons}
        scope={{ReactiveButton, FontAwesomeIcon, faReply}}
        previewOnly={true}
    />
</div>

``` jsx
<ReactiveButton
   idleText={<span><FontAwesomeIcon icon={faReply}/> Send</span>}
/>
```

### Form Submit

If you need to submit form by button clicking, set the <code>type</code> prop as '<strong>submit</strong>'. 

``` jsx
<form>
   <input type="text" name="username"/>
   <input type="password" name="password"/>
   <ReactiveButton
      type={'submit'}
      idleText="Submit"
   />
</form>
```

### Anchor Tag

To use Reactive button as anchor tag, simply wrap it with an anchor tag.

<div>
    <Playground
        code={AnchorTag}
        scope={{ReactiveButton}}
        previewOnly={true}
    />
</div>

``` jsx
<a href="https://github.com/" target="_blank">
   <ReactiveButton idleText="Visit Github" />
</a>
```

<strong>Note:</strong> For more usage, visit <Link to="/docs/Playground">Playground</Link>.

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
         <td align="center">'Success'</td>
      </tr>
      <tr>
         <td align="left">errorText</td>
         <td align="center">string | ReactNode</td>
         <td align="left">Button text when loading failed</td>
         <td align="center">'Error'</td>
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
      <tr>
         <td align="left">animation</td>
         <td align="center">boolean</td>
         <td align="left">Button hover and click animation</td>
         <td align="center">true</td>
      </tr>
   </tbody>
</table>
</div>
