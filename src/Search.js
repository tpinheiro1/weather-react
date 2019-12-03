import React from "react";

export default function Search() {
  return (
    <form className="Search">
      <input type="search" className="form-control" />

      <input
        type="submit"
        value="Search"
        type="button"
        className="btn btn-primary"
      />
    </form>
  );
}
