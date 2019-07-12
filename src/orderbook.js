import React from 'react'
import ReactDom from 'react-dom'
import { CIQ, $$$ } from 'chartiq'
import OrderBook from './containers/OrderBook'

import { quoteFeedSimulator } from 'examples/feeds/quoteFeedSimulator'

ReactDom.render(
	React.createElement(OrderBook, {
		symbol: "^USDBTC",
		quoteFeed: quoteFeedSimulator,
		quoteFeedBehavior: {refreshInterval: 1}
	}),
	document.querySelector("#app")
)