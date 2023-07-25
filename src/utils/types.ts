export interface ILatLngProps {
  lat: number;
  lng: number;
}
export interface IBoundsProps {
  ne: ILatLngProps;
  sw: ILatLngProps;
}
