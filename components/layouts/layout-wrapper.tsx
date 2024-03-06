import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface LayoutWrapperProps {
	children: ReactNode;
	className?: string;
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children, className }) => {
	return (
		<div className={cn("px-2.5 md:px-20", className)}>
			{children}
		</div>
	);
};

export default LayoutWrapper;
