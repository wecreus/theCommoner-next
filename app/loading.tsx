'use client';

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="Spinner">
      <ClipLoader color="white" size={45} speedMultiplier={0.5}/>
    </div>
  );
}