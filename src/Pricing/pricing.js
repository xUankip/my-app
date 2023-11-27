import React from "react";

const planContents = [
  {
    header: "Free",
    price: 0,
    features: [
      "10 users included",
      "2 GB of storage",
      "Email support",
      "Help center access"
    ],
    buttonLabel: "Sign up for free",
    outline: true
  },
  {
    header: "Pro",
    price: 15,
    features: [
      "20 users included",
      "10 GB of storage",
      "Priority email support",
      "Help center access"
    ],
    buttonLabel: "Get started",
    outline: false
  },
  {
    header: "Enterprise",
    price: 29,
    features: [
      "30 users included",
      "15 GB storage",
      "Phone and email support",
      "Help center access"
    ],
    buttonLabel: "Contact us",
    outline: false
  }
];

const Plan = props => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal mb-4 rounded-3">
          {props.header}
        </h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`$${props.price}`}
          <small className="text-muted">
            / mo
          </small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {props.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <button
          className={`btn btn-lg btn-block ${
            props.outline
              ? "btn-outline-primary"
              : "btn-primary"
          }`}
          type="button"
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
};

const Plans = () => {
  const plans = planContents.map((obj, i) => {
    return (
      <Plan
        key={obj.header}
        header={obj.header}
        price={obj.price}
        features={obj.features}
        buttonLabel={obj.buttonLabel}
        outline={obj.outline}
      />
    );
  });

  return (
    <div className="card-deck mb-4 text-cente row">
      {plans}
    </div>
  );
};

export default Plans;