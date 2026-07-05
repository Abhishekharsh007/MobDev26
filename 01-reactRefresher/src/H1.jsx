import React from 'react'

// const H1 = (props) => {
//   return (
//       <h1>H1 - { props.title }</h1>
//   )
// }

const H1 = ({ title, desc }) => {
    return <h1>H1 - {title} ==C { desc } </h1>;
};

export default H1;
