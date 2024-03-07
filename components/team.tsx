import Image from "next/image";

const Team = () => {
	return (
		<div className="p-6 bg-white rounded-md flex flex-col gap-6">
			<h3 className="text-xl font-semibold">Team</h3>
			<p className="text-muted-foreground text-sm font-medium">
				Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
				nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
				quam. Facilisis purus convallis quam augue.
			</p>
			<div className="bg-blue-100 px-6 py-3 rounded-md flex flex-col md:flex-row items-center gap-4 md:gap-8">
				<div className="flex items-center flex-col gap-2">
					<div className="relative h-full">
						<Image
							src="/John.png"
							alt="John Smith"
							width={97}
							height={105}
							className="object-cover rounded-md h-full"
						/>
					</div>
					<div className="flex items-center flex-col gap-0.5">
						<p className="font-semibold">John Smith</p>
						<span className="text-muted-foreground text-sm font-medium">
							Designation here
						</span>
					</div>
				</div>
				<p className="flex-1 text-muted-foreground text-sm">
					Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
					fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
					nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
					neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
					quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
					dolor est ipsum. Malesuada etiam mi gravida praesent interdu
				</p>
			</div>
			<div className="bg-blue-100 px-6 py-3 rounded-md flex flex-col md:flex-row items-center gap-4 md:gap-8">
				<div className="flex items-center flex-col gap-2">
					<div className="relative h-full">
						<Image
							src="/Elina.png"
							alt="Elina Williams"
							width={97}
							height={105}
							className="object-cover rounded-md h-full"
						/>
					</div>
					<div className="flex items-center flex-col gap-0.5">
						<p className="font-semibold">Elina Williams</p>
						<span className="text-muted-foreground text-sm font-medium">
							Designation here
						</span>
					</div>
				</div>
				<p className="flex-1 text-muted-foreground text-sm">
					Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
					fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
					nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
					neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
					quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
					dolor est ipsum. Malesuada etiam mi gravida praesent interdu
				</p>
			</div>
			<div className="bg-blue-100 px-6 py-3 rounded-md flex flex-col md:flex-row items-center gap-4 md:gap-8">
				<div className="flex items-center flex-col gap-2">
					<div className="relative h-full">
						<Image
							src="/JohnS.png"
							alt="John Smith"
							width={97}
							height={105}
							className="object-cover rounded-md h-full"
						/>
					</div>
					<div className="flex items-center flex-col gap-0.5">
						<p className="font-semibold">John Smith</p>
						<span className="text-muted-foreground text-sm font-medium">
							Designation here
						</span>
					</div>
				</div>
				<p className="flex-1 text-muted-foreground text-sm">
					Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
					fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
					nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
					neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
					quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
					dolor est ipsum. Malesuada etiam mi gravida praesent interdu
				</p>
			</div>
		</div>
	);
};

export default Team;
