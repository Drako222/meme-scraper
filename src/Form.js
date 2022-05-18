export default function Form(props) {
  return (
    <form
      style={{ display: 'Flex', justifyContent: 'center' }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Top text
        <input
          onChange={(event) => {
            props.setTop(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="bottomtext">Bottom text</label>
      <input
        id="bottomtext"
        onChange={(event) => {
          props.setBottom(event.currentTarget.value);
        }}
        onClick={() => props.setBottom('')}
      />
      <br />
      <label htmlFor="memetemplate">Meme template</label>
      <input
        id="memetemplate"
        onChange={(event) => {
          props.setImage(event.currentTarget.value);
        }}
        onClick={() => props.setImage('')}
      />
    </form>
  );
}
