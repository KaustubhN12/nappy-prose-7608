import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Badge, Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar/Navbar";
import SubNavbar from "../Components/Navbar/SubNavbar";

const sliderData1 = [
  {
    image:
      "https://images-static.nykaa.com/uploads/25a842ec-b66a-46f3-8c67-dd4e5178d5be.jpg",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/79c1face-6380-476d-9cef-22bfbc4023cb.gif",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/33c4212d-241b-41de-a8d2-c7b8d7d9cc13.jpg",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/8e38f956-76f6-4a96-a250-b69573e66696.jpg",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/9fa1e381-68e0-40ba-b1d3-7d63928dec0c.jpg",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/d2052bfb-fc68-46ae-a16e-eb0645f19c89.png",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/8523b59b-1695-4a5d-bbc5-2f918bac1b05.jpg",
  },
];

const TopBrands = [
  {
    image:
      "https://images-static.nykaa.com/uploads/9f0ffc11-6c0c-42fa-80a8-01af1c679f54.jpg",
    title: "Up To 35% Off",
    decription: "New Formula for 24HR Shine!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/1476dbd5-7861-4e31-9fe9-aa27a6d60e14.jpg",
    title: "Up To 30% Off",
    decription: "Ace your base like never before!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/f2cf761b-b8a7-4168-b2d4-deebd99d6001.jpg",
    title: "Flat 10% off on ₹1299+",
    decription: "Free Shampoo/Mask on ₹1599+",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/af479252-c00c-41f4-a7fb-3791227c7177.jpg",
    title: "Purifying properties of Bergamot",
    decription: "Free Biolage mini serum on 699+",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/58828fba-90e3-470d-8da6-990c01fb3846.jpg",
    title: "Oils that grow more powerful with time",
    decription: "For Visibly Stronger Hair!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/e7316117-629b-4774-880f-98701238dd93.jpg",
    title: "Flat 35% Off",
    decription: "Hair Oils & Masks",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/91c524dc-b0b8-467b-883e-b1d5fbed1e23.gif",
    title: "Up To 30% Off",
    decription: "Ace your base like never before!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/61c7e482-8864-4bde-a7a4-1f0d66c808d2.jpg",
    title: "Flat 10% Off",
    decription: "Skincare Kit Worth ₹5000 + Pouch On ₹4000",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/8440b977-a365-4a3e-a5f9-b4c8df2e936c.jpg",
    title: "Complete Your Party Look In Minutes",
    decription: "With Huda Beauty's Lovefest Collection",
  },
];

const DiscoverOurFavourites = [
  {
    image:
      "https://images-static.nykaa.com/uploads/f922641b-03ce-4627-b0fe-1cd512a2af30.jpg",
    title: "Gift Sets",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/2e8f18d5-06d0-4aab-8d8e-7644aa54023f.jpg",
    title: "Eyeshadows",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/207d5407-b589-4aeb-b5f3-54a9143ed8f5.jpg",
    title: "Weight Management",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/ccc99a7a-3aec-4a7b-8e40-57ab39e4097e.jpg",
    title: "Floral Fragrances",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/1924a249-3bef-4a9c-8095-d5a9c2076569.jpg?tr=w-480",
    title: "Lipsticks",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg",
    title: "Blushes",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/86a11d9e-818b-48e4-9435-cb886f4e3762.jpg",
    title: "Sunscreens",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/3665639b-9bd5-4ff1-a3f8-a1d125b4d536.jpg",
    title: "Foundations",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/c225c3e8-57c4-4e77-9162-c58426b81381.jpg",
    title: "Innovative Tools",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/ad2c3fa0-3f81-4fe2-a99c-5e5e59e95407.jpg",
    title: "Luxe Minis",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/1924a249-3bef-4a9c-8095-d5a9c2076569.jpg",
    title: "Feminine Hygiene",
  },
];

const EverydayEssentials = [
  {
    image:
      "https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-480",
    title: "Moisturisers",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-480",
    title: "Bath & Body",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize",
    title: "Face Washes",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-480",
    title: "Budget Makeup",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-480",
    title: "Value Combos",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-480",
    title: "Shampoos & Conditioners",
  },
];

