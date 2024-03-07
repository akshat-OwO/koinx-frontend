import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const CurrencyAbout = () => {
	return (
		<div className="p-6 bg-white rounded-md flex flex-col gap-6">
			<h3 className="text-xl font-semibold">About Bitcoin</h3>
			<div className="space-y-4">
				<div className="space-y-2">
					<h4 className="text-lg font-bold">What is Bitcoin?</h4>
					<p className="text-muted-foreground font-medium">
						Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
						of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
						-7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
						its 7-day all-time low of $16,394.75. BTC has a circulating supply
						of 19.24 M BTC and a max supply of 21 M BTC.
					</p>
				</div>
				<Separator />
				<div className="space-y-4">
					<h4 className="text-lg font-bold">Lorem ipsum dolor sit amet</h4>
					<p className="text-muted-foreground font-medium">
						Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
						lobortis tristique pharetra. Diam id et lectus urna et tellus
						aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
						sed. Quam scelerisque fermentum sapien morbi sodales odio sed
						rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
						Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
					</p>
					<p className="text-muted-foreground font-medium">
						Diam praesent massa dapibus magna aliquam a dictumst volutpat.
						Egestas vitae pellentesque auctor amet. Nunc sagittis libero
						adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
						velit in senectus enim dui. Turpis tristique placerat interdum sed
						volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
						faucibus diam mi nunc praesent massa turpis a. Integer dignissim
						augue viverra nulla et quis lobortis phasellus. Integer pellentesque
						enim convallis ultricies at.
					</p>
					<p className="text-muted-foreground font-medium">
						Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
						massa vel convallis duis ac. Mi adipiscing semper scelerisque
						porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
						congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
						eget. Ullamcorper dui
					</p>
				</div>
				<Separator />
				<h3 className="text-xl font-semibold">Already Holding Bitcoin?</h3>
				<div className="flex flex-col items-center gap-4 lg:flex-row">
					<div className="w-full h-fit rounded-md p-3 bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] flex items-center gap-8">
						<div className="relative h-full">
							<Image
								src="/piggybank.jpg"
								alt="piggybank"
								height={128}
								width={128}
								className="aspect-square rounded-md object-cover"
							/>
						</div>
						<div className="flex-1 rounded-md flex flex-col gap-4">
							<p className="font-bold text-white text-xl max-w-48">
								Calculate your Profits
							</p>
							<Button
								variant="secondary"
								size="sm"
								className="w-fit bg-white gap-2"
							>
								Check now <ArrowRight className="size-4" />
							</Button>
						</div>
					</div>
					<div className="w-full h-fit rounded-md p-3 bg-gradient-to-br from-[#FF9865] to-[#EF3031] flex items-center gap-8">
						<div className="relative h-full">
							<Image
								src="/nori.jpg"
								alt="nori"
								height={128}
								width={128}
								className="aspect-square rounded-md object-cover"
							/>
						</div>
						<div className="flex-1 rounded-md flex flex-col gap-4">
							<p className="font-bold text-white text-xl max-w-48">
								Calculate your tax liability
							</p>
							<Button
								variant="secondary"
								size="sm"
								className="w-fit bg-white gap-2"
							>
								Check now <ArrowRight className="size-4" />
							</Button>
						</div>
					</div>
				</div>
				<Separator />
				<p className="text-muted-foreground font-medium">
					Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
					massa vel convallis duis ac. Mi adipiscing semper scelerisque
					porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
					congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
					eget. Ullamcorper dui
				</p>
			</div>
		</div>
	);
};

export default CurrencyAbout;
