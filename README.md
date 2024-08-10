# Web application for Pryzm

User interaction, deposit management, and portfolio display. Handles business logic, user authentication, and communication with the blockchain.

### Tasks

- [] User can connect their wallet to the application (Keplr, Ledger, etc.)
- [] User should be able to select token to deposit. (deposit to smart contract? or Pryzm)
- [] User should be able to see their portfolio
- [] User should be able withdraw their funds (to their wallet)

## Examples

- [Pendle](https://www.pendle.finance)
- [DefiLlama](https://defillama.com/protocol/pendle#information)

### Tech Stack

- [Cosmos Kit](https://docs.cosmology.zone/cosmos-kit)

  - User Deposits Funds: The user deposits ATOM via the frontend UI.
  - Message to Smart Contract (SC): The frontend sends a message to the smart contract (SC) to handle the deposit.

### API

pryzmtestnet:

- [API](https://testnet-api.pryzm.zone)
- [RPC](https://testnet-rpc.pryzm.zone)

## Live Demo

- [Pryzm yield](https://pryzm-yield-test-qfdx9zdd6-ghassan-aldarwishs-projects.vercel.app/)