const OnlyAtNykaa = [
  {
    image:
      "https://images-static.nykaa.com/creatives/f3be8ac5-6ed5-4c61-b5d4-73b3cc76dc91/default.png",
    title: "Upto 20% Off",
    decription: "Free Facewash On ₹699",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/8a35fbc9-dcb8-40c9-a524-906297c69844/default.jpg",
    title: "91% Saw Brighter Skin in Weeks",
    decription: "Mini On ₹3000 + Samples On All",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/c6b55ef7-11ea-4f51-a25c-35aafa050285/default.jpg",
    title: "Upto 25% Off",
    decription: "Glam Eyes That Steal The Show!",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/fd337b94-586a-457c-8d66-335bb8d47db2/default.png",
    title: "Flat 20% Off",
    decription: "Free Lipstick On ₹799",
  },
];

const NewAtNykaa = [
  {
    id: 1,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/8/88315f1773602590667_01.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/m-a-c-studio-fix-fluid-spf-15-mini/p/2649152?productId=2649152&pps=1",
    title: "M.A.C Studio Fix Fluid SPF 15 Mini",
    originalprice: 3800,
    price: 1900,
    discount: 50,
    ratingcount: 6753,
    shades: "10 Shades",
  },
  {
    id: 2,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/7/875b9d86902395685715_1.jpg",
    Keywords: "",
    ssqlopj4_URL:
      "https://www.nykaa.com/maybelline-new-york-super-stay-full-coverage-foundation/p/375090?productId=375090&pps=2",
    title: "Maybelline New York Super Stay Full Coverage Foundation",
    originalprice: 849,
    price: 594,
    discount: 30,
    ratingcount: 27926,
    shades: "6 Shades",
  },
  {
    id: 3,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/9/994f68922998_S1_8901030863127.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/lakme-complexion-care-face-cream-37836/p/37835?productId=37835&pps=3",
    title: "Lakme Complexion Care Face CC Cream",
    originalprice: 360,
    price: 324,
    discount: 10,
    ratingcount: 33819,
    shades: "6 Shades",
  },
  {
    id: 4,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/3/3350900000394_2.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/embryolisse-lait-creme-concentre/p/403564?productId=403564&pps=4",
    title: "Embryolisse Lait-Creme Concentré",
    originalprice: 2650,
    price: 1325,
    discount: 50,
    ratingcount: 4134,
    shades: "2 Sizes",
  },
  {
    id: 5,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/e/fe57187KAYBE00000056_2.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/kay-beauty-creme-blush-sweetheart-pink/p/5093150?productId=5093150&pps=5",
    title: "Kay Beauty Creme Blush",
    originalprice: 799,
    price: 639,
    discount: 20,
    ratingcount: 4151,
    shades: "5 Shades",
  },
  {
    id: 6,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/5/b5ae29a773602103485_rv__1.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/m-a-c-studio-fix-fluid-spf-15/p/88999?productId=88999&pps=6",
    title: "M.A.C Studio Fix Fluid SPF 15",
    originalprice: 3835,
    price: 2950,
    discount: 30,
    ratingcount: 8583,
    shades: "45 Shades",
  },
  {
    id: 7,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/1/c1801d422769_H-8901030366086.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/lakme-absolute-mattreal-skin-natural-mousse-16hr/p/1287?productId=1287&pps=7",
    title: "Lakme Absolute Skin Natural Mousse Mattreal Foundation",
    originalprice: 875,
    price: 700,
    discount: 20,
    ratingcount: 26834,
    shades: "8 Shades",
  },
  {
    id: 8,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/2/02e31d424030_H-8901030654886.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/lakme-9-to-5-primer-matte-powder-foundation-compact/p/183962?productId=183962&pps=8",
    title: "Lakme 9 to 5 Primer + Matte Powder Foundation Compact",
    originalprice: 550,
    price: 440,
    discount: 20,
    ratingcount: 17935,
    shades: "6 Shades",
  },
  {
    id: 9,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/3/7394cb3773602345830.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/m-a-c-prep-prime-fix/p/273051?productId=273051&pps=9",
    title: "M.A.C Prep + Prime Fix+",
    originalprice: 2365,
    price: "2150",
    discount: 10,
    ratingcount: 10795,
    shades: "6 Shades",
  },
  {
    id: 10,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/290b54d3592496005142_1.jpg",
    Keywords: "",
    cssqlopj4_URL:
      "https://www.nykaa.com/daily-life-forever52-ultra-definition-liquid-foundation/p/401077?productId=401077&pps=10",
    title: "Daily Life Forever52 Ultra Definition Liquid Foundation",
    originalprice: 949,
    price: 807,
    discount: 15,
    ratingcount: 8946,
    shades: "11 Shades",
  },
];

