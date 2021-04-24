import { useState } from 'react';
import Button from '../Button/Button';
import api from '../../api/api';

const Transfer = () => {
	const [fromId, setFromId] = useState('');
	const [toId, setToId] = useState('');
	const [transfer, setTransfer] = useState('');
	const [errorMsg, setErrorMsg] = useState(null);
	const [isTransfer, setIsTransfer] = useState(false);

	const handleSubmit = async () => {
		try {
			const { data } = await api.put(
				`users/transfer?fromId=${fromId}&toId=${toId}&cash=${transfer}`
			);
			setFromId('');
			setToId('');
			setTransfer('');
			setIsTransfer(true);
			setTimeout(() => {
				setIsTransfer(false);
			}, 2000);
		} catch (error) {
			setErrorMsg('Error: transfer not filfiiled');
			setTimeout(() => {
				setErrorMsg('');
			}, 2000);
		}
	};
	return (
		<div className="forms">
			<h1>Transfer</h1>
			<form>
				<label htmlFor="fromId">Enter Transfer Id: </label>
				<input
					value={fromId}
					required={true}
					onChange={(e) => {
						setFromId(e.target.value);
					}}
					id="fromId"
					type="text"
				/>
			</form>
			<form>
				<label htmlFor="toId">Enter Receiver Id: </label>
				<input
					value={toId}
					required={true}
					onChange={(e) => {
						setToId(e.target.value);
					}}
					id="toId"
					type="text"
				/>
			</form>
			<form>
				<label htmlFor="transfer">Enter amount to transfer: </label>
				<input
					value={transfer}
					required={true}
					onChange={(e) => {
						setTransfer(e.target.value);
					}}
					min={0}
					id="transfer"
					type="number"
				/>
			</form>
			<Button text="submit" onClick={handleSubmit} />
			{isTransfer && <h3>Transfer successfully fulfilled</h3>}
			<h3>{errorMsg}</h3>
		</div>
	);
};
export default Transfer;
