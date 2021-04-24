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
		} catch (error) {
			setErrorMsg('Error: transfer not filfiiled');
			setTimeout(() => {
				setErrorMsg('');
			}, 2000);
		}
	};
	return (
		<div>
			<h1>Transfer</h1>
		</div>
	);
};
export default Transfer;