const PopularPicks = [
  {
    id: 1,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/6/d6ed4708904245710804_1.jpg",
    Keywords: "FEATURED",
    cssqlopj4_URL:
      "https://www.nykaa.com/nykaa-skin-potion-facial-oil/p/688909?productId=688909&pps=1",
    title: "Nykaa Skin Potion Facial Oil",
    originalprice: 69,
    price: 299,
    discount: "10% Off",
    ratingcount: "( 18461 )",
    shade: "2 Size",
  },
  {
    id: 2,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/3/539568927274_H1_8901030773525.jpg",
    Keywords: "BESTSELLER",
    cssqlopj4_URL:
      "https://www.nykaa.com/simple-kind-to-skin-hydrating-light-moisturiser-125-ml/p/390984?productId=390984&pps=2",
    title: "Simple Kind To Skin Hydrating Light Moisturiser",
    originalprice: 465,
    price: 199,
    discount: "15% Off",
    ratingcount: "( 8726 )",
    shade: "2 Sixes",
  },
  {
    id: 3,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/b/1bbf16c737534800522.jpg",
    Keywords: "BESTSELLER",
    cssqlopj4_URL:
      "https://www.nykaa.com/plum-green-tea-renewed-clarity-night-gel/p/220111?productId=220111&pps=3",
    title: "Plum Green Tea Renewed Clarity Night Gel",
    originalprice: 575,
    price: 149,
    discount: "10% Off",
    ratingcount: "( 19038 )",
    shade: "",
  },
  {
    id: 4,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/f/df3f16cLOREA00000003.jpg",
    Keywords: "BESTSELLER",
    cssqlopj4_URL:
      "https://www.nykaa.com/l-oreal-paris-revitalift-1-5-hyaluronic-acid-serum/p/1112060?productId=1112060&pps=4",
    title: "L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum for Hydr...",
    originalprice: 499,
    price: 49,
    discount: "10% Off",
    ratingcount: "( 19033 )",
    shade: "2 Sizes",
  },
  {
    id: 5,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/2/52d1876716170266565_1.jpg",
    Keywords: "FEATURED",
    cssqlopj4_URL:
      "https://www.nykaa.com/bobbi-brown-vitamin-enriched-face-base-config/p/294787?productId=294787&pps=5",
    title: "Bobbi Brown Vitamin Enriched Face Base",
    originalprice: "",
    price: 399,
    discount: "",
    ratingcount: "( 2160 )",
    shade: "3 Sizes",
  },
  {
    id: 6,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/9842bd9CETAP00000004_1.jpg",
    Keywords: "FEATURED",
    cssqlopj4_URL:
      "https://www.nykaa.com/cetaphil-bhr-brightening-night-comfort-cream/p/1171878?productId=1171878&pps=6",
    title: "Cetaphil Bright Healthy Radiance Night Comfort Cream",
    originalprice: 1035,
    price: 849,
    discount: "5% Off",
    ratingcount: "( 3071 )",
    shade: "",
  },
  {
    id: 7,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f8ee060MINIM00000001_1.jpg",
    Keywords: "FEATURED",
    cssqlopj4_URL:
      "https://www.nykaa.com/o3-radiant-whitening-day-cream-spf-30-50gm/p/250981?productId=250981&pps=7",
    title: "O3+ Radiant Day Cream SPF-30 Brightening & Radiant Dermal Zo...",
    originalprice: 1050,
    price: 299,
    discount: "5% Off",
    ratingcount: "( 1091 )",
    shade: "4 Sizes",
  },
  {
    id: 8,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/9/197ed26PLUMX00000133_1.jpg",
    Keywords: "FEATURED",
    cssqlopj4_URL:
      "https://www.nykaa.com/nykaa-illuminate-vitamin-c-moisturizer/p/2735781?productId=2735781&pps=8",
    title: "Nykaa SKINRX Vitamin C Illuminate + Day Moisturizer with SPF...",
    originalprice: 199,
    price: 99,
    discount: "",
    ratingcount: "( 1363 )",
    shade: "",
  },
  {
    id: 9,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/9/f99321eNYCETA0000003_1.jpg",
    Keywords: "BESTSELLER",
    cssqlopj4_URL:
      "https://www.nykaa.com/biotique-morning-nectar-nourish-hydrate-moisturizer/p/6984991?productId=6984991&pps=9",
    title: "Biotique Morning Nectar Nourish & Hydrate Moisturizer",
    originalprice: 220,
    price: 149,
    discount: "25% Off",
    ratingcount: "( 28007 )",
    shade: "2 Sizes",
  },
  {
    id: 10,
    Image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/a/8a541fbDOTKE00000054-1.jpg",
    Keywords: "BESTSELLER",
    cssqlopj4_URL:
      "https://www.nykaa.com/cosrx-advanced-snail-96-mucin-power-essence/p/757628?productId=757628&pps=10",
    title: "COSRX Advanced Snail 96 Mucin Power Essence",
    originalprice: 499,
    price: 459,
    discount: "",
    ratingcount: "( 8218 )",
    shade: "",
  },
];

