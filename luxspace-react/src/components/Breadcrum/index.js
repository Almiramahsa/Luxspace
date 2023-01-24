import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { list } from 'postcss';

export default function Breadcrum({ List }) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map?.((item, index) => {
            const arias = index === list?.length ? { 'aria-label': 'current-page' } : {};
            return (
              <li key={item.url}>
                <Link to={item.url} {...arias}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Breadcrum.propTypes = {
  list: propTypes.array.isRequired,
};
