/* ---------
File with useful utility functions for use in typescript
--------- */

interface TDimensions {
  vw: number;
  vh: number;
}

const getVpDimensions = (): TDimensions => ({
  vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
  vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
});

export { getVpDimensions };