const FeaturedBrands = [
  {
    image:
      "https://images-static.nykaa.com/creatives/49395ef6-0458-49fe-911f-2a415c602046/default.png",
    title: "Upto 20% Off",
    decription: "On Bestsellers",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/626dee77-f0de-4ea1-94f0-9b5bde33f977/default.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 29% Off",
    decription: "On Corrale",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/ad2c3fa0-3f81-4fe2-a99c-5e5e59e95407.jpg?tr=w-240",
    title: "Upto 20% Off",
    decription: "Serum on ₹999",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/de9fd13c-72b0-4728-846c-fcd70df8e602/default.jpg",
    title: "Buy 1 @ 5% Off",
    decription: "Buy 2, Get Flat 12%",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/07d7b033-1809-4092-801f-879ecd15e2fe/default.png?tr=w-480",
    title: "Flat 35% Off",
    decription: "On Entire Range",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/2168a069-1271-4123-bd8d-879f696dff60/default.jpg?tr=w-480",
    title: "Flat 10% off",
    decription: "On Entire Range",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/fb25aee3-8b4a-4f36-abc0-845590245aac/default.jpg?tr=w-480",
    title: "On ₹900",
    decription: "Cleanser Worth ₹595",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/7665aa19-e8cf-4b7e-81fe-948377539e14/default.jpg?tr=w-480",
    title: "Upto 30% Off",
    decription: "On Entire Range",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/a4439a9a-3f4c-466d-b41f-936dca68d5b2/default.png?tr=w-480",
    title: "Up To 20% Off",
    decription: "Free Scrub on ₹699",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/cbe74a23-15a3-44ce-9062-21ea64747990/default.jpg?tr=w-480",
    title: "",
    decription: "",
  },
];

const BeautyAdvice = [
  {
    image:
      "https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-1200",
    title: "Catch Up On Top Trends, Expert Advice, Fresh Launches & More",
    decription: "Watch Now",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/e7c366df-a513-4932-9cdc-fbeda4a707a5.jpg?tr=w-1200",
    title: "Catch Up On Top Trends, Expert Advice, Fresh Launches & More",
    decription: "Read More",
  },
];

