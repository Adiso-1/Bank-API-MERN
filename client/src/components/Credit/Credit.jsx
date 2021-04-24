import { useState } from 'react';
import Button from '../Button/Button';
import api from '../../api/api';

const Credit = () => {
	const [id, setId] = useState('');
	const [credit, setCredit] = useState('');
	const [errorMsg, setErrorMsg] = useState(null);
	const [isDeposit, setIsDeposit] = useState(false);

	const handleSubmit = async () => {
		try {
			const { data } = await api.put(`users/credit/${id}?credit=${credit}`);
			console.log(data);
			setId('');
			setCredit('');
			setErrorMsg('');
			setIsDeposit(true);
			setTimeout(() => {
				setIsDeposit(false);
			}, 2000);
		} catch (error) {
			setErrorMsg('Id is invalid');
		}
	};
	return (
		<div>
			<h1>Update Credit</h1>
			<div className="forms">
				<form>
					<label htmlFor="id">Enter Id: </label>
					<input
						value={id}
						required={true}
						onChange={(e) => {
							setId(e.target.value);
						}}
						id="id"
						type="text"
					/>
				</form>
				<form>
					<label htmlFor="cash">Enter amount to credit: </label>
					<input
						value={credit}
						required={true}
						onChange={(e) => {
							setCredit(e.target.value);
						}}
						id="cash"
						type="text"
					/>
				</form>
			</div>
			<Button text="submit" onClick={handleSubmit} />
			{isDeposit && <h3>Deposit fulfilled</h3>}
			<h3>{errorMsg}</h3>
		</div>
	);
};
export default Credit;
