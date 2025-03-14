/* eslint-disable react-hooks/exhaustive-deps */
import ProductImages from '../../../components/ProductImage/ProductImage';
import CountdownTimer from '../../../components/CountDown/CountDown';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getAllImagesByBlindBoxId, getDetailPreorderCampaign } from '../../../api/PreorderCampaign/getPreorderCampaign';
import PreorderMilestones from '../../../components/PreorderMilestones/PreorderMilestones';

const ProductDetail = () => {
	const params = useParams();
	const { slug } = params;

	const [data, setData] = useState();
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	console.log('data', data);

	const productDetailBlind = async () => {
		try {
			setLoading(true);
			const res = await getDetailPreorderCampaign(slug);
			setData(res);

			if (res?.blindBox?.blindBoxId) {
				const imagesList = await getAllImagesByBlindBoxId(res.blindBox.blindBoxId);
				setImages(imagesList);
			}
		} catch (error) {
			console.error('Error fetching product details:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		productDetailBlind();
	}, []);

	if (loading) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<div className='w-12 h-12 border-t-2 border-b-2 border-yellow-400 rounded-full animate-spin'></div>
			</div>
		);
	}

	return (
		<div className='sec-com'>
			<div className='container-lg'>
				<div className='relative flex flex-col justify-between gap-6 lg:flex-row'>
					{/* IMG */}
					<div className='top-0 w-full lg:w-1/2 lg:sticky h-max'>
						{images && images.length > 0 ? (
							<ProductImages items={images} />
						) : (
							data?.blindBox?.images?.galleryImages.length > 0 && (
								<ProductImages items={data?.blindBox?.images?.galleryImages} />
							)
						)}
					</div>

					{/* TEXTS */}
					<div className='flex flex-col w-full gap-3 lg:w-1/2'>
						<div className='w-full p-6 mx-auto bg-white rounded-lg shadow-sm'>
							<div className='inline-block px-4 py-1 mb-6 text-white rounded-full bg-emerald-400'>
								Đặt trước
							</div>

							<h1 className='mb-6 text-3xl font-bold'>{data?.blindBox.name}</h1>

							{/* Milestone pricing display */}
							{data?.preorderMilestones && (
								<PreorderMilestones
									milestones={data.preorderMilestones}
									placedOrderCount={data.placedOrderCount}
									totalQuantity={data.totalQuantity}
								/>
							)}

							{/* <div className='flex items-center gap-2 mb-4'>
								<span className='inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full'>
									<span>
										Thời gian đặt trước: {formattedStartDate} - {formattedEndDate}
									</span>
								</span>
							</div> */}

							<CountdownTimer endDate={data?.endDate} />

							<div className='flex items-center gap-2 my-4'>
								<span className='inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full'>
									<span>Mục tiêu dự kiến: {data?.totalQuantity} sản phẩm</span>
								</span>
							</div>

							<div className='flex items-center gap-2 my-4'>
								<span className='inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full'>
									<span>Đã đặt: {data?.placedOrderCount} sản phẩm</span>
								</span>
							</div>

							<div className='mb-8 space-y-6'>
								<p className='leading-relaxed text-gray-600'>{data?.blindBox.description}</p>

								<div className='space-y-4'>
									<div>
										<h3 className='mb-2 text-gray-700'>Size:</h3>
										<div className='flex gap-2'>
											<span className='px-4 py-2 bg-yellow-100 rounded-full'>
												{data?.blindBox.size}
											</span>
										</div>
									</div>
								</div>
							</div>

							<button className='w-full py-4 font-medium transition-colors bg-yellow-400 rounded-full hover:bg-yellow-500'>
								ĐĂNG KÝ ĐẶT TRƯỚC
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
