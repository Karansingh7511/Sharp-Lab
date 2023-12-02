import React, { useState } from 'react';
import './Transaction.css';

const Transaction = () => {
  // State to manage form inputs and errors
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});
  const [submit,setSubmit]=useState(false);

  // Validation function for Ethereum address
  const validateWalletAddress = (address) => {
    // Simple Ethereum address regex pattern
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    return addressRegex.test(address);
  };

  // Validation function for amount
  const validateAmount = (amount) => {
    const parsedAmount = parseFloat(amount);
    return !isNaN(parsedAmount) && parsedAmount >= 0 && parsedAmount <= 10000;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate wallet address
    if (!validateWalletAddress(walletAddress)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        walletAddress: 'Invalid Ethereum address format',
      }));
      return;
    }

    // Validate amount
    if (!validateAmount(amount)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: 'Invalid amount. Must be a number between 0 and 10,000',
      }));
      return;
    }

    // If validation passes, you can proceed with your transaction logic here
    console.log('Form submitted successfully!');
    setSubmit(true);
  };

  return (
    <div className="transaction-container">
      <h2>Transaction Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="walletAddress">Wallet Address:</label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => {
              setWalletAddress(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, walletAddress: '' }));
            }}
          />
          {errors.walletAddress && <p>{errors.walletAddress}</p>}
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, amount: '' }));
            }}
          />
          {errors.amount && <p>{errors.amount}</p>}
        </div>
        <button type="submit">Submit</button>
        {submit && <p className='form-submit'>{"Form submitted successfully!"}</p>}
      </form>
    </div>
  );
};

export default Transaction;