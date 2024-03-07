import { Info, Newspaper, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

const CurrencySentiment = () => {
	return (
		<div className="p-6 bg-white rounded-md flex flex-col gap-6">
			<div className="flex flex-col gap-4">
				<h3 className="text-xl font-semibold">Sentiment</h3>
				<div className="flex items-center gap-2">
					<h4 className="text-lg font-semibold text-muted-foreground">
						Key Events
					</h4>
					<Info className="fill-neutral-500 stroke-white" />
				</div>
			</div>
			<Carousel>
				<CarouselContent>
					<CarouselItem className="basis-3/4 md:basis-7/12">
						<div className="rounded-lg bg-blue-50 p-4">
							<div className="flex items-start gap-2 md:gap-5">
								<Avatar>
									<AvatarFallback className="bg-blue-500">
										<Newspaper className="stroke-white size-5" />
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col gap-2">
									<h4 className="text-xs md:text-sm font-medium">
										Lorem ipsum dolor sit amet consectetur. Dui vel quis
										dignissim mattis enim tincidunt.
									</h4>
									<p className="text-xs md:text-sm self-end text-muted-foreground">
										Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
										est faucibus metus quis. Amet sapien quam viverra adipiscing
										condimentum. Ac consectetur et pretium in a bibendum in. Sed
										vitae sit nisi viverra natoque lacinia libero enim.
									</p>
								</div>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem className="basis-3/4 md:basis-7/12">
						<div className="rounded-lg bg-blue-50 p-4">
							<div className="flex items-start gap-2 md:gap-5">
								<Avatar>
									<AvatarFallback className="bg-green-500">
										<TrendingUp className="stroke-white size-5" />
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col gap-2">
									<h4 className="text-xs md:text-sm font-medium">
										Lorem ipsum dolor sit amet consectetur. Dui vel quis
										dignissim mattis enim tincidunt.
									</h4>
									<p className="text-xs md:text-sm self-end text-muted-foreground">
										Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
										est faucibus metus quis. Amet sapien quam viverra adipiscing
										condimentum. Ac consectetur et pretium in a bibendum in. Sed
										vitae sit nisi viverra natoque lacinia libero enim.
									</p>
								</div>
							</div>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious variant="secondary" className="left-2" />
				<CarouselNext variant="secondary" className="right-2" />
			</Carousel>
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-2">
					<h4 className="text-lg font-semibold text-muted-foreground">
						Analyst Estimates
					</h4>
					<Info className="fill-neutral-500 stroke-white" />
				</div>
				<div className="flex items-center gap-4 md:gap-10">
					<div className="p-10 px-6 h-full rounded-full bg-green-50 flex items-center justify-center">
						<span className="text-4xl text-green-500 font-medium">76%</span>
					</div>
					<div className="flex-1 flex flex-col">
						<div className="p-2 flex items-center gap-6">
							<span className="font-medium text-sm text-muted-foreground">
								Buy
							</span>
							<div className="relative flex-1 flex items-center gap-2">
								<div className="w-[76%] h-2 bg-green-500" />
								<span className="text-sm text-muted-foreground font-medium transition-all">
									76%
								</span>
							</div>
						</div>
						<div className="p-2 flex items-center gap-6">
							<span className="font-medium text-sm text-muted-foreground">
								Hold
							</span>
							<div className="flex-1 flex items-center gap-2">
								<div className="w-[6%] h-2 bg-neutral-400" />
								<span className="text-sm text-muted-foreground font-medium transition-all">
									6%
								</span>
							</div>
						</div>
						<div className="p-2 flex items-center gap-6">
							<span className="font-medium text-sm text-muted-foreground">
								Sell
							</span>
							<div className="relative flex-1 flex items-center gap-2">
								<div className="w-[16%] h-2 bg-red-500" />
								<span className="text-sm text-muted-foreground font-medium transition-all">
									16%
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrencySentiment;
