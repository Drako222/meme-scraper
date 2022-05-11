export default function Form(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Top Text:
        <input
          value={props.top}
          onChange={(event) => {
            props.setTop(event.currentTarget.value);
          }}
          onClick={() => props.setTop('')}
        />
      </label>
      <br />
      <label>
        Bottom Text:
        <input
          value={props.bottom}
          onChange={(event) => {
            props.setBottom(event.currentTarget.value);
          }}
          onClick={() => props.setBottom('')}
        />
      </label>
      <br />
      <label>
        Meme template:
        <input
          value={props.image}
          onChange={(event) => {
            props.setImage(event.currentTarget.value);
          }}
          onClick={() => props.setImage('')}
        />
      </label>
    </form>
  );
}
