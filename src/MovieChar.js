import React from "react";

export default function MovieChar({ title, url }) {
  console.log(url);
  return (
    <div>
      <div>{title}</div>
      <div>{url}</div>
      <img src={url} alt="no pic" />
    </div>
  );
}
