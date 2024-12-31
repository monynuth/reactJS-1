import React from "react";

const benefits = [
  {
    icon: "fa-truck",
    title: "free shipping",
    description: "Suffered Alteration in Some Form",
  },
  {
    icon: "fa-money",
    title: "cash on delivery",
    description: "The Internet Tend To Repeat",
  },
  {
    icon: "fa-undo",
    title: "45 days return",
    description: "Making it Look Like Readable",
  },
  {
    icon: "fa-clock-o",
    title: "opening all week",
    description: "8AM - 09PM",
  },
];

const Benefits = () => {
  return (
    <div className="benefit">
      <div className="container">
        <div className="row benefit_row">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className={`fa ${benefit.icon}`} aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>{benefit.title}</h6>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
