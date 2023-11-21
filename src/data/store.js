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
    ]
})