import React from "react";
import Modal from "../Modal.js";
import history from "../../history.js";

const StreamDestroy = () => {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button className="ui button ">Cancel</button>
    </div>
  );

  return (
    <>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </>
  );
};

export default StreamDestroy;
