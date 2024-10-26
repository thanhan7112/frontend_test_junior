import SvgIcon from "@/components/svg"

function App() {

  return (
    <div className="bg-neutral-bg-1-rest w-full h-screen mx-auto max-w-screen-2xl flex flex-col">
      <section className="bg-blue-gradient-opacity py-4 px-10 flex justify-between gap-2 flex-wrap items-center border-b border-neutral-bd-1-rest">
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-2xl">
            Unlock Rewards with the Copin<br /> Referral Program
          </h3>
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
        <div className="flex flex-col gap-2">
          <div className="bg-[url('./src/assets/vector/vector-dashed.png')]">
            <div className="w-[362.13px] h-[180.29px] max-w-full bg-[url('./src/assets/vector/vector-chart.png')] bg-cover bg-center">
              <div className="w-full h-full bg-[url('./src/assets/vector/vector-line-chart.png')]"></div>
            </div>
          </div>
          <div className="flex gap-8">
            {/* 1 */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="size-8 bg-gray-gradient-1 rounded-full flex items-center justify-center">
                <div className="relative size-[29px] rounded-full flex items-center justify-center inner-shadow bg-gray-gradient-2">
                  <SvgIcon
                    iconName="star"
                    className="size-6 fill-[#F1F8FE]"
                  />
                  <div className="absolute size-4 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-gradient-3 flex items-center justify-center">
                    <span className="text-xs font-bold text-white tracking-widest"> 1 </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-fg-gray-1-rest">Tier 1</p>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="size-8 bg-green-gradient-1 rounded-full flex items-center justify-center">
                <div className="relative size-[29px] rounded-full flex items-center justify-center inner-shadow bg-green-gradient-2">
                  <SvgIcon
                    iconName="star"
                    className="size-6 fill-[#F1F8FE]"
                  />
                  <div className="absolute size-4 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-gradient-3 flex items-center justify-center">
                    <span className="text-xs font-bold text-white tracking-wider"> 2 </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-fg-gray-1-rest">Tier 2</p>
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="size-8 bg-blue-gradient-1 rounded-full flex items-center justify-center">
                <div className="relative size-[29px] rounded-full flex items-center justify-center inner-shadow bg-blue-gradient-2">
                  <div className="relative size-6 z-10">
                    <SvgIcon
                      iconName="star-m"
                      className="size-6 fill-[#F1F8FE]"
                    />
                    <SvgIcon
                      iconName="star-m-inner"
                      className="size-6 z-10 absolute top-0"
                    />
                  </div>
                  <SvgIcon
                    iconName="leaf"
                    className="size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
                  />
                  <div className="absolute size-4 z-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-gradient-3 flex items-center justify-center">
                    <span className="text-xs font-bold text-white tracking-wider"> 3 </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-fg-gray-1-rest">Tier 3</p>
            </div>
            {/* 4 */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="size-8 bg-orange-gradient-1 rounded-full flex items-center justify-center">
                <div className="relative size-[29px] rounded-full flex items-center justify-center inner-shadow bg-orange-gradient-2">
                  <div className="relative size-6 z-10">
                    <SvgIcon
                      iconName="star-m"
                      className="size-6 fill-[#F1F8FE]"
                    />
                    <SvgIcon
                      iconName="star-m-inner"
                      className="size-6 z-10 absolute top-0"
                    />
                  </div>
                  <SvgIcon
                    iconName="leaf"
                    className="size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
                  />
                  <div className="absolute size-4 z-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-gradient-3 flex items-center justify-center">
                    <span className="text-xs font-bold text-white tracking-wider"> 4 </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-fg-gray-1-rest">Tier 4</p>
            </div>
            {/* 5 */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="size-8 bg-purple-gradient-1 relative rounded-full flex items-center justify-center">
                <SvgIcon
                  iconName="halo"
                  className="size-12 z-0 absolute spin"
                />
                <div className="relative size-[29px] rounded-full flex items-center justify-center inner-shadow bg-purple-gradient-2">
                  <div className="relative size-6 z-10">
                    <SvgIcon
                      iconName="star-m"
                      className="size-6 fill-[#F1F8FE]"
                    />
                    <SvgIcon
                      iconName="star-m-inner"
                      className="size-6 z-10 absolute top-0"
                    />
                  </div>
                  <SvgIcon
                    iconName="leaf"
                    className="size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
                  />
                  <SvgIcon
                    iconName="leaf-2"
                    className="size-6 z-[5] absolute top-2"
                  />
                  <div className="absolute size-4 z-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-gradient-3 flex items-center justify-center">
                    <span className="text-xs font-bold text-white"> 5 </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-fg-gray-1-rest">Tier 5</p>
            </div>
            {/* 6 */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="size-8 bg-red-gradient-1 relative rounded-full flex items-center justify-center">
                <SvgIcon
                  iconName="halo"
                  className="size-12 z-0 absolute spin"
                />
                <SvgIcon
                  iconName="twinkle"
                  className="size-2 z-20 pulse left-0 absolute top-0 -rotate-12"
                />
                <SvgIcon
                  iconName="twinkle"
                  className="size-2 z-20 pulse right-0 absolute top-0 rotate-12"
                />
                <SvgIcon
                  iconName="twinkle"
                  className="size-2 z-20 pulse left-0 absolute bottom-[-2px] rotate-45"
                />
                <SvgIcon
                  iconName="twinkle"
                  className="size-2 z-20 pulse right-0 absolute bottom-1 -rotate-12"
                />
                <div className="relative size-[29px] rounded-full flex items-center justify-center inner-shadow bg-red-gradient-2">
                  <div className="relative size-6 z-10">
                    <SvgIcon
                      iconName="star-m"
                      className="size-6 fill-[#F1F8FE]"
                    />
                    <SvgIcon
                      iconName="star-m-inner"
                      className="size-6 z-10 absolute top-0"
                    />
                  </div>
                  <SvgIcon
                    iconName="leaf"
                    className="size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
                  />
                  <SvgIcon
                    iconName="leaf-2"
                    className="size-6 z-[5] absolute top-2"
                  />
                  <div className="absolute size-4 z-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-gradient-3 flex items-center justify-center">
                    <span className="text-xs font-bold text-white tracking-wider"> 6 </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-fg-gray-1-rest">Tier 6</p>
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
        <div className="grid grid-cols-4 gap-2">
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