const Home = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="160px" marginLeft="40px" zIndex={1}>
      <ChevronLeftIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-160px" marginLeft="1310px">
      <ChevronRightIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false
        },
      },
    ],
  };

  var setting2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows:false
        },
      },
    ],
  };
  var setting3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows:false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="parent-div">
      <Navbar/>
      <SubNavbar/>
      <Box
        marginLeft={["0px","0px","30px"]}
        marginBottom="40px"
        className="slider"
      >
        <Text marginLeft="10px" fontSize="2xl" fontWeight="600" align="left">
          Best In Beuty
        </Text>
        <Slider {...settings}>
          {sliderData1.map((el, index) => {
            return (
              <div key={index}>
                <Box padding="10px">
                  <Image borderRadius="8px" src={el.image} />
                </Box>
              </div>
            );
          })}
        </Slider>
      </Box>
      <Box width="80%" margin="auto">
        <Image src="https://images-static.nykaa.com/uploads/d0bf2aa0-ce54-4154-93a4-a3060b3d2d48.gif" />
      </Box>
      <div
        style={{ margin: "auto", width: "95%", marginTop: "30px" }}
        className="grids"
      >
        <Grid
          marginBottom="30px"
          gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)"]}
          gap="20px"
        >
          <GridItem>
            <Image src="https://images-static.nykaa.com/uploads/9882cc03-45ed-4d66-b4a7-4d34db83e720.png?tr=w-1200" />
          </GridItem>
          <GridItem>
            <Image src="https://images-static.nykaa.com/uploads/97b7c067-686a-4fe9-b32e-924dcbcb1f61.jpg?tr=w-1200" />
          </GridItem>
        </Grid>
        <Box marginBottom="40px">
          <Text
            marginLeft="10px"
            marginBottom="10px"
            fontSize="2xl"
            fontWeight="600"
            align="left"
          >
            First Purchase App Offers
          </Text>
          <Image
            borderRadius="8px"
            src="https://images-static.nykaa.com/uploads/8aa5e37a-3b29-46da-b782-9ed02a4ec064.jpg"
          />
        </Box>
        <Text
          marginLeft="30px"
          marginBottom="10px"
          fontSize="2xl"
          fontWeight="600"
          align="left"
        >
          Top Brands
        </Text>
        <Grid
          gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}
          gap="20px"
          width="95%"
          margin="auto"
        >
          {TopBrands.map((el, index) => {
            return (
              <GridItem
                key={index}
                border="1px solid #E2E8F0"
                borderRadius="8px"
              >
                <Box>
                  <Image borderRadius="8px 8px 0px 0px" src={el.image} />
                </Box>
                <Box padding="12px">
                  <Text
                    fontSize="20px"
                    align="left"
                    color="#ED64A6"
                    fontWeight="600"
                  >
                    {el.title}
                  </Text>
                  <Text align="left">{el.decription}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>

        <Grid
          marginTop="40px"
          marginBottom="40px"
          gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)"]}
          gap="20px"
        >
          <GridItem>
            <Image src="https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-1200" />
          </GridItem>
        </Grid>

        <Text
          marginLeft="8px"
          marginBottom="10px"
          fontSize="2xl"
          fontWeight="600"
          align="left"
        >
          Only At Nykaa
        </Text>

        <Grid gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap="20px">
          {OnlyAtNykaa.map((el, index) => {
            return (
              <GridItem
                key={index}
                border="1px solid #E2E8F0"
                borderRadius="8px"
              >
                <Box>
                  <Image borderRadius="8px 8px 0px 0px" src={el.image} />
                </Box>
                <Box padding="12px">
                  <Text
                    fontSize="17px"
                    align="left"
                    color="#000000"
                    fontWeight="600"
                  >
                    {el.title}
                  </Text>
                  <Text align="left">{el.decription}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </div>
      <div
        style={{ marginLeft: "30px", marginBottom: "40px", marginTop: "30px" }}
        className="slider"
      >
        <Text marginLeft="10px" fontSize="2xl" fontWeight="600" align="left">
          New at Nykaa
        </Text>
        <Slider {...setting2}>
          {NewAtNykaa.map((el, index) => {
            return (
              <div key={index}>
                <Box textAlign="left" height="310" padding="10px">
                  <Box border="1px solid #E2E8F0" padding="5px">
                    <Badge variant="subtle" colorScheme="gray">
                      New
                    </Badge>
                    <Image borderRadius="8px" src={el.Image} />
                  </Box>
                  <Text fontSize="13px" fontWeight="550">
                    {el.title}
                  </Text>
                  <Text fontSize="13px">{el.shades}</Text>
                  <Text fontSize="16px" fontWeight="600">
                    ₹{el.price}
                  </Text>
                </Box>
              </div>
            );
          })}
        </Slider>
      </div>
      {/*  */}
      <div style={{ margin: "auto", width: "93%", marginTop: "30px" }}>
        <Text
          marginLeft="5px"
          marginBottom="10px"
          fontSize="2xl"
          fontWeight="600"
          align="left"
        >
          Discover Our Favourites
        </Text>
        <Box>
          <Image
            borderRadius="8px"
            src="https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg"
          />
        </Box>
      </div>
      <Box marginLeft="30px" marginTop="30px" marginBottom="30px">
        <Slider {...setting3}>
          {DiscoverOurFavourites.map((el, index) => {
            return (
              <div key={index}>
                <Box textAlign="left" height="310" marginBottom={["80px","0px","0px"]}>
                  <Box padding="12px">
                    <Image borderRadius="8px" src={el.image} />
                    <Box
                      borderRadius="0px 0px 8px 8px"
                      position="absolute"
                      marginTop="-37px"
                      width="220px"
                      padding="7px"
                      backdropFilter="blur(10px) saturate(260%)"
                    >
                      <Text fontWeight="650">{el.title}</Text>
                    </Box>
                  </Box>
                </Box>
              </div>
            );
          })}
        </Slider>
      </Box>

      <div style={{ margin: "auto", width: "93%", marginTop: "30px" }}>
        <Text
          marginLeft="5px"
          marginBottom="10px"
          fontSize="2xl"
          fontWeight="600"
          align="left"
        >
          Popular Picks
        </Text>
        <Box marginBottom="30px">
          <Image
            borderRadius="8px"
            src="https://images-static.nykaa.com/uploads/fd34eddd-690e-4f5b-b656-859c1e8df184.png"
          />
        </Box>
      </div>

      <div
        style={{ marginLeft: "30px", marginBottom: "40px", marginTop: "30px" }}
        className="slider"
      >
        <Slider {...setting2}>
          {PopularPicks.map((el, index) => {
            return (
              <div key={index}>
                <Box textAlign="left" height="310" padding="10px">
                  <Box border="1px solid #E2E8F0" padding="5px">
                    <Badge variant="subtle" colorScheme="gray">
                      {el.Keywords}
                    </Badge>
                    <Image borderRadius="8px" src={el.Image} />
                  </Box>
                  <Text fontSize="13px" fontWeight="550">
                    {el.title}
                  </Text>
                  <Text fontSize="13px">{el.shade}</Text>
                  <Text fontSize="16px" fontWeight="600">
                    ₹{el.price}
                  </Text>
                </Box>
              </div>
            );
          })}
        </Slider>
      </div>

      <div style={{ margin: "auto", width: "93%", marginTop: "30px" }}>
        <Text
          marginLeft="5px"
          marginBottom="10px"
          fontSize="2xl"
          fontWeight="600"
          align="left"
        >
          Featured Brands
        </Text>
        <Grid
          gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(5,1fr)"]}
          gap="20px"
          marginBottom="30px"
        >
          {FeaturedBrands.map((el, index) => {
            return (
              <GridItem
                key={index}
                border="1px solid #E2E8F0"
                borderRadius="8px"
              >
                <Box>
                  <Image borderRadius="8px 8px 0px 0px" src={el.image} />
                </Box>
                <Box padding="12px">
                  <Text
                    fontSize="17px"
                    align="left"
                    color="#000000"
                    fontWeight="600"
                  >
                    {el.title}
                  </Text>
                  <Text align="left">{el.decription}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </div>

      <div>
        <Box backgroundColor="#E6FFFA" paddingTop="1px">
          <div style={{ margin: "auto", width: "93%", marginTop: "30px" }}>
            <Text
              marginLeft="5px"
              marginBottom="10px"
              fontSize="2xl"
              fontWeight="600"
              align="left"
            >
              Everyday Essentials
            </Text>
            <Box marginBottom="30px">
              <Image
                borderRadius="8px"
                src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg"
              />
            </Box>
            <Slider {...setting3}>
              {EverydayEssentials.map((el, index) => {
                return (
                  <div key={index}>
                    <Box textAlign="left" height="310">
                      <Box padding="12px">
                        <Image borderRadius="8px" src={el.image} />
                        <Box
                          borderRadius="0px 0px 8px 8px"
                          width="210px"
                          padding="7px"
                          backgroundColor={["none","#FFFFFF"]}
                        >
                          <Text fontWeight="550">{el.title}</Text>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Box>
      </div>

      <div style={{ margin: "auto", width: "93%", marginTop: "30px" }}>
        <Text marginLeft="5px" fontSize="2xl" fontWeight="600" align="left">
          Beauty Advice
        </Text>
        <Text marginLeft="5px" marginBottom="10px" align="left">
          Discover Latest Tips & Tricks
        </Text>

        <Grid
          gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)"]}
          gap="20px"
          marginBottom="30px"
        >
          {BeautyAdvice.map((el, index) => {
            return (
              <GridItem
                key={index}
                border="1px solid #E2E8F0"
                borderRadius="8px"
              >
                <Box>
                  <Image borderRadius="8px 8px 0px 0px" src={el.image} />
                </Box>
                <Box padding="12px">
                  <Text
                    fontSize="17px"
                    align="left"
                    color="#000000"
                    fontWeight="600"
                  >
                    {el.title}
                  </Text>
                  <Text color="pink.500" align="left">
                    {el.decription}
                  </Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>

        <Box>
          <Image src="https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg" />
        </Box>
      </div>
    </div>
  );
};

export default Home;
