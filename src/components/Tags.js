/** @format */

import React from "react";

export default function Tags({ tags }) {
  const renderTags = tags.map((tag, i) => <Tag key={i} tag={tag} />);
  return renderTags;
}

const Tag = ({ tag }) => {
  return <div>{tag}</div>;
};
