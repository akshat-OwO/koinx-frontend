import CurrencyAbout from "@/components/currency-about";
import CurrencyInfo from "@/components/currency-info";
import CurrencySentiment from "@/components/currency-sentiment";
import CurrencyStats from "@/components/currency-stats";
import CurrencyTokenomics from "@/components/currency-tokenomics";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import PromoBanner from "@/components/promo-banner";
import Team from "@/components/team";
import TrendingCoins from "@/components/trending-coins";
import { Button } from "@/components/ui/button";
import YouMayAlsoLike from "@/components/you-may-also-like";
import { ChevronsRight } from "lucide-react";

export default function Home() {
	return (
		<LayoutWrapper className="py-10">
			<div className="flex items-center gap-2 pb-5">
				<Button
					variant="link"
					className="h-fit w-fit p-0 text-muted-foreground"
				>
					Cryptocurrencies
				</Button>
				<ChevronsRight className="size-4 stroke-muted-foreground" />
				<Button variant="link" className="h-fit w-fit p-0">
					Bitcoin
				</Button>
			</div>
			<div className="flex flex-col xl:grid xl:grid-cols-12 gap-5">
				<div className="xl:col-span-8 xl:row-start-1 flex flex-col gap-5">
					<CurrencyStats />
					<CurrencyInfo />
					<CurrencySentiment />
					<CurrencyAbout />
					<CurrencyTokenomics />
					<Team />
				</div>
				<div className="xl:col-span-full">
					<YouMayAlsoLike />
				</div>
				<div className="xl:col-span-4 xl:col-start-9 xl:row-start-1 space-y-5">
					<PromoBanner />
					<TrendingCoins />
				</div>
			</div>
		</LayoutWrapper>
	);
}
