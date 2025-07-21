import React from "react";
import "./CompanyList.css";

export default function CompanyList({ companies, onSelect }) {
  return (
    <ul className="company-list">
      {companies.map((c) => (
        <li key={c.symbol} onClick={() => onSelect(c.symbol)}>
          {c.name}
        </li>
      ))}
    </ul>
  );
}
