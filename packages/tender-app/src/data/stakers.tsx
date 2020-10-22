type Stakers = {
  [key: string]: {
    description: string;
    stakerAddress: string;
    title: string;
    available: boolean;
    apy: number;
    logo: string;
    symbol: string;
  };
};

const stakers: Stakers =  {
    "/stakers/livepeer": {
        title: "Livepeer",
        description: "The Livepeer project aims to deliver a live video streaming network protocol that is fully decentralized, highly scalable, crypto token incentivized, and results in a solution which can serve as the live media layer in the decentralized development (web3) stack. In addition, Livepeer is meant to provide an economically efficient alternative to centralized broadcasting solutions for any existing broadcaster. In this document we describe the Livepeer Protocol - a delegated stake based protocol for incentivizing participants in a live video broadcast network in a game-theoretically secure way.",
        stakerAddress: "0xe10101d8E0cDAbD40Ac6C6637C1eC8A11470FFfc",
        available: true,
        apy: 23.3,
        logo: "livepeer.svg",
        symbol: "LPT"
    },
    "/stakers/keep": {
        title: "Keep",
        description: "Keeps provide a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers",
        stakerAddress: "0x4185aaD28Ea6e4AC91Fb73439b29F8CB35fC86C6",
        available: true,
        apy: 8.1,
        logo: "keep.svg",
        symbol: "KEEP"
    },
    "/stakers/graph": {
        title: "The Graph",
        description: "The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.",
        stakerAddress: "",
        available: false,
        apy: 6.5,
        logo: "graph.svg",
        symbol: "GRT"
    }
}

export default stakers;
