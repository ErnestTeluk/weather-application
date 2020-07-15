import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLocalization } from "state/actions/localization";

export default (ChildComponent) => {
  const ComposeComponent = () => {
    const dispatch = useDispatch();

    function getLocation() {
      window.navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          getLocalization({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        )
      );
    }

    useEffect(() => {
      getLocation();
    });

    return <ChildComponent />;
  };

  return ComposeComponent;
};
