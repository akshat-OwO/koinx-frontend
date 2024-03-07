"use client";

import { price } from "@/actions/price";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Loader, Triangle } from "lucide-react";
import { Icons } from "./icons";
import PriceChart from "./price-chart";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const CurrencyStats = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["currency", "stats", "bitcoin"],
		queryFn: () => price("bitcoin", "inr%2cusd", true),
	});

	return (
		<div className="p-6 bg-white rounded-md flex flex-col">
			<div className="flex flex-col gap-10">
				<div className="flex items-center gap-5">
					<div className="flex items-center gap-2">
						<Icons.bitcoin className="size-8" />
						<span className="text-2xl font-semibold">Bitcoin</span>
						<span className="font-semibold text-muted-foreground">BTC</span>
					</div>
					<Button className="cursor-default bg-gray-500 hover:bg-gray-500">
						Rank #1
					</Button>
				</div>
				<div className="flex items-start gap-5">
					<div className="flex flex-col gap-2">
						<p className="text-4xl font-semibold">
							{isLoading || !data ? (
								<Loader className="size-10 animate-spin" />
							) : (
								new Intl.NumberFormat("en-US", {
									style: "currency",
									currency: "USD",
								}).format(data.bitcoin.usd)
							)}
						</p>
						{data && (
							<span className="text-lg font-medium">
								{new Intl.NumberFormat("en-IN", {
									style: "currency",
									currency: "INR",
								}).format(data.bitcoin.inr)}
							</span>
						)}
					</div>
					{data && (
						<div className="flex items-center gap-4">
							<Badge
								className={cn("p-2 rounded gap-2", {
									"bg-red-500/50 hover:bg-red-500/50 text-red-600":
										data.bitcoin.usd_24h_change < 0,
									"bg-green-500/50 hover:bg-green-500/50 text-green-600":
										data.bitcoin.usd_24h_change > 0,
								})}
							>
								<Triangle
									className={cn("size-4", {
										"fill-green-500 stroke-green-500":
											data.bitcoin.usd_24h_change > 0,
										"fill-red-500 stroke-red-500 rotate-180":
											data.bitcoin.usd_24h_change < 0,
									})}
								/>
								{new Intl.NumberFormat("en-US", {
									style: "percent",
									minimumFractionDigits: 2,
								}).format((data.bitcoin.usd_24h_change * 1) / 100)}
							</Badge>
							<span className="text-muted-foreground text-sm font-semibold">
								(24h)
							</span>
						</div>
					)}
				</div>
			</div>
			<Separator className="my-5" />
			<div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:items-center justify-between pb-2">
				<span className="text-sm font-semibold">Bitcoin Price Chart (USD)</span>
				<div className="flex items-center gap-1 lg:gap-2">
					<Badge className="cursor-pointer bg-transparent hover:bg-transparent text-primary">
						1H
					</Badge>
					<Badge className="cursor-pointer bg-transparent hover:bg-transparent text-primary">
						24H
					</Badge>
					<Badge className="cursor-pointer bg-blue-500/50 hover:bg-blue-500/70 text-blue-600">
						7D
					</Badge>
					<Badge className="cursor-pointer bg-transparent hover:bg-transparent text-primary">
						1M
					</Badge>
					<Badge className="cursor-pointer bg-transparent hover:bg-transparent text-primary">
						3M
					</Badge>
					<Badge className="cursor-pointer bg-transparent hover:bg-transparent text-primary">
						6M
					</Badge>
					<Badge className="cursor-pointer bg-transparent hover:bg-transparent text-primary">
						1Y
					</Badge>
					<Badge className="cursor-pointer bg-transparent hover:bg-transparent text-primary">
						ALL
					</Badge>
				</div>
			</div>
			<div className="h-96">
				<PriceChart />
			</div>
		</div>
	);
};

export default CurrencyStats;
