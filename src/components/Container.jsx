/* eslint-disable react/prop-types */
const Container = ({ children, header }) => {
	return <div className={`container ${header && header}`}>{children}</div>;
};

export default Container;
