


export default function EventHandlers() {
const [top, setTop] = useState('Meme');
const [bottom, setBottom] = useState('Meme Again');
const [image, setImage] = useState('bad');
  return (
    <>

function InputTop(props) {
  return (

  );
}

function InputBottom(props) {
  return (
    <label>
      Bottom Text:
      <input value="neco" />
    </label>
  );
}

function Input(props) {
  return (
    <label>
      Meme template:
      <input value="neco" />
    </label>
  );
}
      <button
        // The onClick prop allows us to pass a function
        // that will get run when we click
        onClick={() => alert('hello')}
      >
        Alert
      </button>
      <div />
      <input
        // This is also called a "Controlled Component", look
        // at the ControlledComponentsForm.js file for an
        // example
        value={name}
        // The onChange prop allows us to pass a function
        // that will get run when the user changes the
        // text in the box
        onChange={(event) => setName(event.currentTarget.value)}
      />
      Name: {name}
    </>
  );
}
