"use client";

import { trending } from "@/actions/trending";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Triangle } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

const TrendingCoins = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["trending-coins"],
		queryFn: () => trending(),
	});

	return (
		<div className="p-6 bg-white rounded-md flex flex-col gap-6">
			<h3 className="text-xl font-semibold">Trending Coins (24h)</h3>
			<div className="flex flex-col gap-5">
				{isLoading && (
					<>
						<Skeleton className="bg-neutral-300 w-full h-7" />
						<Skeleton className="bg-neutral-300 w-full h-7" />
						<Skeleton className="bg-neutral-300 w-full h-7" />
					</>
				)}
				{data && (
					<>
						{data.coins.slice(0, 3).map((coin) => (
							<div
								key={coin.item.coin_id}
								className="flex items-center justify-between"
							>
								<div className="flex items-center gap-2">
									<Avatar className="size-6">
										<AvatarImage src={coin.item.thumb} />
									</Avatar>
									<span className="font-medium">
										{coin.item.name}({coin.item.symbol})
									</span>
								</div>
								<Badge
									className={cn("h-7 p-2 rounded gap-2", {
										"bg-red-500/50 hover:bg-red-500/50 text-red-600":
											coin.item.data.price_change_percentage_24h.usd < 0,
										"bg-green-500/50 hover:bg-green-500/50 text-green-600":
											coin.item.data.price_change_percentage_24h.usd > 0,
									})}
								>
									<Triangle
										className={cn("size-4", {
											"fill-green-500 stroke-green-500":
												coin.item.data.price_change_percentage_24h.usd > 0,
											"fill-red-500 stroke-red-500 rotate-180":
												coin.item.data.price_change_percentage_24h.usd < 0,
										})}
									/>
									{new Intl.NumberFormat("en-US", {
										style: "percent",
										minimumFractionDigits: 2,
									}).format(
										(coin.item.data.price_change_percentage_24h.usd * 1) / 100,
									)}
								</Badge>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default TrendingCoins;
