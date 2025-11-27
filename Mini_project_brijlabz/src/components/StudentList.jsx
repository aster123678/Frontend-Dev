import React from "react";

function StudentList({
  students,
  onLoad,
  onAdd,
  onEdit,
  onDelete,
  onViewDetails,
}) {
  return (
    <div>
      <h2>Student List</h2>
      <button onClick={onLoad}>Load Students</button>
      <button onClick={onAdd}>Add Student</button>

      {students.length === 0 ? (
        <p>No students loaded.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <button onClick={() => onEdit(s)}>Edit</button>
                  <button onClick={() => onDelete(s.id)}>Delete</button>
                  <button onClick={() => onViewDetails(s)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
