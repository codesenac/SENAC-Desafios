/* eslint-disable react/prop-types */
const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      {children}
    </div>
  );
};

export default Card;
