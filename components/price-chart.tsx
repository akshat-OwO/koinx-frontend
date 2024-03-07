"use client";

import React, { memo, useEffect, useRef } from "react";

function PriceChart() {
	const container = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
        {
			"autosize": true,
			"symbol": "BITSTAMP:BTCUSD",
			"interval": "D",
			"timezone": "Etc/UTC",
			"theme": "light",
			"style": "3",
			"locale": "en",
			"enable_publishing": false,
			"hide_top_toolbar": true,
			"hide_legend": true,
			"save_image": false,
			"calendar": false,
			"hide_volume": true,
			"support_host": "https://www.tradingview.com"
		  }`;
		if (container.current) {
			container.current.appendChild(script);
		}
	}, []);

	return (
		<div
			className="tradingview-widget-container"
			ref={container}
			style={{ height: "100%", width: "100%" }}
		>
			<div
				className="tradingview-widget-container__widget"
				style={{ height: "calc(100% - 32px)", width: "100%" }}
			/>
		</div>
	);
}

export default memo(PriceChart);
