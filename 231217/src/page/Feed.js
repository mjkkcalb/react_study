import React from "react";
import FeedProvider from "../context/FeedContext";
import FeedHighProvider from "../context/FeedHighContext";
import Home from "../components/feed/Home";

const Feed = () => {
  return (
    <div>
      <FeedHighProvider>
        <FeedProvider>
          <Home />
        </FeedProvider>
      </FeedHighProvider>
    </div>
  );
};

export default Feed;
