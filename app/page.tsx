import CurrencyStats from "@/components/currency-stats";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
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
			<div className="grid lg:grid-cols-6 gap-5">
				<CurrencyStats />
			</div>
		</LayoutWrapper>
	);
}
