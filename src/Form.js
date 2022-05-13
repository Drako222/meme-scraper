export default function Form(props) {
  return (
    <form
      style={{ display: 'Flex', justifyContent: 'center' }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Top Text
        <input
          value={props.templateTop}
          onChange={(event) => props.setTemplateTop(event.currentTarget.value)}
          onClick={() => props.setTemplateTop('')}
        />
      </label>
      <br />
      <label>
        Bottom Text
        <input
          value={props.templateBottom}
          onChange={(event) =>
            props.setTemplateBottom(event.currentTarget.value)
          }
          onClick={() => props.setTemplateBottom('')}
        />
      </label>
      <br />
      <label>
        Meme template
        <input
          value={props.templateImage}
          onChange={(event) =>
            props.setTemplateImage(event.currentTarget.value)
          }
          onClick={() => props.setTemplateImage('')}
        />
      </label>
    </form>
  );
}
