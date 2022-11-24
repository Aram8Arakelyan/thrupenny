import TButton from '../buttons/TButton';

import styles from './index.module.css';

import Wallet from '../../images/icons/wallet.svg';

const ConnectWalletButton = () => {
  return (
    <TButton className={styles.connect_wallet_button}>
      <img src={Wallet} alt="Wallet" />
      <span>Connect Wallet</span>
    </TButton>
  );
};

export default ConnectWalletButton;
