interface ILinksReviewSocial {
    id: number;
    image: string;
    name: string;
    link: string
};

export interface IHomeData {
    service: boolean;

    bannerImage: string;
    bannerTitle: string;
    bannerDescription: string;

    reviewTitle: string;
    reviewSubTitle: string;
    reviewDescription: string;

    autoTransportTitle: string;
    autoTransportDescription: string;
    autoTransportImage1: string;
    autoTransportImage2: string;

    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoLinkText: string;
    videoImage: string;
    videoPlayImage: string;

    linksReviewTitle: string;
    linksReviesSocial: Array<ILinksReviewSocial>;
}

export class HomeAdapter {
    constructor(
        public service: boolean,

        public bannerImage: string,
        public bannerTitle: string,
        public bannerDescription: string,
    
        public reviewTitle: string,
        public reviewSubTitle: string,
        public reviewDescription: string,
        
        public autoTransportTitle: string,
        public autoTransportDescription: string,
        public autoTransportImage1: string,
        public autoTransportImage2: string,

        public videoTitle: string,
        public videoDescription: string,
        public videoLink: string,
        public videoLinkText: string,
        public videoImage: string,
        public videoPlayImage: string,

        public linksReviewTitle: string,
        public linksReviesSocial: Array<ILinksReviewSocial>
    ) {};
  
    public static createHomeData(data: any): IHomeData {
        return new HomeAdapter(
            data.service,
            // BANNER
            data?.['home.banner_image']?.page_image[0].image || '',
            data?.['home.banner_title']?.value || '',
            data?.['home.banner_description']?.value || '',

            // REVIEW
            data?.['home.review_title']?.value || '',
            data?.['home.review_sub_title']?.value || '',
            data?.['home.review_description']?.value || '',

            // AUTO TRANSPORT
            data?.['home.auto_Transport_Title']?.value || '',
            data?.['home.auto_transport_description']?.value || '',
            data?.['home.auto_transport_first_image']?.page_image[0].image || '',
            data?.['home.auto_transport_seccond_image']?.page_image[0].image || '',

            // VIDEO SECTION
            data?.['home.video_block_title']?.value || '',
            data?.['home.video_description']?.value || '',
            data?.['home.video_link']?.value || '',
            data?.['home.video_link_text']?.value || '',
            data?.['home.video_image']?.page_image[0].image || '',
            data?.['home.video_play_image']?.page_image[0].image || '',

            // LINKS REVIEW
            data?.['home.links_review_title']?.value || '',
            data?.['home.links_review']?.map((link, index): ILinksReviewSocial => ({
                id: index,
                image: link.social_image.page_image[0].image,
                link: link.social_link.value,
                name: link.social_name.value
            })) || []
        );
    }
}