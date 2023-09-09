import React from "react";
import { GiRoundStar } from "react-icons/gi";

const BlogContentCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-black flex items-center gap-2">
        <GiRoundStar color="#7fafb1" />
        {item.heading}
      </h4>
      <p>{item.desc}</p>
    </div>
  );
};

export default BlogContentCard;
