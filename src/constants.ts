import {
  IResponse,
  ISidebarContentItem,
  ISubNavigationItem,
} from "./interfaces";

export const BASE_URL = "http://127.0.0.1:5000/search";

export const DUMMY_DATA: IResponse[] = [
  {
    id: "1",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "2",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "3",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "4",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "5",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "6",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "7",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "8",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "9",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "10",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "11",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "12",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "13",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "14",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "15",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "16",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "17",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "18",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "19",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "20",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "21",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "22",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "23",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "24",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
  {
    id: "25",
    type: "T-Shirts",
    name: "Nike Men's Short Sleeve Logo Swoosh Printed Active T-Shirt Grey M",
    brand: "Nike",
    averageRating: 4.8,
    manufacturerName: "Nike",
    shortDescription:
      "Nike t-shirts for men deliver a soft jersey feel with a great range of motion to get you through your workout in total comfort. NIKE SHIRT: Nike shirts for men have a standard fit for a relaxed, easy feel during physical activity. Large Nike swoosh trademark printed on chest.\n<br><br>\nFeatures:<br>\n<li>Department: Men\n<li>Material: 100% Cotton\n<li>Theme: Logo\n<li>Pattern: Graphic\n<li>Fit: Athletic\n<li>Type: T-Shirt\n<li>Features: All Seasons\n<li>MPN: 891953\n<li>Neckline: Crew Neck\n<li>Gender: Male\n<li>Sleeve Length: Short Sleeve",
    thumbnailUrl:
      "https://i5.walmartimages.com/asr/1969d9af-0b06-4787-b8b6-19a0ebfb8bbb.55694218f1c10e81991eab9dcf09150b.jpeg",
    price: 22.21,
    currencyUnit: "USD",
  },
];

export const DUMMY_SIDEBAR_ITEMS: Array<ISidebarContentItem> = [
  { title: "department" },
  { title: "brand" },
  { title: "price" },
  { title: "speed" },
  { title: "availability" },
  { title: "special offers" },
  { title: "customer rating" },
  { title: "color" },
  { title: "lifestage" },
  { title: "clothing size group" },
  { title: "fabric material" },
  { title: "pattern" },
  { title: "clothing size" },
  { title: "clothing category" },
  { title: "sleeve length style" },
  { title: "number of pieces" },
  { title: "style" },
  { title: "sleeve style" },
  { title: "retailer" },
  { title: "gifting" },
  { title: "shop my store" },
];

export const DUMMY_SUB_NAVIGATION_LINKS: Array<ISubNavigationItem> = [
  { title: "Deals" },
  { title: "Easter" },
  { title: "Grocery & essentials" },
  { title: "Home" },
  { title: "Tech" },
  { title: "Fashion" },
  { title: "Auto" },
  { title: "Walmart+" },
];

export const ITEMS_PER_PAGE = 20;
