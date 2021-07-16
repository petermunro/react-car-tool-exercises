import { useState, useEffect } from "react";
import ToolHeader from "../generic/ToolHeader";

function checkHttpStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
}

export const ColorTool = () => {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState("");

  useEffect(
    () =>
      fetch("http://localhost:3010/colors")
        .then(checkHttpStatus)
        .then((res) => res.json())
        .then(setColors)
        .then(() => setError(""))
        .catch((err) => setError(err.response.statusText)),
    []
  );

  const [colorForm, setColorForm] = useState({
    name: "",
    hexcode: "",
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const addColor = () => {
    setColors([
      ...colors,
      {
        ...colorForm,
        id: Math.max(...colors.map((c) => c.id)) + 1,
      },
    ]);
    setColorForm({
      name: "",
      hexcode: "",
    });
  };

  return (
    <>
      <ToolHeader label="Color Tool" />
      <p>{error && `The app encountered an error: ${error}`}</p>
      <ul>
        {colors.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
      <ul>
        <form>
          <div>
            <label htmlFor="color-name-input">Color Name</label>
            <input
              type="text"
              id="color-name-input"
              value={colorForm.name}
              onChange={change}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="color-hexcode-input">Color Hexcode</label>
            <input
              type="text"
              id="color-hexcode-input"
              value={colorForm.hexcode}
              onChange={change}
              name="hexcode"
            />
          </div>
          <div>
            <button type="button" onClick={addColor}>
              Add Color
            </button>
          </div>
        </form>
      </ul>
    </>
  );
};
