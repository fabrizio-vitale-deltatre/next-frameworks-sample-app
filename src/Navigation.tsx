import { FC, ReactNode, useEffect } from "react";
import SpatialNavigation, {
  WillFocusEvent,
  WillUnFocusEvent,
} from "spatial-navigation-ts";
import {
  ArrowKeys,
  KeyCode,
  KeyName,
  appIdSelector,
  appIds,
} from "./constants";

export const SpatialNavigationProvider: FC<{ children: ReactNode }> = (
  props,
) => {
  useEffect(() => {
    // Initilizing the spacial navigation library
    SpatialNavigation.init();

    // Define navigable elements (anchors and elements with "focusable" class).
    SpatialNavigation.add({
      selector: "a, .focusable, button",
      defaultElement: appIdSelector("searchSubmit"),
    });

    // Focus the first navigable element.
    SpatialNavigation.focus();

    return () => {
      SpatialNavigation.uninit();
    };
  }, []);

  useEffect(() => {
    const handleGlobalNavigation = (e: KeyboardEvent) => {
      console.log(
        `key-event key=${e.key} repeat=${e.repeat} altKey=${e.altKey} ctrlKey=${e.ctrlKey}`,
      );
    };

    const handleSnFocused = (evt: WillFocusEvent | WillUnFocusEvent) => {
      console.log(`sn-event=${evt.type}`, evt.detail);
    };

    window.addEventListener("sn:focused", handleSnFocused as EventListener);
    window.addEventListener("willfocus", handleSnFocused as EventListener);
    document.addEventListener("keydown", handleGlobalNavigation, false);
    return () => {
      window.removeEventListener("willfocus", handleSnFocused as EventListener);
      window.removeEventListener(
        "sn:focused",
        handleSnFocused as EventListener,
      );
      document.removeEventListener("keydown", handleGlobalNavigation, false);
    };
  }, []);

  useEffect(() => {
    const updateOnFocusLost = () => {
      setTimeout(() => {
        if (document.activeElement === document.body) {
          SpatialNavigation.focus(appIds.searchSubmit);
        }
      }, 0);
    };

    window.addEventListener("focusout", updateOnFocusLost);

    return () => {
      window.removeEventListener("focusout", updateOnFocusLost);
    };
  });

  return <>{props.children}</>;
};
