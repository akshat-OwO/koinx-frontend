import CurrencyStats from "@/components/currency-stats";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import PromoBanner from "@/components/promo-banner";
import TrendingCoins from "@/components/trending-coins";
import { Button } from "@/components/ui/button";
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
			<div className="flex flex-col lg:flex-row gap-5">
				<div className="flex-1">
					<CurrencyStats />
				</div>
				<div className="space-y-5">
					<PromoBanner />
					<TrendingCoins />
				</div>
			</div>
		</LayoutWrapper>
	);
}
