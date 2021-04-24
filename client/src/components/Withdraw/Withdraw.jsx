import { useState } from 'react';
import Button from '../Button/Button';
import api from '../../api/api';

const Withdraw = () => {
	const [id, setId] = useState('');
	const [withdraw, setWithdraw] = useState('');
	const [errorMsg, setErrorMsg] = useState(null);
	const [isWithdraw, setIsWithdraw] = useState(false);

	const handleSubmit = async () => {
		try {
			const data = await api.put(`users/withdraw/${id}?cash=${withdraw}`);
			console.log(data);
			setId('');
			setWithdraw('');
			setErrorMsg('');
			setIsWithdraw(true);
			setTimeout(() => {
				setIsWithdraw(false);
			}, 2000);
		} catch (error) {
			setErrorMsg('Error: withdraw not filfiiled');
			setTimeout(() => {
				setErrorMsg('');
			}, 2000);
		}
	};
	return (
		<div className="forms">
			<h1>Withdraw</h1>
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
				<label htmlFor="withdraw">Enter amount to withdraw: </label>
				<input
					value={withdraw}
					required={true}
					onChange={(e) => {
						setWithdraw(e.target.value);
					}}
					min={0}
					id="withdraw"
					type="number"
				/>
			</form>
			<Button text="submit" onClick={handleSubmit} />
			{isWithdraw && <h3>Withdraw successfully fulfilled</h3>}
			<h3>{errorMsg}</h3>
		</div>
	);
};
export default Withdraw;
