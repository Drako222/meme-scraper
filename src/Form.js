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
          value={top}
          onChange={(event) => {
            setTop(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="bottomtext">Bottom text</label>
      <input
        id="bottomtext"
        Bottom
        text
        value={props.bottom}
        onChange={(event) => {
          props.setBottom(event.currentTarget.value);
        }}
        onClick={() => props.setBottom('')}
      />
      <br />
      <label htmlFor="memetemplate">Meme template</label>
      <input
        id="memetemplate"
        value={props.image}
        onChange={(event) => {
          props.setImage(event.currentTarget.value);
        }}
        onClick={() => props.setImage('')}
      />
    </form>
  );
}
