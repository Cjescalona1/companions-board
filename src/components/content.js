import { Header } from "./header";
import { Footer } from "./footer";   
export function Content(){

    
    let weirdos = [1,2,3,4,5,6,7]
    
    return( 
    <>
        <Header></Header> 
        <div className="alfaCont">
        <div className="uwuClaim mobileUwuClaim" ><div className="cummulative" id="Your_RewardM"> 666666</div> <a href="void(0)">
            <div className="claimButton"  id="connectWalletM" >Connect</div>    
            <div className="claimButton hide"  id="ClaimM" >Claim Rewards</div>    
        </a></div>
            <div className="leftBox">
                <div className="leftBoxContent">
                        
               
                <div id="Your_WeirdosD" className="tooltip"> 20/20
                        <div className="rightQ hideMob">
                            <p>Your Companions / your Companions staked </p>
                            <i></i>
                        </div>
                </div>
                    <div className="statistics">Statistics:</div>
                    <div className="statisticList ">
                    <div className="statBox tooltip">
                        <div className="right hideMob">
                            <p>Amount of holder that have their weirdos staked at the Underworld!</p>
                            <i></i>
                        </div>
                        <div className="quant" id="holders">
                            0
                        </div>
                       
                        <div>
                            Holders at the Underworld
                        </div>
                    </div>

                    <div className="statBox tooltip">
                        <div className="right hideMob">
                            <p>All the weirdos without bonus traits earn base $UWU rewards (1 every 24h)</p>
                            <i></i>
                        </div>
                        <div className="quant" id="trait1Total">
                            0
                        
                        </div>
                        
                        <div>
                        Weirdos without Bonus
                        </div>
                    </div>
                    <div className="statBox tooltip">
                        <div className="right hideMob">
                            <p>Weirdos with one bonus trait get +50% extra rewards (1.5 $UWU every 24h)</p>
                            <i></i>
                        </div>
                        <div className="quant" id="trait1">
                            0
                        </div>
                    
                        <div>
                        Weirdos with x1.5 Bonus
                        </div>
                    </div>
                    <div className="statBox tooltip">
                        <div className="right hideMob">
                            <p>Non-common weirdos with two bonus traits get +200% extra rewards (3 $UWU every 24h)</p>
                            <i></i>
                        </div>
                        <div className="quant" id="trait2">
                            0 
                        </div>
                     
                        <div>
                        Weirdos with x3 Bonus
                        </div>
                    </div>
                    <div className="statBox SBLast tooltip">
                        <div className="right hideMob">
                            <p>Rarest weirdos with three bonus traits get +900% extra rewards (10 $UWU every 24h)</p>
                            <i></i>
                        </div>
                        <div className="quant" id="trait3">
                            0
                            </div>
                        <div>
                        Weirdos with x10 Bonus
                        </div> 
                    </div>
                </div> 
                <div className="weirdTrio tooltip">
                    <img src="res/weirdos-05.png" alt=""></img>
                    <div className="bottom"> 
                        <p>Bonus traits of the week: <b>Stumble with Lolipop</b> face, <b>Pink Bathrobe</b> clothing (devils and skellys) and <b>Green Octopus </b>head. You can see the bonuses for having one or more of this traits at our <b>FAQ section</b>.</p>
                        <i></i>
                    </div>                
                </div>  
                 <div id="WalletD" >Your Wallet :11111111111111111111111</div> 
                </div>
            </div>

            <div className="separator"></div>
            <div className="rightBox">
            <div className="rightBoxContent" id="rightBoxContent">
            
                 <div className="weirdos" id="weirdosAll">
                {weirdos.map((i)=>{
                    return( 
                        <div className="emptyWeirdo crossW" key={i} >
                            <img src={`/res/${i}.jpeg`} alt="weirdo" ></img>
                        </div>
                    )

                })}

             
                </div>
            </div>
            </div>
        </div> 
        <Footer></Footer>

    </>
    )
}