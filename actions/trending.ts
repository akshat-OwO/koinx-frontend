"use server";

import axios from "axios";

type Trending = {
	coins: Coin[];
	nfts: Nft[];
	categories: Category[];
};

export async function trending(): Promise<Trending> {
	const response = await axios.get(
		"https://api.coingecko.com/api/v3/search/trending",
		{
			headers: {
				"x-cg-demo-api-key": process.env.COINGECKO_KEY,
			},
		},
	);

	return response.data as Trending;
}
