import React, { useState } from "react";

import { default as AdvancedChart, CIQ } from "./AdvancedChart";

import { getConfig, getCustomConfig } from "./resources"; // ChartIQ library resources
import "./AdvancedChart.css";

export default function ({ chartInitialized, config, symbol, chartId }) {
	const [configObj] = useState(config || getCustomConfig({ symbol, chartId }));

	return <AdvancedChart config={configObj} chartInitialized={chartInitialized} />;
}

export { CIQ, getConfig, getCustomConfig }