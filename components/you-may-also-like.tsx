"use client";

import { trending } from "@/actions/trending";
import { cn } from "@/lib/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Triangle } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";

const YouMayAlsoLike = () => {
	const queryClient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryKey: ["you-may-also-like"],
		queryFn: async () => {
			const trendingCoins = await queryClient.ensureQueryData({
				queryKey: ["trending-coins"],
				queryFn: () => trending(),
			});

			return trendingCoins;
		},
	});

	return (
		<div className="p-6 bg-white rounded-md flex flex-col gap-6">
			<h3 className="text-xl font-semibold">You may also like</h3>
			<Carousel>
				<CarouselContent>
					{isLoading &&
						Array.from([1, 2, 3, 4, 5, 6]).map((_, i) => (
							<CarouselItem
								key={`${_ + i}`}
								className="basis-2/3 lg:basis-1/4 xl:basis-1/6"
							>
								<Skeleton className="h-40 w-full" />
							</CarouselItem>
						))}
					{data?.coins.map((coin) => (
						<CarouselItem
							key={coin.item.coin_id}
							className="basis-2/3 lg:basis-1/4 xl:basis-1/6"
						>
							<div className="rounded-md border p-4 flex flex-col gap-2">
								<div className="flex items-center gap-2">
									<Avatar className="size-4">
										<AvatarImage src={coin.item.thumb} />
									</Avatar>
									<span>{coin.item.symbol}</span>
									<Badge
										className={cn("h-4 p-1 rounded gap-2", {
											"bg-red-500/50 hover:bg-red-500/50 text-red-600":
												coin.item.data.price_change_percentage_24h.usd < 0,
											"bg-green-500/50 hover:bg-green-500/50 text-green-600":
												coin.item.data.price_change_percentage_24h.usd > 0,
										})}
									>
										<Triangle
											className={cn("size-2", {
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
											(coin.item.data.price_change_percentage_24h.usd * 1) /
												100,
										)}
									</Badge>
								</div>
								<span className="text-lg font-medium">
									{coin.item.data.market_cap}
								</span>
								<div className="relative h-full">
									<Image
										src={coin.item.data.sparkline}
										alt={`${coin.item.name} chart`}
										height={60}
										width={200}
									/>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious variant="secondary" className="left-2" />
				<CarouselNext variant="secondary" className="right-2" />
			</Carousel>
			<Carousel>
				<CarouselContent>
					{isLoading &&
						Array.from([1, 2, 3, 4, 5, 6]).map((_, i) => (
							<CarouselItem
								key={`${_ + i}`}
								className="basis-2/3 lg:basis-1/4 xl:basis-1/6"
							>
								<Skeleton className="h-40 w-full" />
							</CarouselItem>
						))}
					{data?.coins.map((coin) => (
						<CarouselItem
							key={coin.item.coin_id}
							className="basis-2/3 lg:basis-1/4 xl:basis-1/6"
						>
							<div className="rounded-md border p-4 flex flex-col gap-2">
								<div className="flex items-center gap-2">
									<Avatar className="size-4">
										<AvatarImage src={coin.item.thumb} />
									</Avatar>
									<span>{coin.item.symbol}</span>
									<Badge
										className={cn("h-4 p-1 rounded gap-2", {
											"bg-red-500/50 hover:bg-red-500/50 text-red-600":
												coin.item.data.price_change_percentage_24h.usd < 0,
											"bg-green-500/50 hover:bg-green-500/50 text-green-600":
												coin.item.data.price_change_percentage_24h.usd > 0,
										})}
									>
										<Triangle
											className={cn("size-2", {
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
											(coin.item.data.price_change_percentage_24h.usd * 1) /
												100,
										)}
									</Badge>
								</div>
								<span className="text-lg font-medium">
									{coin.item.data.market_cap}
								</span>
								<div className="relative h-full">
									<Image
										src={coin.item.data.sparkline}
										alt={`${coin.item.name} chart`}
										height={60}
										width={200}
									/>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious variant="secondary" className="left-2" />
				<CarouselNext variant="secondary" className="right-2" />
			</Carousel>
		</div>
	);
};

export default YouMayAlsoLike;
