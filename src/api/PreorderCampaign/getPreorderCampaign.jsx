import api from '../instance';
import { axiosConfigHeader, axiosConfigSendFileHeader } from '../axiosConfigHeader';

const getPreorderCampaign = async (pageSize, pageIndex) => {
	try {
		const response = await api.get('/PreorderCampaign', {
			...axiosConfigHeader,
			params: { pageSize, pageIndex },
		});
		const data = response.data;
		const paginationHeader = response.headers['x-pagination'];
		console.log('Pagination Header:', paginationHeader);

		const pagination = paginationHeader ? JSON.parse(paginationHeader) : null;

		return { data, pagination };
	} catch (error) {
		console.log('>>> Api Get Active Blind box Error: ', error);
		return { data: [], pagination: null };
	}
};

const getDetailPreorderCampaign = async (slug) => {
	try {
		const response = await api.get(`/PreorderCampaign/campaign/${slug}`, axiosConfigHeader);
		return response.data;
	} catch (error) {
		console.log('>>> Api Get Blind Box By ID Error: ', error);
		return null;
	}
};

const getAllImagesByBlindBoxId = async (blindBoxId) => {
	try {
		const response = await api.get(`/Image/GetAllByBlindBoxId/${blindBoxId}`, axiosConfigHeader);
		return response.data;
	} catch (error) {
		console.log('>>> Api Get All Images By Blind Box ID Error: ', error);
		return [];
	}
};

export { getPreorderCampaign, getDetailPreorderCampaign, getAllImagesByBlindBoxId };
