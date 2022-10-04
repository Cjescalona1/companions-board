import { useState } from "react";    
import useSound from "use-sound";
import Jforest from "../../src/Japanese-Forest.mp3"

export function Header(){

    const [play, {pause}] = useSound(Jforest);
    const [onOff, setOnOff] = useState(true);
    const[show,setShow]=useState(false);
    return(
        <>  
        <div className="headerBar">
                        <ul className="navItems desktopClaim">
                            <li className="logoLi">
                            <img className="logo" src="res/Logo-02.png" alt=""></img>
                            </li>
                            <li>
                                <a href="https://underworldweirdos.com/" to="https://underworldweirdos.com/" >Weirdos Who?</a>    
                            </li>
                        
                            <li><a href="https://mint.underworldweirdos.com/" to="https://mint.underworldweirdos.com/">Mint</a></li>
                            <li><a href="https://opensea.io/collection/underworldweirdos-main" to="https://opensea.io/collection/underworldweirdos-main">Collection</a></li>
                            <li><a href="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3" to="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3">Token</a></li>
                            <li><a href="#foot" id="goFoot" >FAQ</a></li>
                            <li> 
                            <div className="claimButton CBtop">
                            <a href="void(0)" to="#" id="aprobar" onClick="NftApro()">Approve Stake</a>
                            </div>
                            </li>
                            <li>
                            <div className="claimButton CBtop">
                                <a href="void(0)" to="#" id="token" onClick="aprovartoken()">Approve Token</a>
                            </div>
                            </li> 

                            <li className="uwuClaim " ><div className="cummulative" id="Your_Reward"> </div> <a href="void(0)" to="#">
                                <div className="claimButton hide" onClick="Claim()"   id="Claim">Claim Rewards</div>
                                <div className="claimButton" onClick="connectWallet()" id="connectWallet">Connect</div>
                                </a>
                            </li>
                            <li className="socialButtons"><a href="void(0)" to="#">
                                <img src="res/62fca40cea0f2647f8c1e172_af-discord-logo.png" alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons"><a href="void(0)" to="#">
                                <img src="res/62fca4a04544ed44ab2aa247_twitter-svgrepo-com.svg" alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons" >
                                <a href="void(0)" to="#">
                                    <img src="res/62fca5fabaea0e6f942eea96_af-insta-icon.svg" alt=""></img>
                                </a>
                            </li>
                            <li> 
                                {onOff?
                                <div onClick={()=>{setOnOff(!onOff)}}>
                                    <div id="toggleAudio" className="mute" onClick={play}> 
                                    </div>
                                </div>
                                :
                                <div onClick={()=>{setOnOff(!onOff)}}>
                                    <div id="toggleAudio" className="unmute" onClick={()=>{pause()}}> 
                                    </div>
                                </div>

                                }
                                
                            </li>
                        </ul>
                        <img src="res/Logo-02.png" className="logoMov hideDesktop" alt=""></img>
                        <div className="toggleButton" onClick={()=>setShow(!show)} >
                        <label htmlfor="toggle" className="hamburger  hideDesktop ">
                        <div className="top-bun"></div>
                        <div className="meat"></div>
                        <div className="bottom-bun"></div>
                        </label>
                        </div>
                        

                {
                show?
                <div className="nav-wrapper">
                <div>
                <div className="toggleButton" onClick={()=>setShow(!show)} >
                    <div className="hamburger">
                        <img src="res/Iconos-09.png" alt="close"></img>
                    </div>
                </div>
                    <ul className="mobUL">
                        
                        <div className="walletTitle" >Your wallet</div>
                        <div id="Wallet" className="hide" >wallet </div>
                        <div className="stakedTitle">Your weirdos staked</div>
                        <div id="Your_Weirdos" className="hide"></div>    
                        <li>
                            <a href="https://underworldweirdos.com/">Weirdos Who?</a>
                        </li>
                        <li>
                            <a href="https://mint.underworldweirdos.com/">Mint</a>
                        </li>
                        <li>
                            <a href="https://opensea.io/collection/underworldweirdos-main">Collection</a>
                        </li>
                        <li>
                            <a href="https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xc586a4a0db0bc1169d490b8fbf0633cc06d0f0d3">Token</a>
                        </li>
                        <li>
                            <a href="void(0)">FAQ</a>
                        </li>
                        
                        
                        <li> 
                            <div className="claimButton">
                            <a href="void(0)" id="aprobarM" onclick="NftApro()">Approve Stake</a>
                            </div>
                        </li>     

                        <li> 
                            <div className="claimButton">
                            <a href="void(0)" id="tokenM" onclick="aprovartoken()" >Approve Token</a>
                            </div>    
                        </li>
                        <li> 
                            <div className="claimButton">
                            <a href="void(0)" id="specialM" onclick="NftApro2()"   >Approve Special</a>
                            </div>    
                        </li>
                        

                        <div className="contMobSocialButtons">
                            <li className="socialButtons mobSocialButtons"><a href="void(0)">
                                <img src="res/62fca40cea0f2647f8c1e172_af-discord-logo.png" alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons mobSocialButtons"><a href="void(0)">
                                <img src="res/62fca4a04544ed44ab2aa247_twitter-svgrepo-com.svg" alt=""></img>
                            </a>
                            </li>
                            <li className="socialButtons mobSocialButtons" ><a href="void(0)">
                                <img src="res/62fca5fabaea0e6f942eea96_af-insta-icon.svg" alt=""></img>
                            </a>
                            </li>
                        </div> 
                    </ul>  
                </div> 
            </div> 
            :
            null
            } 
        
        </div>
        </>     
    )       
}       