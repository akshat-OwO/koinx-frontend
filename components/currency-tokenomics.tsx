"use client";

import Chart, { ChartData, ChartOptions } from "chart.js/auto";
import { useEffect, useRef } from "react";

const CurrencyTokenomics = () => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const data: ChartData<"doughnut", number[], string> = {
			labels: ["Crowdsale investors", "Foundation"],
			datasets: [
				{
					data: [80, 20],
					backgroundColor: ["#0082FF", "#FAA002"],
					borderWidth: 0,
				},
			],
		};

		const options: ChartOptions<"doughnut"> = {
			cutout: "60%",
			plugins: {
				legend: {
					display: false,
				},
			},
		};

		if (chartRef.current) {
			const ctx = chartRef.current.getContext("2d");
			if (ctx) {
				const myChart = new Chart(ctx, {
					type: "doughnut",
					data,
					options,
				});

				return () => {
					myChart.destroy();
				};
			}
		}
	}, []);

	return (
		<div className="p-6 bg-white rounded-md hidden lg:flex flex-col gap-6">
			<h3 className="text-xl font-semibold">About Bitcoin</h3>
			<h4 className="text-lg font-semibold">Initial Distribution</h4>
			<div className="flex items-center gap-6">
				<div className="relative size-44">
					<canvas ref={chartRef} />
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<div className="rounded-full size-2 bg-blue-500" />
						<span>Crowdsale investors: 80%</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="rounded-full size-2 bg-amber-500" />
						<span>Foundation: 20%</span>
					</div>
				</div>
			</div>
			<p className="text-sm text-muted-foreground font-medium">
				Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
				vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
				amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
				eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
				felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
				aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
				curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
				ut. Vulputate ipsum aliquet odio nisi eu ac risus.
			</p>
		</div>
	);
};

export default CurrencyTokenomics;
