/* eslint-disable react/prop-types */
const Form = ({ children }) => {
	const formHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form className="app" onSubmit={formHandler}>
			{children}
			<div className="submit">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default Form;
