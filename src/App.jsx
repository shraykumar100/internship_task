import Container from './components/Container';
import Input from './components/Input';
import Form from './components/Form';

function App() {
	const config = [
		{
			label: 'First name',
			type: 'text',
			required: true,
			placeholder: 'Your answer',
		},
		{
			label: 'Last name',
			type: 'text',
			required: true,
			placeholder: 'Your answer',
		},
		{
			label: 'Email',
			type: 'email',
			required: true,
			placeholder: 'Your answer',
		},
		{
			label: 'Phone number',
			type: 'tel',
			required: true,
			placeholder: 'Your answer',
		},
		{
			label: 'Phone manufacturer',
			type: 'checkbox',
			value: 'Xiaomi',
			options: ['Xiaomi', 'Samsung', 'Apple', 'Motorola'],
			required: true,
			placeholder: 'Your answer',
		},

		{
			label: 'Upload',
			type: 'file',
			required: true,
			placeholder: 'Your answer',
		},
		{
			label: 'Description',
			type: 'text',
			required: true,
			placeholder: 'Your answer',
		},
	];

	const inputFieldRenderer = config.map((elem, idx) => {
		if (elem.type === 'checkbox') {
			return (
				<Container key={idx}>
					<label>{elem.label}</label>
					{elem.options.map((option, idx) => {
						return (
							<div key={idx}>
								<Input type={elem.type} id={option} />
								<label style={{ marginLeft: '10px' }} htmlFor={option}>
									{option}
								</label>
							</div>
						);
					})}
				</Container>
			);
		} else {
			return (
				<Container key={idx}>
					<label>
						{elem.label}{' '}
						{elem.required && (
							<p style={{ display: 'inline-block', color: 'red' }}>*</p>
						)}
					</label>

					<Input
						value={elem.value}
						type={elem.type}
						required={elem.required}
						placeholder={elem.placeholder}
					/>
				</Container>
			);
		}
	});

	return (
		<Form className="app">
			<Container header="header">
				<h1>Mobile phone feedback form</h1>
				<p>Fill the form to give us feedback regarding your device.</p>
				<h3 style={{ display: 'inline-block', color: 'red' }}>* Required</h3>
			</Container>
			{inputFieldRenderer}
		</Form>
	);
}

export default App;
