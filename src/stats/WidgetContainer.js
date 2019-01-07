import React, { useState, useEffect } from "react";

export default function WidgetContainer() {
    const [widgets, setWidgets] = useState(0);
    let productionInterval;

    useEffect(() => {
        if (!productionInterval) {
            productionInterval = setInterval(() => setWidgets(widgets + 1), 2000);
        }
        return function clear () {
            clearInterval(productionInterval);
        }
    })

    return <div>widgets: {widgets}</div>
}