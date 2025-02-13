import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductImages = ({ items }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const swiperRef = useRef(null);

	return (
		<div className='relative'>
			{/* Main Swiper */}
			<div className='h-[450px] relative mb-8 bg-white rounded-xl p-4'>
				<Swiper
					spaceBetween={10}
					navigation={false}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className='h-full'
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					{items.map((item) => (
						<SwiperSlide key={item._id}>
							<div className='relative h-full w-full'>
								<img
									src={item.image?.url || '/placeholder.svg'}
									alt=''
									sizes='50vw'
									className='object-contain rounded-md absolute inset-0 w-full h-full'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom navigation buttons */}
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all'
					aria-label='Previous slide'
				>
					<ChevronLeft className='w-6 h-6' />
				</button>
				<button
					onClick={() => swiperRef.current?.slideNext()}
					className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all'
					aria-label='Next slide'
				>
					<ChevronRight className='w-6 h-6' />
				</button>
			</div>

			{/* Thumbnail Swiper */}
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className='thumbs-swiper h-28'
			>
				{items.map((item) => (
					<SwiperSlide key={item._id}>
						<div className='relative h-full w-full cursor-pointer'>
							<img
								src={item.image?.url || '/placeholder.svg'}
								alt=''
								sizes='30vw'
								className='object-contain rounded-md absolute w-full h-full inset-0'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductImages;
