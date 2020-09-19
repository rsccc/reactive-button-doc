const ShowcasePlaygroundCode = `function App() {
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
          width={'100px'}
          height={'35px'}
    />
  );
}
`.trim();

export default ShowcasePlaygroundCode;