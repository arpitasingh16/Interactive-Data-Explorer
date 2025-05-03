import React from 'react';

function Error({ message }) {
  return (
    <div className="error">
      <p>Oops! Something went wrong:</p>
      <p>{message}</p>
      <p>Please try again later.</p>
    </div>
  );
}

export default Error;