import {
  ConnectWallet,
  useAddress,
  useClaimToken,
  useContract,
} from "@thirdweb-dev/react";
import { useState } from "react";
import "./App.css";

function App() {
  const address = useAddress();
  const [amountToClaim, setAmountToClaim] = useState("");
  const { contract } = useContract(
    process.env.REACT_APP_THIRD_WEB_TOKEN_DROP_ADDRESS
  );
  const { mutate: claimTokens } = useClaimToken(contract);

  async function claim() {
    if (!amountToClaim || !address) {
      return;
    }

    try {
      claimTokens(
        {
          to: address,
          amount: amountToClaim,
        },
        {
          onSuccess: (data) => {
            console.log("Claimed", data);
            alert("Successfully claimed!");
          },
        }
      );
    } catch (e) {
      console.error(e);
      alert(e);
    }
  }

  return (
    <div className="App">
      {
        // Change the code below
      }

      <ConnectWallet />

      <input
        type="text"
        name="amountToClaim"
        id="amountToClaimInput"
        placeholder="0.00"
        aria-describedby="price-currency"
        value={amountToClaim}
        onChange={(e) => setAmountToClaim(e.target.value)}
      />

      <button onClick={claim}>Claim</button>

      {
        // Change the code above
      }
    </div>
  );
}

export default App;
