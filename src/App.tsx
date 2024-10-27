import SvgIcon from "@/components/svg"
import { TierList } from "@/utils/constants"
import VectorDash from "@/assets/vector/vector-dashed.png"
import VectorChart from '@/assets/vector/vector-chart.png'
import VectorLineChart from '@/assets/vector/vector-line-chart.png'
import Glow1 from '@/assets/vector/glow-1.png'
import Glow2 from '@/assets/vector/glow-2.png'
import Glow3 from '@/assets/vector/glow-3.png'
import { useState } from "react"

function App() {

  const [selectedInf, setSelectedInf] = useState(1)

  return (
    <div className="bg-neutral-bg-1-rest w-full h-screen min-h-fit mx-auto max-w-screen-2xl flex flex-col">
      <section className="bg-blue-gradient-opacity relative max-[500px]:flex flex-col md:gap-x-8 md:gap-y-4 gap-x-2 py-4 px-10 grid grid-rows-2 grid-flow-col border-b border-neutral-bd-1-rest">
        <div className="flex flex-col gap-3 md:mt-auto col-span-2 md:col-span-1 md:row-span-1 justify-center">
          <h3 className="text-white font-bold max-w-[425px] text-2xl">
            Unlock Rewards with the Copin Referral Program
          </h3>
        </div>
        <div className="flex flex-col gap-1 h-full justify-center md:justify-start">
          <div className="text-neutral-fg-3-rest text-[13px] leading-6">
            <p>Earn rebates and commissions by inviting friends.</p>
            <p>Grow your network and benefit from our 6-tier reward system.</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span className="text-neutral-fg-blue-3-rest text-[13px] leading-6 font-semibold">View referral Ranking</span>
            <SvgIcon
              iconName="arrow-right"
              className="size-4 fill-neutral-fg-blue-3-rest mt-1"
            />
          </div>
        </div>
        <div className="flex relative flex-col max-[500px]:mx-auto gap-2 ml-auto max-w-full mt-auto md:row-span-2 col-span-1">
          <div className="relative max-w-full">
            <img
              src={VectorDash}
              alt="Vector Dash"
              className="w-fit max-w-full h-auto"
            />
            <img
              src={VectorChart}
              alt="Vector Chart"
              className="absolute top-0 z-10 w-full object-cover"
            />
            <img
              src={VectorLineChart}
              alt="Vector Line Chart"
              className="absolute top-0 z-20 w-full object-cover"
            />
          </div>
          <div className="w-full z-10 h-14">
            <div className="absolute bottom-0 w-full h-full">
              <div className="grid grid-cols-6 max-w-full h-full">
                {TierList.map((tier) => (
                  <div className="h-full flex items-center flex-col relative">
                    {/* <div className={`diamond-clip-path bg-blue-gradient-4 w-16 absolute bottom-6 rotate-180 h-40`}></div> */}
                    {selectedInf === tier.tierNum
                      &&
                      <>
                        <div className={`absolute flex flex-col gap-2 z-50 w-32 ${tier.dot} ${tier.tierNum < 4 && 'flex-col-reverse'}`}>
                          <div className={`size-[6px] border border-neutral-fg-blue-4-rest rounded-full bg-white 
                            ${tier.tierNum === 6 ? 'ml-auto' : tier.tierNum !== 1 && 'mx-auto'}`}></div>
                          <div className="flex flex-col z-50 p-1 glass border rounded border-neutral-100">
                            <span className="text-[9.81px] text-neutral-fg-gray-1-rest">F0 (Rebate): 5%</span>
                            <span className="text-[9.81px] text-neutral-fg-gray-1-rest">F1 (Commission): 35%</span>
                            <span className="text-[9.81px] text-neutral-fg-gray-1-rest">F2 (Commission): 10%</span>
                          </div>
                        </div>
                        <div className="absolute h-full bottom-2 z-30 flex items-center justify-center">
                          <img
                            src={Glow3}
                            alt="glow"
                            className="h-full w-full"
                          />
                          <img
                            src={Glow1}
                            alt="glow"
                            className="absolute bottom-0 z-10 h-full w-full"
                          />
                          <img
                            src={Glow2}
                            alt="glow"
                            className="absolute bottom-0 z-10 h-full "
                          />
                        </div>
                      </>
                    }
                    <div className="flex flex-col gap-2 items-center absolute bottom-0 cursor-pointer" onClick={() => setSelectedInf(tier.tierNum)}>
                      <div className={`md:size-8 size-6 rounded-full flex items-center relative justify-center ${tier.bg[0]}`}>
                        <div className="z-0 absolute opacity-75">
                          {
                            tier.spinIcon && (
                              <SvgIcon
                                iconName={tier.spinIcon.iconName}
                                className={tier.spinIcon.className}
                              />
                            )
                          }
                          {tier.twinkleIcons.map((twinkle) => (
                            <SvgIcon
                              iconName={twinkle.iconName}
                              className={twinkle.className}
                            />
                          ))}
                        </div>
                        <div className={`relative z-30 md:size-7 size-6 rounded-full flex items-center justify-center inner-shadow ${tier.bg[1]}`}>
                          <div className="relative md:size-6 size-5 z-10">
                            {tier.starIcons.map((star) => (
                              <SvgIcon
                                iconName={star.iconName}
                                className={star.className}
                              />
                            ))}
                          </div>
                          {tier.leafIcons.map((leaf) => (
                            <SvgIcon
                              iconName={leaf.iconName}
                              className={leaf.className}
                            />
                          ))}
                          <div className={`absolute md:size-4 size-3 z-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${tier.bg[2]}`}>
                            <span className="md:text-xs text-[10px] font-bold text-white md:tracking-wider"> {tier.tierNum} </span>
                          </div>
                        </div>
                      </div>
                      <p className="md:text-xs text-[10px] text-neutral-fg-gray-1-rest">Tier {tier.tierNum}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <SvgIcon
            iconName="light-bulb"
            className="size-5"
          />
          <h3 className="text-base text-neutral-fg-gray-1-rest">How It Works?</h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          <div className="p-4 flex flex-col gap-4 rounded border border-neutral-bd-1-rest">
            <div className="w-[46px] h-[46px] bg-neutral-gradient-1 rounded-[2px] flex items-center justify-center">
              <SvgIcon
                iconName="system"
                className="size-5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-fg-gray-1-rest">1. Two-Level Referral System</h3>
              <p className="text-[13px] text-neutral-fg-3-rest">Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-4 rounded border border-neutral-bd-1-rest">
            <div className="w-[46px] h-[46px] bg-neutral-gradient-1 rounded-[2px] flex items-center justify-center">
              <SvgIcon
                iconName="people"
                className="size-5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-fg-gray-1-rest">2. Earn Rebates & Commissions</h3>
              <p className="text-[13px] text-neutral-fg-3-rest">Earn rebates on your trades and commissions from F1 and F2.</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-4 rounded border border-neutral-bd-1-rest">
            <div className="w-[46px] h-[46px] bg-neutral-gradient-1 rounded-[2px] flex items-center justify-center">
              <SvgIcon
                iconName="gif"
                className="size-5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-fg-gray-1-rest">3. Claim Daily Rewards</h3>
              <p className="text-[13px] text-neutral-fg-3-rest">Rewards are credited after trades close and claimable daily at 0:00 UTC.</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-4 rounded border border-neutral-bd-1-rest">
            <div className="w-[46px] h-[46px] bg-neutral-gradient-1 rounded-[2px] flex items-center justify-center">
              <SvgIcon
                iconName="tier-system"
                className="size-5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base text-neutral-fg-gray-1-rest">4. Referral Tier System</h3>
              <p className="text-[13px] text-neutral-fg-3-rest">Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days</p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 grow">
        <div className="bg-[#101423] h-full flex items-center flex-col justify-center p-4 gap-1">
          <h3 className="text-base font-bold text-center text-white">
            Apply <span className="bg-neutral-gradient-1 bg-clip-text inline-block text-transparent">Copin Affilate Program </span> to get
            <br /> more benefits!
          </h3>
          <div className="flex gap-2 items-center cursor-pointer">
            <span className="text-[13px] text-neutral-fg-blue-4-rest font-semibold">Contact us</span>
            <SvgIcon
              iconName="arrow-right"
              className="size-4 fill-neutral-fg-blue-4-rest mt-1"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
