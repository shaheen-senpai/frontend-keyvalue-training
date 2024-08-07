/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const EmployeeForm = ({ fields, handleSubmit, handleInputChange, resetContent, isEdit, isCreate, empID, formState }) => {
	const onChange = (event) => {
		handleInputChange(event.target.id, event.target.value);
	};
	
	return (
		<form id="form-create-employee">
			<div className="form-inputs">
				{isEdit && (
					<div className="form-items">
						<label htmlFor="employeeID">Employee ID</label>
						<input
							type="text"
							id="employeeID"
							name="employeeID"
							disabled
							value={empID}
							style={{ backgroundColor: "#d6d6d6" }}
						/>
					</div>
				)}
				{fields.map((field) => (
					<field.Component
						key={field.id}
						{...field}
						handleInputChange={handleInputChange}
						value={formState[field.id]}
					/>
				))}
				{isCreate && (
					<div className="form-items">
					<label htmlFor="employeePassword">Password</label>
					<input
						type="text"
						id="employeePassword"
						name="employeePassword"
						onChange={onChange}
					/>
				</div>
				)}
			</div>
			<div className="form-button">
				<button onClick={handleSubmit} type="submit">
					Submit
				</button>
				<button onClick={resetContent} type="button">
					Cancel
				</button>
			</div>
		</form>
	);
};

export default EmployeeForm;
