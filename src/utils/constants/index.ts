import { TypeTier } from "@/modal";

export const TierList: TypeTier[] = [
    {
      bg: ['bg-gray-gradient-1', 'bg-gray-gradient-2', 'bg-gray-gradient-3'],
      tierNum: 1,
      leafIcons: [],
      starIcons: [
        {
          iconName: 'star',
          className: 'size-6 fill-[#F1F8FE]'
        }
      ],
      twinkleIcons: [],
    },
    {
      bg: ['bg-green-gradient-1', 'bg-green-gradient-2', 'bg-green-gradient-3'],
      tierNum: 2,
      leafIcons: [],
      starIcons: [
        {
          iconName: 'star',
          className: 'size-6 fill-[#F1F8FE]'
        }
      ],
      twinkleIcons: [],
    },
    {
      bg: ['bg-blue-gradient-1', 'bg-blue-gradient-2', 'bg-blue-gradient-3'],
      tierNum: 3,
      leafIcons: [
        {
          iconName: "leaf",
          className: "size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
        }
      ],
      starIcons: [
        {
          iconName: 'star',
          className: 'size-6 fill-[#F1F8FE]'
        },
        {
          iconName: "star-m-inner",
          className: "size-6 z-10 absolute top-0"
        }
      ],
      twinkleIcons: [],
    },
    {
      bg: ['bg-orange-gradient-1', 'bg-orange-gradient-2', 'bg-orange-gradient-3'],
      tierNum: 4,
      leafIcons: [
        {
          iconName: "leaf",
          className: "size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
        }
      ],
      starIcons: [
        {
          iconName: 'star',
          className: 'size-6 fill-[#F1F8FE]'
        },
        {
          iconName: "star-m-inner",
          className: "size-6 z-10 absolute top-0"
        }
      ],
      twinkleIcons: [],
    },
    {
      bg: ['bg-purple-gradient-1', 'bg-purple-gradient-2', 'bg-purple-gradient-3'],
      tierNum: 5,
      leafIcons: [
        {
          iconName: "leaf",
          className: "size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
        },
        {
          iconName: "leaf-2",
          className: "size-6 z-[5] absolute top-2"
        }
      ],
      starIcons: [
        {
          iconName: 'star',
          className: 'size-6 fill-[#F1F8FE]'
        },
        {
          iconName: "star-m-inner",
          className: "size-6 z-10 absolute top-0"
        }
      ],
      spinIcon: {
        iconName: "halo",
        className: "size-12 z-0 absolute spin"
      },
      twinkleIcons: [],
    },
    {
      bg: ['bg-red-gradient-1', 'bg-red-gradient-2', 'bg-red-gradient-3'],
      tierNum: 6,
      leafIcons: [
        {
          iconName: "leaf",
          className: "size-6 z-0 absolute top-3 fill-[#b6b2b26b]"
        },
        {
          iconName: "leaf-2",
          className: "size-6 z-[5] absolute top-2"
        }
      ],
      starIcons: [
        {
          iconName: 'star',
          className: 'size-6 fill-[#F1F8FE]'
        },
        {
          iconName: "star-m-inner",
          className: "size-6 z-10 absolute top-0"
        }
      ],
      spinIcon: {
        iconName: "halo",
        className: "size-12 z-0 absolute spin"
      },
      twinkleIcons: [
        {
          iconName: "twinkle",
          className: "size-2 z-20 pulse left-0 absolute top-0 -rotate-12"
        },
        {
          iconName: "twinkle",
          className: "size-2 z-20 pulse right-0 absolute top-0 rotate-12"
        },
        {
          iconName: "twinkle",
          className: "size-2 z-20 pulse left-0 absolute bottom-[-2px] rotate-45"
        },
        {
          iconName: "twinkle",
          className: "size-2 z-20 pulse right-0 absolute bottom-1 -rotate-12"
        }
      ],
    }
  ]