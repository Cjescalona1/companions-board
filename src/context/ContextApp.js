import React, { createContext, useState } from "react";

import Moralis from "moralis-v1";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { StakeABi } from "../ABI/Stake";

import axios from "axios";
import Web3 from "web3";

//import Cards from "../components/Cards";
import { nftAbi } from "../ABI/Nft";
import { TokenABi } from "../ABI/Token";



export const AppContext = createContext("");

export const AppProvider = ({ children }) => {
  const [MyUser, setMyUser] = useState("");
  const [Token, setToken] = useState("");
  //const URL = "http://localhost:5000";
  const URL = "https://stakeapi.weirdometada.com";
  const ContratNft1 = "0xa17D29125236000872f1d99c4Aa541A6f4694972";
  const ContratNft2 = "0x208c6cce6f63f0bE1FF32c630240779eC9bba54c";
  const ContratStake = "0x57d285b45A57702d725176228b151fc405C98D28";
  const ContratToken = "0x79E8D08b5e4E1a5faaFBa21c442Be75775b08ce5";
  const ApiNFt = "https://compain.weirdometada.com/";
  const [Nfts, setNfts] = useState([]);
  const [Nfts2, setNfts2] = useState([]);
  const [NftsInStake, setNftsInStake] = useState([]);
  const [Refresca, setRefresca] = useState(false);
  const [MisPuntos, setMisPuntos] = useState(0);
  const serverUrl = "https://0okggzz1ckr6.usemoralis.com:2053/server";
  const appId = "ChC0baYcbQBh3Q4RjKGYYZ5LTN73VdS6NOM3RVDj";

  const [Challenge, setChallenge] = useState("");
  const [ChallengeResult, setChallengeResult] = useState("");
  const [Statistics1, setStatistics1] = useState(0);
  const [Statistics2, setStatistics2] = useState(0);
  const [Statistics3, setStatistics3] = useState(0);
  const [Statistics4, setStatistics4] = useState(0);
  const [Statistics5, setStatistics5] = useState(0);

  const [Listo, setListo] = useState(false);

  const [EsApro, setEsApro] = useState();
  const [EsApro2, setEsApro2] = useState();
  const [TokenAproo, setTokenAproo] = useState();

  Moralis.start({ serverUrl, appId });

  /* Authentication code */
  async function login() {
    let user = Moralis.User.current();

    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(async function (user) {
          setMyUser(user.get("ethAddress"));

          await getChallenge(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      await getChallenge(user.get("ethAddress"));
    }
  }

  async function logOut() {
    await Moralis.User.logOut();
    console.log("Bye " + MyUser);
    setMyUser("");
    setNfts([]);
    setNftsInStake([]);
    setNftsInStake([]);
    setToken("");
    localStorage.removeItem("asdasd");
  }

  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  const AproNFT = async () => {
    const sendOptions = {
      chain: "polygon",
      contractAddress: ContratNft1,
      functionName: "setApprovalForAll",
      abi: nftAbi,
      params: { operator: ContratStake, approved: true },
    };

    if (!Moralis.isWeb3Enabled()) {
      await Moralis.deactivateWeb3();
      await Moralis.enableWeb3();
    }

    const transaction = await Moralis.executeFunction(sendOptions);

    await transaction.wait();
    if (transaction) {
      console.log(transaction);
    }
  };

  const AproNFT2 = async () => {
    const sendOptions = {
      chain: "polygon",
      contractAddress: ContratNft2,
      functionName: "setApprovalForAll",
      abi: nftAbi,
      params: { operator: ContratStake, approved: true },
    };

    if (!Moralis.isWeb3Enabled()) {
      await Moralis.deactivateWeb3();
      await Moralis.enableWeb3();
    }

    const transaction = await Moralis.executeFunction(sendOptions);

    await transaction.wait();
    if (transaction) {
      console.log(transaction);
    }
  };

  const Stakeall = async () => {
    if (Token === "") return console.log("no hay token");
    let MisNFt = [];
    Nfts.map((rest) => {
      MisNFt.push(rest.id);
    });
    console.log(MisNFt);

    const sendOptions = {
      chain: "polygon",
      contractAddress: ContratStake,
      functionName: "stakeBatch",
      abi: StakeABi,
      params: { tokenIds: MisNFt, _collection: ContratNft1 },
    };

    if (!Moralis.isWeb3Enabled()) {
      await Moralis.deactivateWeb3();
      await Moralis.enableWeb3();
      console.log("web3 is ", Moralis.isWeb3Enabled());
    }
    console.log("web3 is ", Moralis.isWeb3Enabled());

    const transaction = await Moralis.executeFunction(sendOptions);

    await transaction.wait();

    if (transaction) {
      console.log(transaction);
      Nfts.map(async (rest) => {
        await axios
          .post(
            `${URL}/nft/add`,
            {
              name: rest.name,
              token_id: rest.id,
              attributes: rest.attributes,
              transaction_hash: transaction.hash,
              collAdd: ContratNft1,
            },
            {
              headers: {
                authorization: `Bearer ${Token}`,
                "Access-Control-Request-Private-Network": "true",
              },
            }
          )
          .then((resp) => {
            setRefresca(!Refresca);
          });
      });
    }
  };
  const UnStakeall = async () => {
    if (Token === "") return console.log("no hay token");
    let MisNFt = [];
    NftsInStake.map((rest) => {
      MisNFt.push(rest.id);
    });
    console.log(MisNFt);

    const sendOptions = {
      chain: "polygon",
      contractAddress: ContratStake,
      functionName: "unstakeBatch",
      abi: StakeABi,
      params: { tokenIds: MisNFt, _collection: ContratNft1 },
    };

    if (!Moralis.isWeb3Enabled()) {
      await Moralis.deactivateWeb3();
      await Moralis.enableWeb3();
      console.log("web3 is ", Moralis.isWeb3Enabled());
    }
    console.log("web3 is ", Moralis.isWeb3Enabled());

    const transaction = await Moralis.executeFunction(sendOptions);

    await transaction.wait();

    if (transaction) {
      console.log(transaction);
      NftsInStake.map(async (rest) => {
        await axios
          .delete(`${URL}/nft/deleteStake/${rest.id}/${ContratNft1}`, {
            headers: {
              authorization: `Bearer ${Token}`,
              "Access-Control-Request-Private-Network": "true",
            },
          })
          .then((resp) => {
            setRefresca(!Refresca);
          });
      });
    }
  };
  const YaAprobo = async (user) => {
    const options = {
      chain: "polygon",
      address: ContratNft1,
      function_name: "isApprovedForAll",
      abi: nftAbi,
      params: { owner: user, operator: ContratStake },
    };
    const allowance = await Moralis.Web3API.native.runContractFunction(options);
    console.log(allowance)

    setEsApro(allowance);
  };
  const YaAprobo2 = async (user) => {
    const options = {
      chain: "polygon",
      address: ContratNft2,
      function_name: "isApprovedForAll",
      abi: nftAbi,
      params: { owner: user, operator: ContratStake },
    };
    const allowance = await Moralis.Web3API.native.runContractFunction(options);
    setEsApro2(allowance);
  };
  const YaAproboToken = async (user) => {
    const options = {
      chain: "polygon",
      address: ContratToken,
      function_name: "allowance",
      abi: TokenABi,
      params: { owner: user, spender: ContratStake },
    };
    const allowance = await Moralis.Web3API.native.runContractFunction(options);

    console.log(allowance);
    setTokenAproo(allowance);
  };


  const BuscarNft = async (user) => {
    const options = {
      chain: "polygon",
      address: user,
      token_address: ContratNft1,
    };
    const polygonNFTs = await Moralis.Web3API.account.getNFTsForContract(
      options
    );
    //console.log(polygonNFTs)

    var nftData = [];
    var datos = [];

    await asyncForEach(polygonNFTs.result, async (registro) => {
      await axios
        .get(registro.token_uri)
        .then((resp) => {
          
          datos = {
            name: resp.data.name,
            id: resp.data.edition,
            attributes: resp.data.attributes,
            img: resp.data.image,
          };
          nftData.push(datos);
        })
        .catch((err) => console.log(err));
    });

    setNfts(nftData);
  };
  const BuscarNft2 = async (user) => {
    const options = {
      chain: "polygon",
      address: user,
      token_address: ContratNft2,
    };
    const polygonNFTs = await Moralis.Web3API.account.getNFTsForContract(
      options
    );


    var nftData = [];
    var datos = [];
    console.log(polygonNFTs.result);

    await asyncForEach(polygonNFTs.result, async (registro) => {
      await axios
        .get(registro.token_uri)
        .then((resp) => {
          console.log(resp);
          datos = {
            name: resp.data.name,
            id: resp.data.edition,
            attributes: resp.data.attributes,
            img: resp.data.image,
          };
          nftData.push(datos);
        })
        .catch((err) => console.log(err));
    });

    setNfts2(nftData);
  };

  const getChallenge = async (user) => {
    await axios
      .get(`${URL}/user/auth/${user.toLowerCase()}`)
      .then(async (resp) => {
        setChallenge(resp.data);
        await signChallenge(resp.data, user);
      })
      .catch((err) => console.log(err));
  };

  const signChallenge = async (data, user) => {
    if (!Moralis.isWeb3Enabled()) {
      await Moralis.deactivateWeb3();
      await Moralis.enableWeb3();
    }

    const web3Js = new Web3(Moralis.provider);

    try {
      web3Js.currentProvider.sendAsync(
        {
          method: "eth_signTypedData",
          params: [data, user],
          from: user,
        },
        (error, res) => {
          if (error) return console.error(error);
          setChallengeResult(res.result);
          verifySignature(data, res.result);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const verifySignature = async (data1, data) => {
    await axios({
      method: "get",
      url: `${URL}/user/auth/${data1[1].value}/${data}`,
    })
      .then(async (response) => {
        if (response.data.status) {
          setToken(response.data.token);
          localStorage.setItem("asdasd", response.data.token);
          setListo(true);
          Swal.fire(`Logged in Successfully`, "", "success");
        } else {
          console.log("Signature not verified");
          Swal.fire(
            `Login failed, please try again and verify that you do not have more than one account connected to the page`,
            "",
            "error"
          );
        }
      })
      .catch((err) => console.log(err));

    // const recovered = await res.text();
  };

  const StakeinNft = async () => {
    await axios
      .get(`${URL}/nft/NftStake/${ContratNft1}`, {
        headers: {
          authorization: `Bearer ${Token}`,
          "Access-Control-Request-Private-Network": "true",
        },
      })
      .then(async (resp) => {
        let nftData = [];
        let datos = [];
        let MispUntos = 0;

        await asyncForEach(resp.data.data, async (registro) => {
          await axios
            .get(`${ApiNFt}${registro.token_id}`)
            .then((resp) => {
              datos = {
                name: resp.data.name,
                id: resp.data.edition,
                attributes: resp.data.attributes,
                img: resp.data.image,
                puntos: registro.Puntos,
              };
              nftData.push(datos);
            })
            .catch((err) => console.log(err));
          MispUntos = MispUntos + registro.Puntos;
        });
        setMisPuntos(MispUntos);

        setNftsInStake(nftData);
      })
      .catch((err) => console.log(err));
  };

  const NftStatistics = async () => {
    await axios
      .get(`${URL}/nft/NftStatistics/${ContratNft1}`, {
        headers: {
          authorization: `Bearer ${Token}`,
          "Access-Control-Request-Private-Network": "true",
        },
      })
      .then(async (resp) => {
        setStatistics1(resp.data.data.NFtAllCant);
        setStatistics2(resp.data.data.NftSintrait);
        setStatistics3(resp.data.data.NftContrait1);
        setStatistics4(resp.data.data.NftContrait2);
        setStatistics5(resp.data.data.NftContrait3);
      })
      .catch((err) => console.log(err));
  };

  const ClaimReawrd = async () => {
    await axios
      .get(`${URL}/nft/ClaimTokenReward/${ContratNft1}`, {
        headers: {
          authorization: `Bearer ${Token}`,
          "Access-Control-Request-Private-Network": "true",
        },
      })
      .then(async (resp) => {
        setRefresca(!Refresca);
        console.log(resp);
        Swal.fire(
          `your payment was made in the  <a href='https://polygonscan.com/tx/${resp.data.data.transactionHash}' target="_blank">hash</a>`,
          "",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
        Swal.fire(`Failed, please try again`, "", "error");
      });
  };

  useEffect(() => {
    if (Listo == true) {
      let user = Moralis.User.current();
      BuscarNft(user.get("ethAddress"));
      BuscarNft2(user.get("ethAddress"));
      YaAprobo(user.get("ethAddress"));
      YaAprobo2(user.get("ethAddress"));
      StakeinNft(user.get("ethAddress"));
      NftStatistics();
      YaAproboToken(user.get("ethAddress"));

      setMyUser(user.get("ethAddress"));
      // console.log(Listo)
    }
  }, [Listo]);

  return (
    <AppContext.Provider
      value={{
        MyUser,
        setMyUser,
        Token,
        setToken,
        URL,
        ContratNft1,
        ContratStake,
        ApiNFt,
        ContratToken,
        Refresca,
        setRefresca,
        setNfts,
        setNftsInStake,
        Nfts,
        NftsInStake,
        MisPuntos,
        setMisPuntos,
        Statistics1,
        Statistics2,
        Statistics3,
        Statistics4,
        Statistics5,
        login,
        logOut,
        StakeinNft,
        NftStatistics,
        ClaimReawrd,
        BuscarNft,
        AproNFT,
        YaAprobo,
        EsApro,
        Stakeall,
        UnStakeall,
        Listo,
        TokenAproo,
        setTokenAproo,
        YaAproboToken,
        BuscarNft2,
        Nfts2,
        setNfts2,
        EsApro2,
        AproNFT2,
        YaAprobo2
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
