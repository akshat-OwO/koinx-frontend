"use client";

import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const CurrencyInfo = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	return (
		<div className="flex flex-col gap-5">
			<ScrollArea className="w-full">
				<div className="flex items-center gap-8 border-b">
					<Button
						className={cn(
							"h-12 p-0 bg-transparent hover:bg-transparent text-neutral-950 rounded-none border-0",
							{
								"border-b-[3px] border-b-[#0141CF]":
									searchParams.get("t") === "overview" ||
									searchParams.get("t") === null,
							},
						)}
						onClick={() =>
							router.push(`${pathname}?${createQueryString("t", "overview")}`, {
								scroll: false,
							})
						}
					>
						Overview
					</Button>
					<Button
						className={cn(
							"h-12 p-0 bg-transparent hover:bg-transparent text-neutral-950 rounded-none border-0",
							{
								"border-b-[3px] border-b-[#0141CF]":
									searchParams.get("t") === "fundamentals",
							},
						)}
						onClick={() =>
							router.push(
								`${pathname}?${createQueryString("t", "fundamentals")}`,
								{ scroll: false },
							)
						}
					>
						Fundamentals
					</Button>
					<Button
						className={cn(
							"h-12 p-0 bg-transparent hover:bg-transparent text-neutral-950 rounded-none border-0",
							{
								"border-b-[3px] border-b-[#0141CF]":
									searchParams.get("t") === "newsInsights",
							},
						)}
						onClick={() =>
							router.push(
								`${pathname}?${createQueryString("t", "newsInsights")}`,
								{ scroll: false },
							)
						}
					>
						News Insights
					</Button>
					<Button
						className={cn(
							"h-12 p-0 bg-transparent hover:bg-transparent text-neutral-950 rounded-none border-0",
							{
								"border-b-[3px] border-b-[#0141CF]":
									searchParams.get("t") === "sentiments",
							},
						)}
						onClick={() =>
							router.push(
								`${pathname}?${createQueryString("t", "sentiments")}`,
								{
									scroll: false,
								},
							)
						}
					>
						Sentiments
					</Button>
					<Button
						className={cn(
							"h-12 p-0 bg-transparent hover:bg-transparent text-neutral-950 rounded-none border-0",
							{
								"border-b-[3px] border-b-[#0141CF]":
									searchParams.get("t") === "team",
							},
						)}
						onClick={() =>
							router.push(`${pathname}?${createQueryString("t", "team")}`, {
								scroll: false,
							})
						}
					>
						Team
					</Button>
					<Button
						className={cn(
							"h-12 p-0 bg-transparent hover:bg-transparent text-neutral-950 rounded-none border-0",
							{
								"border-b-[3px] border-b-[#0141CF]":
									searchParams.get("t") === "technicals",
							},
						)}
						onClick={() =>
							router.push(
								`${pathname}?${createQueryString("t", "technicals")}`,
								{
									scroll: false,
								},
							)
						}
					>
						Technicals
					</Button>
					<Button
						className={cn(
							"h-12 p-0 bg-transparent hover:bg-transparent text-neutral-950 rounded-none border-0",
							{
								"border-b-[3px] border-b-[#0141CF]":
									searchParams.get("t") === "tokenomics",
							},
						)}
						onClick={() =>
							router.push(
								`${pathname}?${createQueryString("t", "tokenomics")}`,
								{
									scroll: false,
								},
							)
						}
					>
						Tokenomics
					</Button>
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			<div className="p-6 bg-white rounded-md flex flex-col gap-6">
				<h3 className="text-xl font-semibold">Performance</h3>
				<div className="flex items-center gap-9">
					<div className="flex flex-col gap-2">
						<span className="text-sm text-muted-foreground">
							Today&apos;s Low
						</span>
						<span className="font-medium text-muted-foreground">46,930.22</span>
					</div>
					<Progress className="flex-1 h-2 bg-[linear-gradient(to_right,#FF4949,#FF4E11,#FC870A,#FFAF11,#C2CB21,#11EB68)]" />
					<div className="flex flex-col gap-2">
						<span className="text-sm text-muted-foreground">
							Today&apos;s High
						</span>
						<span className="font-medium text-muted-foreground">49,343.83</span>
					</div>
				</div>
				<div className="flex items-center gap-9">
					<div className="flex flex-col gap-2">
						<span className="text-sm text-muted-foreground">52W Low</span>
						<span className="font-medium text-muted-foreground">16,930.22</span>
					</div>
					<Progress className="flex-1 h-2 bg-[linear-gradient(to_right,#FF4949,#FF4E11,#FC870A,#FFAF11,#C2CB21,#11EB68)]" />
					<div className="flex flex-col gap-2">
						<span className="text-sm text-muted-foreground">52W High</span>
						<span className="font-medium text-muted-foreground">49,743.83</span>
					</div>
				</div>
				<div className="pt-5 flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<h4 className="text-lg font-semibold text-muted-foreground">
							Fundamentals
						</h4>
						<Info className="fill-neutral-500 stroke-white" />
					</div>
					<div className="flex flex-col lg:flex-row items-center lg:gap-20">
						<div className="flex flex-col w-full">
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									Bitcoin Price
								</span>
								<span className="font-medium text-sm">$16,815.46</span>
							</div>
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									24h Low / 24h High
								</span>
								<span className="font-medium text-sm">
									$16,382.07 / $16,874.12
								</span>
							</div>
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									7d Low / 7d High
								</span>
								<span className="font-medium text-sm">
									$16,382.07 / $16,874.12
								</span>
							</div>
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									Trading Volume
								</span>
								<span className="font-medium text-sm">$23,249,202,782</span>
							</div>
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									Market Cap Rank
								</span>
								<span className="font-medium text-sm">#1</span>
							</div>
						</div>
						<div className="flex flex-col w-full">
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									Market Cap
								</span>
								<span className="font-medium text-sm">$323,507,290,047</span>
							</div>
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									Market Cap Dominance
								</span>
								<span className="font-medium text-sm">38.343%</span>
							</div>
							<div className="py-4 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									Volume / Market Cap
								</span>
								<span className="font-medium text-sm">0.0718</span>
							</div>
							<div className="py-1.5 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									All-Time High
								</span>
								<span className="font-medium text-sm flex flex-col items-end gap-0.5">
									<span>
										$69,044.77 <span className="text-red-600">-75.6%</span>
									</span>
									<span className="text-xs font-normal">Nov 10, 2021 (about 1 year)</span>
								</span>
							</div>
							<div className="py-1.5 border-b flex items-center justify-between">
								<span className="font-medium text-muted-foreground text-sm">
									All-Time Low
								</span>
								<span className="font-medium text-sm flex flex-col items-end gap-0.5">
									<span>
										$69,044.77 <span className="text-green-600">24729.1%</span>
									</span>
									<span className="text-xs font-normal">Nov 10, 2021 (about 1 year)</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrencyInfo;
