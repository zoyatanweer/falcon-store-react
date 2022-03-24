import {
  fullSleevesThor,
  ironManKeychain,
  spidermanHoodie,
  drStrangeMug,
} from "../../Assets";

const WishlistData = [
  {
    _id: 8,
    name: "Thor full sleeves T-shirt",
    originalPrice: 950,
    description: "Thor full sleeves tshirt ",
    hasOffer: false,
    hasDiscount: false,
    discountPrice: 950,
    badgeMessage: "",
    imageSrc: fullSleevesThor,
    inStock: true,
    fastDelivery: true,
    categoryName: "tshirt",
    rating: 4.0,
  },
  {
    _id: 9,
    name: "Iron Man keychain",
    description: "Iron Man keychain",
    originalPrice: 400,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 200,
    badgeMessage: "summer sale",
    imageSrc: ironManKeychain,
    inStock: true,
    fastDelivery: true,
    categoryName: "tshirt",
    rating: 3.9,
  },
  {
    _id: 11,
    name: "Spiderman hoodie",
    description: "Spiderman logo hoodie",
    originalPrice: 3500,
    hasOffer: false,
    hasDiscount: false,
    discountPrice: 3500,
    badgeMessage: "summer sale",
    imageSrc: spidermanHoodie,
    inStock: true,
    fastDelivery: true,
    categoryName: "tshirt",
    rating: 4.5,
  },
  {
    _id: 12,
    name: "Doctor Strange mug",
    description: "Dr Strange comics mug",
    originalPrice: 600,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 400,
    badgeMessage: "summer sale",
    imageSrc: drStrangeMug,
    inStock: true,
    fastDelivery: true,
    categoryName: "mug",
    rating: 2.8,
  },
];
export { WishlistData };