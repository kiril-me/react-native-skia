/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";

import type { SharedValueType } from "../../renderer/processors/Animations";

// This one is needed for the deprecated useSharedValue function
// We can remove it once we remove the deprecation

let Reanimated2: any;

let Reanimated3: any;
let reanimatedVersion: string;

try {
  Reanimated2 = require("react-native-reanimated");
  reanimatedVersion =
    // eslint-disable-next-line import/extensions
    require("react-native-reanimated/package.json").version;
  if (
    reanimatedVersion &&
    (reanimatedVersion >= "3.0.0" || reanimatedVersion.includes("3.0.0-"))
  ) {
    Reanimated3 = Reanimated2;
  }
} catch (e) {}

export const HAS_REANIMATED2 = !!Reanimated2;
export const HAS_REANIMATED3 = !!Reanimated3;

export function throwOnMissingReanimated() {
  if (!HAS_REANIMATED2) {
    throw new Error(
      "Reanimated was not found, make sure react-native-reanimated package is installed if you want to use \
      react-native-skia's integration layer API."
    );
  }
}

function throwOnMissingReanimated3() {
  if (!HAS_REANIMATED3) {
    throw new Error(
      `Reanimated version ${reanimatedVersion} is not supported, please upgrade to 3.0.0 or newer.`
    );
  }
}

export const useSharedValue =
  Reanimated2?.useSharedValue ||
  ((value: number) => useMemo(() => ({ value }), [value]));
export const useFrameCallback: (...args: any[]) => any =
  Reanimated2?.useFrameCallback || throwOnMissingReanimated;

export const startMapper = Reanimated2?.startMapper || throwOnMissingReanimated;
export const stopMapper = Reanimated2?.stopMapper || throwOnMissingReanimated;
export const runOnJS = Reanimated2?.runOnJS || throwOnMissingReanimated;
export const isSharedValue = <T>(
  value: unknown
): value is SharedValueType<T> => {
  throwOnMissingReanimated3();
  return !!value && Reanimated3.isSharedValue(value);
};
