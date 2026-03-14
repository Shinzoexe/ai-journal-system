import { useState } from "react";
import axios from "axios";

function App() {

const [text,setText] = useState("");
const [result,setResult] = useState(null);

const submitJournal = async () => {

const res = await axios.post("https://ai-journal-system-y0xp.onrender.com/api/journal",{
userId:"123",
text:text
});

setResult(res.data);

};

return (
<div style={{padding:"40px",fontFamily:"Arial"}}>

<h2>AI Journal Analyzer</h2>

<textarea
rows="5"
cols="50"
placeholder="Write your journal..."
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<br/><br/>

<button onClick={submitJournal}>
Analyze Journal
</button>

{result && (

<div style={{marginTop:"20px"}}>

<h3>Emotion: {result.emotion}</h3>

<h4>Keywords:</h4>

<ul>
{result.keywords.map((k,i)=>(
<li key={i}>{k}</li>
))}
</ul>

</div>

)}

</div>
);
}

export default App;