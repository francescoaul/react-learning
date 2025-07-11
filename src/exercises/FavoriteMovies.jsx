import { useState } from "react";

export default function FavoriteMovies() {
  // ─── 1. State ───────────────────────────────────────────────────
  const [movies, setMovies] = useState([]); // holds { id, title } objects
  const [text, setText]     = useState(""); // controlled input value

  // ─── 2. Add a new movie ─────────────────────────────────────────
  function addMovie() {
    const title = text.trim();
    if (!title) return;                  // ignore empty input

    const newMovie = {
      id: Date.now(),                     // unique identifier
      title,                              // the trimmed title
    };

    // ─── 2a. Update state *inside* this function ─────────────────
    setMovies(prev => [...prev, newMovie]);
    setText("");                          // clear input field
  }

  // ─── 3. Remove by id ────────────────────────────────────────────
  function removeMovie(id) {
    setMovies(prev => prev.filter(movie => movie.id !== id));
  }

  // ─── 4. Render UI ───────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "1rem" }}>
      <h2>Favorite Movie List</h2>

      {/* Input + Add button */}
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a movie title"
        style={{ width: "70%", marginRight: "0.5rem" }}
      />
      <button onClick={addMovie}>Add Movie</button>

      {/* Movie list */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        {movies.map(movie => (
          <li key={movie.id} style={{ margin: "0.5rem 0" }}>
            {/* Display the title, not the object */}
            {movie.title}
            <button
              onClick={() => removeMovie(movie.id)}
              style={{ marginLeft: "0.5rem" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
