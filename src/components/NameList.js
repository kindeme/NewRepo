import React from "react";

function NameList() {
  const names = ["Ryan", "Tiffany", "Hillary"];
  return (
    <div>
      {names.map((name) => {
        return <h2>{name}</h2>;
      })}
    </div>
  );
}

export default NameList;
