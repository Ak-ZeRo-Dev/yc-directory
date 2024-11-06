import React from "react";
import SearchForm from "./SearchForm";

export default function PinkContainer({ query }: { query?: string }) {
  return (
    <section className="pink_container">
      <p className="tag">Pitch, Vote, and Grow</p>
      <h1 className="heading">
        Pitch Your Startup, <br /> Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <SearchForm query={query} />
    </section>
  );
}
