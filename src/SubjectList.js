import React, { useState } from 'react';

function SubjectList({ subjects, deleteSubject, editSubject }) {
  const [editedSubject, setEditedSubject] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (index) => {
    setEditedSubject(subjects[index]);
    setIsEditing(true);
  };

  const handleSave = (index) => {
    editSubject(index, editedSubject);
    setIsEditing(false);
    setEditedSubject({});
  };

  return (
    <div>
      <h2>Subjects</h2>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Obtained Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{isEditing && editedSubject === subject ? (
                <input
                  type="text"
                  value={editedSubject.subjectName}
                  onChange={(e) => setEditedSubject({ ...editedSubject, subjectName: e.target.value })}
                />
              ) : (
                subject.subjectName
              )}</td>
              <td>{subject.credits}</td>
              <td>{isEditing && editedSubject === subject ? (
                <select
                  value={editedSubject.obtainedGrade}
                  onChange={(e) => setEditedSubject({ ...editedSubject, obtainedGrade: e.target.value })}
                >
                  <option value="">Select Grade</option>
                  <option value="O">O</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="U">U (Fail)</option>
                </select>
              ) : (
                subject.obtainedGrade
              )}</td>
              <td>
                {isEditing && editedSubject === subject ? (
                  <button onClick={() => handleSave(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
                <button onClick={() => deleteSubject(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectList;
