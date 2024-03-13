import React, { useState } from 'react';
import SubjectForm from './SubjectForm';
import SubjectList from './SubjectList';
import './App.css'; // Importing CSS for styling

function App() {
  const [subjects, setSubjects] = useState([]);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const deleteSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const editSubject = (index, updatedSubject) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = updatedSubject;
    setSubjects(updatedSubjects);
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    subjects.forEach((subject) => {
      switch (subject.obtainedGrade) {
        case 'O':
          totalGradePoints += 10 * subject.credits;
          break;
        case 'A+':
          totalGradePoints += 9 * subject.credits;
          break;
        case 'A':
          totalGradePoints += 8 * subject.credits;
          break;
        case 'B+':
          totalGradePoints += 7 * subject.credits;
          break;
        case 'B':
          totalGradePoints += 6 * subject.credits;
          break;
        default:
          break;
      }
    });
    return totalGradePoints / subjects.reduce((acc, curr) => acc + curr.credits, 0);
  };

  return (
    <div className="App">
      <h1>CGPA Calculator</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList
        subjects={subjects}
        deleteSubject={deleteSubject}
        editSubject={editSubject}
      />
      <button onClick={() => alert(`Your CGPA is: ${calculateCGPA().toFixed(2)}`)}>
        Calculate CGPA
      </button>
    </div>
  );
}

export default App;
