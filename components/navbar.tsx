import { Menu } from "lucide-react";
import { Icons } from "./icons";
import LayoutWrapper from "./layouts/layout-wrapper";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
	return (
		<LayoutWrapper className="bg-white">
			<nav className="shadow-sm flex justify-between items-center">
				<Icons.koinx className="h-20" />
				<Sheet>
					<SheetTrigger asChild>
						<Button className="lg:hidden" variant="ghost" size="icon">
							<Menu className="size-8" />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>Menu</SheetHeader>
						<div className="py-10 flex flex-col gap-5">
							<Button variant="secondary" className="w-full">
								Crypto Taxes
							</Button>
							<Button variant="secondary" className="w-full">
								Free Tools
							</Button>
							<Button variant="secondary" className="w-full">
								Resource Center
							</Button>
							<Button className="w-full bg-gradient-to-bl from-[#2870EA] to to-[#1B4AEF]">
								Get Started
							</Button>
						</div>
					</SheetContent>
				</Sheet>
				<div className="hidden lg:flex items-center gap-2">
					<Button variant="link" className="w-full">
						Crypto Taxes
					</Button>
					<Button variant="link" className="w-full">
						Free Tools
					</Button>
					<Button variant="link" className="w-full">
						Resource Center
					</Button>
					<Button className="w-full bg-gradient-to-bl from-[#2870EA] to to-[#1B4AEF]">
						Get Started
					</Button>
				</div>
			</nav>
		</LayoutWrapper>
	);
};

export default Navbar;
