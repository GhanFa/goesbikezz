import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h2 className="text-center mb-4">
          Your Payment was <span className="text-green-600">Successful!</span>
          Thank you!
        </h2>
        <Link href="/">
          <button className="btn btn-primary mx-auto">Back to Homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
