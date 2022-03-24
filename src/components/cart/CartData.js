import { blackPantherHoodie, lokiMug, marvelWomen } from "../../Assets";

const CartData = [
  {
    _id: 5,
    name: "Marvels' woman T-shirt",
    description: "She's got help tshirt",
    originalPrice: 1100,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 900,
    badgeMessage: "new arrival",
    imageSrc: marvelWomen,
    inStock: true,
    fastDelivery: true,
    categoryName: "tshirt",
    rating: 4.0,
    quantity: 1,
  },
  {
    _id: 1,
    name: "Black Panther Hoodie",
    description: "Black fitted hoodie with printed chain.",
    originalPrice: 2500,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 1500,
    badgeMessage: "new arrival",
    imageSrc: blackPantherHoodie,
    inStock: true,
    fastDelivery: true,
    categoryName: "hoodie",
    rating: 5,
    quantity: 1,
  },
  {
    _id: 2,
    name: "Loki mug",
    description: "Green and yellow mug with text",
    originalPrice: 600,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 400,
    badgeMessage: "summer sale",
    imageSrc: lokiMug,
    inStock: true,
    fastDelivery: true,
    categoryName: "mug",
    rating: 4.3,
    quantity: 1,
  },
];
export { CartData };
