import React from "react"

const Card = ({ children, header }) => (
  <section className="card">
    <h1 className="card-header">{header}</h1>
    {children}
  </section>
)

export default Card;