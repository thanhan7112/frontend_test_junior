import SvgIcon from '@/components/svg';
import { TierList } from '@/utils/constants';
import VectorDash from '@/assets/vector/vector-dashed.png';
import VectorChart from '@/assets/vector/vector-chart.png';
import VectorLineChart from '@/assets/vector/vector-line-chart.png';
import Glow1 from '@/assets/vector/glow-1.png';
import Glow2 from '@/assets/vector/glow-2.png';
import Glow3 from '@/assets/vector/glow-3.png';
import Line from '@/assets/vector/line.png';
import { useState } from 'react';

function App() {

  const [selectedInf, setSelectedInf] = useState(5);

  return (
    <div className="bg-neutral-bg-1-rest w-full h-screen min-h-fit mx-auto max-w-screen-2xl flex flex-col">
      <section
        className="bg-blue-gradient-opacity relative max-[620px]:flex flex-col md:gap-x-8 md:gap-y-4 gap-x-2 py-4 px-10 grid grid-rows-2 grid-flow-col border-b border-neutral-bd-1-rest">
        <div className="flex flex-col gap-3 md:mt-auto col-span-2 md:col-span-1 md:row-span-1 justify-center">
          <h3 className="text-white font-bold max-w-[425px] text-2xl">
            Unlock Rewards with the Copin Referral Program
          </h3>
        </div>
        <div className="flex flex-col gap-1 h-full justify-center md:justify-start">
          <div className="text-neutral-fg-3-rest text-normal leading-6">
            <p>Earn rebates and commissions by inviting friends.</p>
            <p>Grow your network and benefit from our 6-tier reward system.</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span className="text-neutral-fg-blue-3-rest text-normal leading-6 font-semibold">View referral Ranking</span>
            <SvgIcon
              iconName="arrow-right"
              className="size-4 fill-neutral-fg-blue-3-rest mt-1"
            />
          </div>
        </div>
        <div className="flex relative flex-col max-[620px]:mx-auto ml-auto max-w-full mt-auto md:row-span-2 col-span-1">
          <div className="relative size-fit">
            <img
              src={VectorDash}
              alt="Vector Dash"
              className="size-fit object-contain"
            />
            {[VectorChart, VectorLineChart].map((e) => (
              <img
                key={e}
                src={e}
                alt="Vector Chart"
                className="absolute top-0 object-contain"
              />
            ))}
          </div>
          <div className="w-full h-fit">
            <div className="grid grid-cols-6 max-w-full h-full">
              {TierList.map((tier) => (
                <div className="h-full flex items-center flex-col" key={tier.tierNum}>
                  {selectedInf === tier.tierNum
                    &&
                    <div className="flex absolute z-10 bottom-6 items-center justify-center h-5/6">
                      <img
                        src={Glow3}
                        alt="glow"
                        className="object-contain min-w-fit max-h-full"
                      />
                      {[Glow1, Glow2].map((e) => (
                        <img
                          key={e}
                          src={e}
                          alt="glow"
                          className="absolute bottom-0 object-contain min-w-fit max-h-full"
                        />
                      ))}
                    </div>
                  }
                  <div className="flex bottom-0 flex-col justify-end items-center h-full">
                    {selectedInf === tier.tierNum && <div className="absolute h-full bottom-10 max-h-full z-40 flex-auto flex items-center flex-col justify-end ">
                      <div className={`flex absolute ${tier.dot} ${tier.tierNum <= 4 ? 'flex-col-reverse' : 'flex-col'}`}>
                        <div className={`size-[6px] border shadow-lg mx-auto border-neutral-fg-blue-4-rest rounded-full bg-white`}></div>
                        <div className={`w-fit z-50 flex flex-col p-1 glass border-custom rounded border-gradient-border`}>
                          <span className="text-[9.81px] text-neutral-fg-gray-1-rest whitespace-nowrap">F0 (Rebate): 5%</span>
                          <span className="text-[9.81px] text-neutral-fg-gray-1-rest whitespace-nowrap">F1 (Commission): 35%</span>
                          <span className="text-[9.81px] text-neutral-fg-gray-1-rest whitespace-nowrap">F2 (Commission): 10%</span>
                        </div>
                      </div>
                      <img
                        src={Line}
                        alt="line"
                        className="object-contain max-h-full"
                      />
                    </div>}
                    <div className={`md:size-8 size-6 rounded-full flex items-center relative z-50 justify-center ${tier.bg[0]}`}>
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
                            key={twinkle.className}
                            iconName={twinkle.iconName}
                            className={twinkle.className}
                          />
                        ))}
                      </div>
                      <div className={`relative z-30 md:size-7 size-6 rounded-full cursor-pointer flex items-center justify-center inner-shadow ${tier.bg[1]}`} onClick={() => setSelectedInf(tier.tierNum)}>
                        <div className="relative md:size-6 size-5 z-10">
                          {tier.starIcons.map((star) => (
                            <SvgIcon
                              key={star.iconName}
                              iconName={star.iconName}
                              className={star.className}
                            />
                          ))}
                        </div>
                        {tier.leafIcons.map((leaf) => (
                          <SvgIcon
                            key={leaf.iconName}
                            iconName={leaf.iconName}
                            className={leaf.className}
                          />
                        ))}
                        <div className={`absolute md:size-4 size-3 z-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${tier.bg[2]}`}>
                          <span className="md:text-xs text-tiny font-bold text-white md:tracking-wider"> {tier.tierNum} </span>
                        </div>
                      </div>
                    </div>
                    <p className="md:text-xs text-tiny text-neutral-fg-gray-1-rest mt-4">Tier {tier.tierNum}</p>
                  </div>
                </div>
              ))}
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
              <p className="text-normal text-neutral-fg-3-rest">Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)</p>
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
              <p className="text-normal text-neutral-fg-3-rest">Earn rebates on your trades and commissions from F1 and F2.</p>
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
              <p className="text-normal text-neutral-fg-3-rest">Rewards are credited after trades close and claimable daily at 0:00 UTC.</p>
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
              <p className="text-normal text-neutral-fg-3-rest">Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-4 grow">
        <div className="bg-[#101423] h-full flex items-center flex-col justify-center p-4 gap-1">
          <h3 className="text-base font-bold text-center text-white">
            Apply <span className="bg-neutral-gradient-1 bg-clip-text inline-block text-transparent">Copin Affilate Program </span> to get
            <br /> more benefits!
          </h3>
          <div className="flex gap-2 items-center cursor-pointer">
            <span className="text-normal text-neutral-fg-blue-4-rest font-semibold">Contact us</span>
            <SvgIcon
              iconName="arrow-right"
              className="size-4 fill-neutral-fg-blue-4-rest mt-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
