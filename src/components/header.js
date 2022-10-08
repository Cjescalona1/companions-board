import { useContext, useEffect, useState } from "react";
import useSound from "use-sound";
import Jforest from "../../src/Japanese-Forest.mp3";
import Moralis from "moralis-v1";
import ImgPrender from "../res/Prender.png";
import ImgApagar from "../res/Apagar.png";

import { AppContext } from "../context/ContextApp";
import { TokenABi } from "../ABI/Token";

export function Header() {
  const [play, { pause }] = useSound(Jforest);
  const [onOff, setOnOff] = useState(true);
  const [show, setShow] = useState(false);

  const {
    MyUser,
    setMyUser,
    setToken,
    Token,
    URL,
    ContratNft1,
    ContratStake,
    ApiNFt,
    ContratToken,
    Nfts,
    setNfts,
    Nfts2,
    setNfts2,
    NftsInStake,
    setNftsInStake,
    Refresca,
    setRefresca,
    MisPuntos,
    setMisPuntos,
    login,
    logOut,
    AproNFT,
    ClaimReawrd,
    EsApro,
    Stakeall,
    UnStakeall,
    TokenAproo,
    EsApro2,
    AproNFT2,
  } = useContext(AppContext);

  const AproToken = async () => {
    const sendOptions = {
      chain: "polygon",
      contractAddress: ContratToken,
      functionName: "approve",
      abi: TokenABi,
      params: { spender: ContratStake, amount: Moralis.Units.ETH("10000") },
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
      setRefresca(!Refresca);
    }
  };
  return (
    <>
      <div className="headerBar">
        <ul className="navItems desktopClaim">
          <li className="logoLi">
            <img className="logo" src="res/Logo-02.png" alt=""></img>
          </li>
          <li>
            <a
              href="https://underworldweirdos.com/"
              to="https://underworldweirdos.com/"
            >
              Weirdos Who?
            </a>
          </li>

          <li>
            <a
              href="https://mint.underworldweirdos.com/"
              to="https://mint.underworldweirdos.com/"
            >
              Mint
            </a>
          </li>
          <li>
            <a
              href="https://opensea.io/collection/underworldweirdos-main"
              to="https://opensea.io/collection/underworldweirdos-main"
            >
              Collection
            </a>
          </li>
          <li>
            <a
              href="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3"
              to="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3"
            >
              Token
            </a>
          </li>
          <li>
            <a href="#foot" id="goFoot">
              FAQ
            </a>
          </li>

          {EsApro ? (
            <li>
              <div className="claimButton CBtop">
                <a onClick={Stakeall}>Stake All</a>
              </div>
            </li>
          ) : (
            <li>
              <div className="claimButton CBtop">
                <a onClick={AproNFT} id="aprobar">
                  Approve Stake
                </a>
              </div>
            </li>
          )}

          {TokenAproo <= 0 ? (
            <li>
              <div className="claimButton CBtop">
                <a onClick={AproToken}>Approve Token</a>
              </div>
            </li>
          ) : (
            <li>
              <div className="claimButton CBtop">
                <a onClick={UnStakeall} id="aprobar">
                  UnStake All
                </a>
              </div>
            </li>
          )}

          <li className="uwuClaim ">
            <div className="cummulative" id="Your_Reward">
            {MisPuntos.toFixed(2)}
            </div>{" "}
            <a to="#">
              <div className="claimButton hide"  id="Claim">
                Claim Rewards
              </div>
              {Token == "" ? (
                <div className="claimButton" id="connectWallet">
                  Claim
                </div>
              ) : (
                <div
                  className="claimButton"
                  id="connectWallet"
                  onClick={ClaimReawrd}
                >
                  Claim
                </div>
              )}
            </a>
          </li>
          <li className="socialButtons mobSocialButtons">
            <a>
              {Token == "" ? (
                <img src={ImgPrender} onClick={login} alt=""></img>
              ) : (
                <img src={ImgApagar} onClick={logOut} alt=""></img>
              )}
            </a>
          </li>
          <li className="socialButtons">
            <a href="void(0)" to="#">
              <img
                src="res/62fca40cea0f2647f8c1e172_af-discord-logo.png"
                alt=""
              ></img>
            </a>
          </li>
          <li className="socialButtons">
            <a href="void(0)" to="#">
              <img
                src="res/62fca4a04544ed44ab2aa247_twitter-svgrepo-com.svg"
                alt=""
              ></img>
            </a>
          </li>
          <li className="socialButtons">
            <a href="void(0)" to="#">
              <img
                src="res/62fca5fabaea0e6f942eea96_af-insta-icon.svg"
                alt=""
              ></img>
            </a>
          </li>
          <li>
            {onOff ? (
              <div
                onClick={() => {
                  setOnOff(!onOff);
                }}
              >
                <div id="toggleAudio" className="mute" onClick={play}></div>
              </div>
            ) : (
              <div
                onClick={() => {
                  setOnOff(!onOff);
                }}
              >
                <div
                  id="toggleAudio"
                  className="unmute"
                  onClick={() => {
                    pause();
                  }}
                ></div>
              </div>
            )}
          </li>
        </ul>
        <img src="res/Logo-02.png" className="logoMov hideDesktop" alt=""></img>
        <div className="toggleButton" onClick={() => setShow(!show)}>
          <label htmlfor="toggle" className="hamburger  hideDesktop ">
            <div className="top-bun"></div>
            <div className="meat"></div>
            <div className="bottom-bun"></div>
          </label>
        </div>

        {show ? (
          <div className="nav-wrapper">
            <div>
              <div className="toggleButton" onClick={() => setShow(!show)}>
                <div className="hamburger">
                  <img src="res/Iconos-09.png" alt="close"></img>
                </div>
              </div>
              <ul className="mobUL">
                <div className="walletTitle">Your wallet</div>
                <div id="Wallet" className="hide">
                  wallet{" "}
                </div>
                <div className="stakedTitle">Your weirdos staked</div>
                <div id="Your_Weirdos" className="hide"></div>
                <li>
                  <a href="https://underworldweirdos.com/">Weirdos Who?</a>
                </li>
                <li>
                  <a href="https://mint.underworldweirdos.com/">Mint</a>
                </li>
                <li>
                  <a href="https://opensea.io/collection/underworldweirdos-main">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3">
                    Token
                  </a>
                </li>
                <li>
                  <a href="void(0)">FAQ</a>
                </li>

                <li>
                  <div className="claimButton">
                    <a href="void(0)" id="aprobarM" onclick="NftApro()">
                      Approve Stake
                    </a>
                  </div>
                </li>

                <li>
                  <div className="claimButton">
                    <a href="void(0)" id="tokenM" onclick="aprovartoken()">
                      Approve Token
                    </a>
                  </div>
                </li>
                <li>
                  <div className="claimButton">
                    <a href="void(0)" id="specialM" onclick="NftApro2()">
                      Approve Special
                    </a>
                  </div>
                </li>

                <div className="contMobSocialButtons">
                  <li className="socialButtons mobSocialButtons">
                    <a href="void(0)">
                      <img
                        src="res/62fca40cea0f2647f8c1e172_af-discord-logo.png"
                        alt=""
                      ></img>
                    </a>
                  </li>
                  <li className="socialButtons mobSocialButtons">
                    <a href="void(0)">
                      <img
                        src="res/62fca4a04544ed44ab2aa247_twitter-svgrepo-com.svg"
                        alt=""
                      ></img>
                    </a>
                  </li>
                  <li className="socialButtons mobSocialButtons">
                    <a href="void(0)">
                      <img
                        src="res/62fca5fabaea0e6f942eea96_af-insta-icon.svg"
                        alt=""
                      ></img>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
