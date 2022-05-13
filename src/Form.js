export default function Form(props) {
  return (
    <form
      style={{ display: 'Flex', justifyContent: 'center' }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="toptext">Top text</label>
      <input
        id="toptext"
        value={props.templateTop}
        onChange={(event) => props.setTemplateTop(event.currentTarget.value)}
        onClick={() => props.setTemplateTop('')}
      />
      <br />
      <label htmlFor="bottomtext">Bottom text</label>
      <input
        id="bottomtext"
        Bottom
        text
        value={props.templateBottom}
        onChange={(event) => props.setTemplateBottom(event.currentTarget.value)}
        onClick={() => props.setTemplateBottom('')}
      />
      <br />
      <label htmlFor="memetemplate">Meme template</label>
      <input
        id="memetemplate"
        value={props.templateImage}
        onChange={(event) => props.setTemplateImage(event.currentTarget.value)}
        onClick={() => props.setTemplateImage('')}
      />
    </form>
  );
}
