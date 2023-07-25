import React from "react";
interface IPlaceDetailsProps {
  name: string;
}

const PlaceDetails = ({ name }: IPlaceDetailsProps) => {
  return <h1>{name}</h1>;
};

export default PlaceDetails;
