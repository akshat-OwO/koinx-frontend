"use server";

import axios from "axios";

type Price = {
	bitcoin: {
		inr: number;
		inr_24h_change: number;
		usd: number;
		usd_24h_change: number;
	};
};

export async function price(
	id: string,
	vs_currencies: string,
	include_24hr_change: boolean,
): Promise<Price> {
	const response = await axios.get(
		`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change}`,
		{
			headers: {
				"x-cg-demo-api-key": process.env.COINGECKO_KEY,
			},
		},
	);
	return response.data as Price;
}
