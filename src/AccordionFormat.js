import React, { useState } from "react";

const AccordionFormat = ({ header, body, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="question--container">
      {/* Question */}
      <button className="accordion" onClick={() => setOpen(!open)}>
        {header}
        {!open && <p>+</p>}
        {open && <p>x</p>}
      </button>

      {/* Answer */}
      {open && (
        <div className="panel">
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionFormat;
