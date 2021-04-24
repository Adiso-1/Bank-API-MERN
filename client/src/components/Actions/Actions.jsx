import Deposit from '../Deposit/Deposit';
import Credit from '../Credit/Credit';
import Withdraw from '../Withdraw/Withdraw';
import Transfer from '../Transfer/Transfer';
import './Actions.css';

const Actions = () => {
	return (
		<div className="grid-actions">
			<div className="deposit-cash">
				<Deposit />
			</div>
			<div className="update-credit">
				<Credit />
			</div>
			<div className="withdraw">
				<Withdraw />
			</div>
			<div className="transfer">
				<Transfer />
			</div>
		</div>
	);
};
export default Actions;
