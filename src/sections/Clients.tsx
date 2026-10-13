import { clientReviews } from "../constants";

export const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from my clients</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, review }) => (
          <div key={id} className="client-review">
            <p className="font-light text-white">{review}</p>
            <p className="mt-7 font-semibold text-white-800">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
