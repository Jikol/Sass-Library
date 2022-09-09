import { useEffect, useState } from "react";

import { getVpDimensions } from "~/lib";

interface TViewPort {
  viewport: number;
}

const useViewport = (): TViewPort => {
  const [viewport, setViewport] = useState<number>(getVpDimensions().vw);

  useEffect((): VoidFunction => {
    const handleResize = (): void => setViewport(getVpDimensions().vw);

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return { viewport };
};

export { useViewport };
