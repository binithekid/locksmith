import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 51.56836,
        lng: -0.10984,
      };

      const mapOptions = {
        center: position,
        zoom: 12,
        mapId: "ContactMap",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <main className="w-full pt-20 gap-8 flex md:flex-row flex-col px-4 md:px-20">
      <div className="md:w-2/3">
        <div ref={mapRef} className="shadow text-sm h-[30rem] my-8 rounded" />
      </div>

      <div className="flex-grow flex justify-center flex-col">
        <p className={`font-light uppercase text-xl ${raleway.className}`}>
          Where to find us
        </p>

        <div className="flex flex-col gap-1 mt-2 text-sm font-thin">
          <p>Faw 4 Locks</p>
          <p>86 Stroud Green Road</p>
          <p>London</p>
          <p>N4 3EN</p>
          <p>United Kingdom</p>
        </div>
      </div>
    </main>
  );
};

export default Map;
