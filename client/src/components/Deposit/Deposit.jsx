import { useState } from 'react';
import Button from '../Button/Button';
import api from '../../api/api';

const Deposit = () => {
	const [id, setId] = useState('');
	const [cash, setCash] = useState('');
	const [errorMsg, setErrorMsg] = useState(null);
	const [isDeposit, setIsDeposit] = useState(false);

	const handleSubmit = async () => {
		try {
			const { data } = await api.put(`users/deposit/${id}?cash=${cash}`);
			console.log(data);
			setId('');
			setCash('');
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
			<h1>Deposit</h1>
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
					<label htmlFor="cash">Enter amount to deposit: </label>
					<input
						value={cash}
						required={true}
						onChange={(e) => {
							setCash(e.target.value);
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
export default Deposit;
