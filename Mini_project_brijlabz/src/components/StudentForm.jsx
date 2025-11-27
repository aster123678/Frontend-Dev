import React, { useState } from "react";

function StudentForm({ initialData, onCancel, onSave }) {
  const [name, setName] = useState(initialData?.name || "");
  const [section, setSection] = useState(initialData?.section || "");
  const [marks, setMarks] = useState(initialData?.marks || "");
  const [grade, setGrade] = useState(initialData?.grade || "");

  function handleSubmit(e) {
    e.preventDefault();
    onSave({
      ...initialData,
      name,
      section,
      marks: Number(marks),
      grade,
    });
  }

  return (
    <div>
      <h2>{initialData ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Section: </label>
          <input
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Marks: </label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Grade: </label>
          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "8px" }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
