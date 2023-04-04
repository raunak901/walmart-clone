export interface IResponse {
  id: string;
  type: string;
  name: string;
  brand: string;
  averageRating: number | null;
  shortDescription: string;
  manufacturerName: string;
  thumbnailUrl: string;
  price: number;
  currencyUnit: string;
}

export interface ISidebarContentItem {
  title: string;
  info?: string;
}

export interface ISubNavigationItem {
  title: string;
}
