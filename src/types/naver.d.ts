declare namespace naver {
  namespace maps {
    const Service: {
      geocode(
        options: { query: string },
        callback: (
          status: string,
          response: {
            v2: {
              addresses: {
                x: string;
                y: string;
              }[];
            };
          }
        ) => void
      ): void;
      Status: {
        OK: string;
        ERROR: string;
      };
    };

    class LatLng {
      constructor(lat: number, lng: number);
    }
  }
}