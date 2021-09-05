/** @format */

import React from "react";

export default function Tags({ tags }) {
  const renderTags = tags.map((tag, i) => <Tag key={i} tag={tag} />);
  return <div className='cic__tags'>{renderTags}</div>;
}

const Tag = ({ tag }) => {
  return (
    <div>
      <p>role</p>
      <div>{tag}</div>
    </div>
  );
};
