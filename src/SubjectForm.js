import React, { useState } from 'react';

function SubjectForm({ addSubject }) {
  const [subjectName, setSubjectName] = useState('');
  const [credits, setCredits] = useState('');
  const [obtainedGrade, setObtainedGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subjectName || !credits || !obtainedGrade) return;
    addSubject({ subjectName, credits: parseInt(credits), obtainedGrade });
    setSubjectName('');
    setCredits('');
    setObtainedGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject Name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Credits"
        value={credits}
        onChange={(e) => setCredits(e.target.value)}
      />
      <select value={obtainedGrade} onChange={(e) => setObtainedGrade(e.target.value)}>
        <option value="">Select Grade</option>
        <option value="O">O</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="U">U (Fail)</option>
      </select>
      <button type="submit">Add Subject</button>
    </form>
  );
}

export default SubjectForm;
