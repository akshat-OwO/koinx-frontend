import { ArrowRight } from "lucide-react";
import { Icons } from "./icons";
import { Button } from "./ui/button";

const PromoBanner = () => {
	return (
		<div className="flex flex-col gap-5 justify-around items-center rounded-md bg-[#0052FE] p-8">
			<div className="flex flex-col items-center gap-3">
				<h3 className="max-w-[16.75rem] text-center font-bold text-2xl text-white">
					Get Started with KoinX for Free
				</h3>
				<p className="max-w-80 text-center font-medium text-sm text-white">
					With our range of features that you can equip for free, KoinX allows
					you to be more educated and aware of your tax reports.
				</p>
			</div>
			<Icons.promoArt className="size-40" />
			<Button className="gap-2 bg-white hover:bg-white/80 text-neutral-950">
				Get Started for FREE
				<ArrowRight className="size-4" />
			</Button>
		</div>
	);
};

export default PromoBanner;
