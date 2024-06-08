import React from "react";
import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function TawkToWidget() {
  const tawkMessengerRef = useRef();
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  return (
    <TawkMessengerReact
      propertyId={process.env.NEXT_PUBLIC_PROPERTY_ID}
      widgetId={process.env.NEXT_PUBLIC_WIDGET_ID}
      ref={tawkMessengerRef}
    />
  );
}

export default TawkToWidget;
