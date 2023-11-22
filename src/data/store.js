import {reactive} from 'vue';
export const store = reactive({
    navContent: [
        {
            id: 1,
            title: 'Home',
        },
        {
            id: 2,
            title: 'Shop',
        },
        {
            id: 3,
            title: 'Products',
        },
        {
            id: 4,
            title: 'Categories',
        },
        {
            id: 5,
            title: 'News',
        },
        {
            id: 6,
            title: 'Elements',
        },
    ],
    jumboContent: [
        {
            thumb: 'img/home1_slide_one_bg.jpg',
            title: 'Avada Classic Shop',
            subtitle: 'show your products with style',
            button: {
                text: 'get avada now!',
            },
        },
        {
            thumb: 'img/home1_slide_2_bg.jpg',
            title: 'Online Store',
            subtitle: 'sell your products with style',
            button: {
                text: 'men',
                text2: 'women',
            },
        },
        {
            thumb: 'img/home1_slide_three_bg_2.jpg',
            title: 'Brand New Arrivals',
            subtitle: 'new collection from new york',
            button: {
                text: 'view all',
                text2: 'lookbook',
            },
        },
    ],
    featuredProducts: [
        {
            0: [
                {
                    thumb: 'img/black_elegant_leather_jacket-400x520.jpg',
                    title: 'Black Leather Jacket',
                    tags: 'Men, Jackets, Jeans',
                    price: {
                        main: '$200',
                        promo: '$235',
                    }
                },
                {
                    thumb: 'img/black_leather_suit-400x520.jpg',
                    title: 'Black Leather Suit',
                    tags: 'Men, Jackets',
                    price: {
                        main: '$176',
                    }
                },
                {
                    thumb: 'img/blue_jacket_and_white_stripe_tee-400x520.jpg',
                    title: 'Blue Jacket & Stripe Tee',
                    tags: 'Men, Jackets, suits',
                    price: {
                        main: '$580',
                    }
                },
                {
                    thumb: 'img/modern_black_leather_suit-400x520.jpg',
                    title: 'Modern Black Leather Suit',
                    tags: 'Men, Jackets',
                    price: {
                        main: '$96',
                    }
                },
            ],
            1: [
                {
                    thumb: 'img/spring_printed_dress-400x520.jpg',
                    title: 'Spring printed dress',
                    tags: 'Dress, Women',
                    price: {
                        main: '$47',
                    } 
                },
                {
                    thumb: 'img/modern_love_tee-400x520.jpg',
                    title: 'Modern Love Tee',
                    tags: 'Women, T-Shirts',
                    price: {
                        main: '$68',
                    } 
                },
                {
                    thumb: 'img/black_leather_jacket-400x520.jpg',
                    title: 'Black Jacket',
                    tags: 'Women, Jackets',
                    price: {
                        main: '$125',
                    } 
                },
                {
                    thumb: 'img/hipster_black_top-400x520.jpg',
                    title: 'Hipster Black Top',
                    tags: 'T-Shirts, Women',
                    price: {
                        main: '$57',
                    } 
                },
            ],
            2: [
                {
                    thumb: 'img/casual_leather_belts-400x520.jpg',
                    title: 'Casual Leather Belts',
                    tags: 'Men, Accessories',
                    price: {
                        main: '$65',
                    } 
                },
                {
                    thumb: 'img/leather_gloves-400x520.jpg',
                    title: 'Leather Gloves',
                    tags: 'Accessories, Gloves, Men, Women',
                    price: {
                        main: '$45',
                    } 
                },
                {
                    thumb: 'img/modern_leather_boots-400x520.jpg',
                    title: 'Modern Leather Boots',
                    tags: 'Men, Accessories, Miscellaneous, Shoes',
                    price: {
                        main: '$30',
                        promo: '$50',
                    } 
                },
                {
                    thumb: 'img/brown_dress_shoes-400x520.jpg',
                    title: 'Brown Dress Shoes',
                    tags: 'Accessories, Miscellaneous, Shoes, Women',
                    price: {
                        main: '$36',
                        promo: '$40',
                    } 
                },
            ]
        }
    ],
    collections: [
        {
            thumb: 'img/winter_collection_bg.jpg',
            title: 'Winter Collection',
            subtitle: 'stylish and warm',
        },
        {
            thumb: 'img/spring_collection_bg.jpg',
            title: 'Spring Collection',
            subtitle: 'bright and colorful',
        },
        {
            thumb: 'img/autumn_collection_bg.jpg',
            title: 'Autumn Collection',
            subtitle: 'rich and comfortable',
        },
    ],
    carouselImages: [
        {
            thumb: 'img/black_leather_suit-400x520.jpg',
            title: 'Black Leather Suit',
            tags: 'Men, Jackets',
            price: {
                main: '$176',
            }
        },
        {
            thumb: 'img/spring_printed_dress-400x520.jpg',
            title: 'Spring printed dress',
            tags: 'Dress, Women',
            price: {
                main: '$47',
            } 
        },
        {
            thumb: 'img/modern_love_tee-400x520.jpg',
            title: 'Modern Love Tee',
            tags: 'Women, T-Shirts',
            price: {
                main: '$68',
            } 
        },
        {
            thumb: 'img/black_leather_jacket-400x520.jpg',
            title: 'Black Jacket',
            tags: 'Women, Jackets',
            price: {
                main: '$125',
            } 
        },
        {
            thumb: 'img/black_elegant_leather_jacket-400x520.jpg',
            title: 'Black Leather Jacket',
            tags: 'Men, Jackets, Jeans',
            price: {
                main: '$200',
                promo: '$235',
            }
        },
        {
            thumb: 'img/hipster_black_top-400x520.jpg',
            title: 'Hipster Black Top',
            tags: 'T-Shirts, Women',
            price: {
                main: '$57',
            } 
        },
    ],
    promoBox: {
        promo1: {
            thumb: 'img/promo_box_1_bg.jpg',
            title: '70% Off',
        },
        promo2: {
            thumb: 'img/promo_box_2_bg.jpg',
            title: 'Free Shipping',
        }
    },
    authors: [
        {
            id: 1,
            thumb: 'img/man_testimonial.png',
            name: 'Darìo Pineda,',
        },
        {
            id: 2,
            thumb: 'img/woman_testimonial.png',
            name: 'Lisa Smith,',
        }
    ],
    blogContent: [
        {
            thumb: 'img/post_img_12-700x441.jpg',
            title: 'Aenean Iobortis sapien enim viverra',
        },
        {
            thumb: 'img/post_img_11-700x441.jpg',
            title: 'Duis ac massa semper maximus',
        },
        {
            thumb: 'img/post_img_10-700x441.jpg',
            title: 'Nunc fermint nulla eu justo sem id',
        },
    ],
    advertisingContent: [
        {
            first: [
                {
                    name: 'Black Jacket',
                    price: {
                        main: '$125',
                    },
                    thumb: 'img/black_leather_jacket-120x156.jpg',
                    stars: false,
                },
                {
                    name: 'Black Leather Jacket',
                    price: {
                        main: '$200',
                        promo: '$235',
                    },
                    thumb: 'img/black_elegant_leather_jacket-120x156.jpg',
                    stars: true,
                },
                {
                    name: 'Hipster Black Top',
                    price: {
                        main: '$57',
                    },
                    thumb: 'img/hipster_black_top-120x156.jpg',
                    stars: false,
                },
            ],
            second: [
                {
                    name: 'Black Leather Jacket',
                    price: {
                        main: '$200',
                        promo: '$235',
                    },
                    thumb: 'img/black_elegant_leather_jacket-120x156.jpg',
                    stars: true,
                },
                {
                    name: 'Blue Leather Jacket',
                    price: {
                        main: '$60',
                        promo: '$80',
                    },
                    thumb: 'img/blue_leather_jacket-120x156.jpg',
                    stars: false,
                },
                {
                    name: 'Modern Leather Boots',
                    price: {
                        main: '$30',
                        promo: '$50',
                    },
                    thumb: 'img/modern_leather_boots-120x156.jpg',
                    stars: false,
                },
            ],
            third: [
                {
                    name: 'Leather Gloves',
                    price: {
                        main: '$45',
                    },
                    thumb: 'img/leather_gloves-120x156.jpg',
                    stars: true,
                },
                {
                    name: 'Black Leather Jacket',
                    price: {
                        main: '$200',
                        promo: '$235',
                    },
                    thumb: 'img/black_elegant_leather_jacket-120x156.jpg',
                    stars: true,
                },
                {
                    name: 'Spring Printed Dress',
                    price: {
                        main: '$47'
                    },
                    thumb: 'img/spring_printed_dress-120x156.jpg',
                    stars: true,
                },
            ],
            forth: [
                {
                    name: 'Black Leather Jacket',
                    price: {
                        main: '$200',
                        promo: '$235',
                    },
                    thumb: 'img/black_elegant_leather_jacket-120x156.jpg',
                    stars: true,
                },
                {
                    name: 'Leather Gloves',
                    price: {
                        main: '$45',
                    },
                    thumb: 'img/leather_gloves-120x156.jpg',
                    stars: true,
                },
                {
                    name: 'Spring Printed Dress',
                    price: {
                        main: '$47'
                    },
                    thumb: 'img/spring_printed_dress-120x156.jpg',
                    stars: true,
                },
            ]
            
        },
    ],
    brandLogos: ['img/b_logotype_1.png', 'img/b_logotype_2.png', 'img/b_logotype_3.png', 'img/b_logotype_4.png', 'img/b_logotype_5.png', 'img/b_logotype_6.png', 'img/b_logotype_7.png'],
    randomTags: ['Black', 'Boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers', 'Grey', 'hat', 'Hipster', 'lines', 'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter'],
})