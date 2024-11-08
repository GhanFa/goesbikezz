import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h2 className="text-center mb-4">
          Your Payment was <span className="text-accent">Cancelled!</span> Try
          Again!
        </h2>
        <Link href="/">
          <button className="btn btn-accent mx-auto">Back to Homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
