import { useContext } from "react";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";
import { deleteStudent } from "../redux/studentSlice";

function StudentCard({ student }) {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <h3>Name : {student.name}</h3>

      <p>Course : {student.course}</p>

      <p>Age : {student.age}</p>

      <button
        onClick={() => dispatch(deleteStudent(student.id))}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;