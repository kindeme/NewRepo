import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        Iam {person.name} I am {person.age}. I know{person.skill}
      </h2>
    </div>
  );
}

export default Person;
