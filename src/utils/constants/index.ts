import { TypeTier } from '@/modal';

export const TierList: TypeTier[] = [
    {
        bg: ['bg-gray-gradient-1', 'bg-gray-gradient-2', 'bg-gray-gradient-3'],
        tierNum: 1,
        leafIcons: [],
        starIcons: [
            {
                iconName: 'star',
                className: 'md:size-6 size-5 fill-[#F1F8FE]',
            },
        ],
        twinkleIcons: [],
        dot: 'bottom-[13%]',
    },
    {
        bg: ['bg-green-gradient-1', 'bg-green-gradient-2', 'bg-green-gradient-3'],
        tierNum: 2,
        leafIcons: [],
        starIcons: [
            {
                iconName: 'star',
                className: 'md:size-6 size-5 fill-[#F1F8FE]',
            },
        ],
        twinkleIcons: [],
        dot: 'bottom-[18%]',
    },
    {
        bg: ['bg-blue-gradient-1', 'bg-blue-gradient-2', 'bg-blue-gradient-3'],
        tierNum: 3,
        leafIcons: [
            {
                iconName: 'leaf',
                className: 'md:size-6 size-5 z-0 absolute top-3 fill-[#ffffff17]',
            },
        ],
        starIcons: [
            {
                iconName: 'star',
                className: 'md:size-6 size-5 fill-[#F1F8FE]',
            },
            {
                iconName: 'star-m-inner',
                className: 'md:size-6 size-5 z-10 absolute top-0',
            },
        ],
        twinkleIcons: [],
        dot: 'bottom-[26%]',
    },
    {
        bg: ['bg-orange-gradient-1', 'bg-orange-gradient-2', 'bg-orange-gradient-3'],
        tierNum: 4,
        leafIcons: [
            {
                iconName: 'leaf',
                className: 'md:size-6 size-5 z-0 absolute top-3 fill-[#ffffff17]',
            },
        ],
        starIcons: [
            {
                iconName: 'star',
                className: 'md:size-6 size-5 fill-[#F1F8FE]',
            },
            {
                iconName: 'star-m-inner',
                className: 'md:size-6 size-5 z-10 absolute top-0',
            },
        ],
        twinkleIcons: [],
        dot: 'bottom-[40%]',
    },
    {
        bg: ['bg-purple-gradient-1', 'bg-purple-gradient-2', 'bg-purple-gradient-3'],
        tierNum: 5,
        leafIcons: [
            {
                iconName: 'leaf',
                className: 'md:size-6 size-5 z-0 absolute top-3 fill-[#ffffff17]',
            },
            {
                iconName: 'leaf-2',
                className: 'md:size-6 size-5 z-[5] absolute top-2',
            },
        ],
        starIcons: [
            {
                iconName: 'star',
                className: 'md:size-6 size-5 fill-[#F1F8FE]',
            },
            {
                iconName: 'star-m-inner',
                className: 'md:size-6 size-5 z-10 absolute top-0',
            },
        ],
        spinIcon: {
            iconName: 'halo',
            className: 'md:size-12 size-10 spin',
        },
        twinkleIcons: [],
        dot: 'top-[38%]',
    },
    {
        bg: ['bg-red-gradient-1', 'bg-red-gradient-2', 'bg-red-gradient-3'],
        tierNum: 6,
        leafIcons: [
            {
                iconName: 'leaf',
                className: 'md:size-6 size-5 z-0 absolute top-3 fill-[#ffffff17]',
            },
            {
                iconName: 'leaf-2',
                className: 'md:size-6 size-5 z-[5] absolute top-2',
            },
        ],
        starIcons: [
            {
                iconName: 'star',
                className: 'md:size-6 size-5 fill-[#F1F8FE]',
            },
            {
                iconName: 'star-m-inner',
                className: 'md:size-6 size-5 z-10 absolute top-0',
            },
        ],
        spinIcon: {
            iconName: 'halo',
            className: 'md:size-12 size-10 spin',
        },
        twinkleIcons: [
            {
                iconName: 'twinkle',
                className: 'size-2 z-20 pulse left-1 absolute top-2 -rotate-12',
            },
            {
                iconName: 'twinkle',
                className: 'size-2 z-20 pulse right-0 absolute top-2 rotate-12',
            },
            {
                iconName: 'twinkle',
                className: 'size-2 z-20 pulse left-1 absolute bottom-1 rotate-45',
            },
            {
                iconName: 'twinkle',
                className: 'size-2 z-20 pulse right-1 absolute bottom-1 -rotate-12',
            },
        ],
        dot: 'top-5',
    },
];
