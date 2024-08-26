
import React from 'react';

// don't change the Component name "App"
function App() {
    
  const[feedback, setFeedback] = React.useState('Dummy feedback')
  const[student, setStudent] = React.useState('Noman Shah')
    
  function handleChangeFeedback (event) {
      setFeedback(event.target.value)
  }
  
  function handleChangeName (event) {
      setStudent(event.target.value)
  }
  
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleChangeFeedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={handleChangeName}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;