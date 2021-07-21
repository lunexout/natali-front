<template>
    <main>
        <Header />

        <Login />

        <WhatWeDo />

        <SingleProduct />

        <StylistList />
        <StylistList :reverse="true" />

        <ProductComponentFilter />

        <SingleBrand :brand="singlebrand" />

        <BigServices />

        <WhereWeComeFrom />

        <PosterVideo
            img="/assets/img/poster.png"
            :data="{ tag: 'nataligroup', title: 'nataligroup' }"
            videoLink="https://www.youtube.com/watch?v=Mysshd3GyDI"
        />

        <GallerySlider :galleryList="galleryList" />

        <FormRequestColorTexture />

        <FormLearningAcademy />

        <FormMeetingSchedule />

        <FormConsultingSpa />

        <FormRequestPrice />

        <PosterAdditional
            img="/assets/img/poster.png"
            :data="{
                title: 'asd',
                text: 'asldkas asldkas adlk mas',
                buttonText: 'Learn More',
            }"
        />

        <PDFAcademy />

        <SpaDistProducts />

        <EventsListing />

        <FormPosterAcademyCenter />

        <FormPosterAcademy />

        <PDFAcademyPoster :reverse="true" />
        <PDFAcademyPoster :reverse="false" />

        <UpcomingSeminar />

        <PDFAcademySlider />

        <ProgramsAcademy />

        <SpaConceptProductPoster />

        <BeforeAfterDuo />

        <BeforeAfterTrio />

        <FAQ />

        <Quote
            text="Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for"
            author="eu blanditeu eu"
        />

        <ProjectsSlider :projectsList="projectsList" />

        <TestimonialsSlider />

        <ServiceSpaConcept />

        <Catalogue />

        <Programs />

        <ProgramDonation />

        <OngoingCauses />

        <JobsSlider />

        <Poster img="/assets/img/poster.png" :data="posterData" />

        <Poster img="/assets/img/poster.png" />

        <GiftCard />

        <ContactUsForm />

        <Gallery />

        <PostPressNews />

        <Franchize />

        <RewardsSlider />

        <OurStory />

        <DonationCharity />

        <PressSlider :newsList="newslist" />

        <ProductOfferSlider />

        <ProductOfferSliderLanding />

        <ProductSlider />

        <BrandsSlider :brandList="brandlist" title="Partners" />

        <ServicesSliderSwitch />

        <NewsSlider />

        <ContactUsInfo />

        <PressNews :reverse="false" />

        <PressNews :reverse="true" />

        <OffersSlider />

        <ServicesSlider :data="sliderData" />

        <Footer />
    </main>
</template>

<script>
import Login from "./../components/user/login";

import Header from "./../components/header";
import Footer from "./../components/footer";
import ProductSlider from "./../components/medium/productSlider";
import PressNews from "./../components/small/pressNews";
import ServicesSlider from "./../components/medium/servicesSlider";
import OffersSlider from "./../components/medium/offersSlider";
import ContactUsInfo from "./../components/medium/contactUsInfo";
import ContactUsForm from "./../components/medium/contactUsForm";
import NewsSlider from "../components/medium/newsSlider";
import ServicesSliderSwitch from "./../components/medium/servicesSliderSwitch";
import BrandsSlider from "./../components/medium/brandsSlider";
import ProductOfferSliderLanding from "./../components/medium/productOfferSliderLanding";
import ProductOfferSlider from "./../components/medium/productOfferSlider";
import PressSlider from "./../components/medium/pressSlider";
import DonationCharity from "./../components/medium/donationCharity";
import OurStory from "./../components/medium/ourStory";
import RewardsSlider from "./../components/medium/rewardsSlider";
import GallerySlider from "./../components/medium/gallerySlider";
import Franchize from "./../components/medium/franchize";
import PostPressNews from "./../components/big/postPressNews";
import Gallery from "./../components/medium/gallery";
import GiftCard from "./../components/medium/giftCard";
import Poster from "./../components/medium/poster";
import PosterAdditional from "./../components/medium/posterAdditional";
import JobsSlider from "./../components/medium/jobsSlider";
import OngoingCauses from "./../components/medium/ongoingCauses";
import ProgramDonation from "./../components/medium/programDonation";
import Programs from "./../components/medium/programs";
import Catalogue from "./../components/medium/catalogue";
import TestimonialsSlider from "./../components/medium/testimonialsSlider";
import ProjectsSlider from "./../components/medium/projectsSlider";
import ServiceSpaConcept from "./../components/big/serviceSpaConcept";
import Quote from "./../components/small/quote";
import FAQ from "./../components/small/faq.vue";
import BeforeAfterDuo from "./../components/big/beforeAfterDuo";
import BeforeAfterTrio from "./../components/big/beforeAfterTrio";
import SpaConceptProductPoster from "./../components/medium/spaConceptProductPoster";
import ProgramsAcademy from "./../components/medium/programsAcademy";
import PDFAcademySlider from "./../components/medium/pdfAcademySlider";
import UpcomingSeminar from "./../components/medium/upcomingSeminar";
import PDFAcademyPoster from "./../components/medium/pdfAcademyPoster";
import FormPosterAcademy from "./../components/big/formPosterAcademy";
import FormPosterAcademyCenter from "./../components/big/formPosterAcademyCenter";
import EventsListing from "./../components/big/eventsListing";
import SpaDistProducts from "./../components/big/SpaDistProducts";
import PDFAcademy from "./../components/medium/pdfAcademy";
import FormRequestPrice from "./../components/forms/requestPrice";
import FormConsultingSpa from "./../components/forms/consultingSpa";
import FormMeetingSchedule from "./../components/forms/meetingSchedule";
import FormLearningAcademy from "./../components/forms/learningAcademy";
import FormRequestColorTexture from "./../components/forms/requestColorTexture";
import PosterVideo from "./../components/medium/posterVideo";
import WhereWeComeFrom from "./../components/medium/whereWeComeFrom";
import BigServices from "./../components/big/bigServices";
import SingleBrand from "./../components/big/singleBrand";
import ProductComponentFilter from "./../components/big/productComponentFilter";
import StylistList from "./../components/medium/stylistList";
import SingleProduct from "./../components/big/singleProduct";
import WhatWeDo from "./../components/big/whatWeDo";

export default {
    name: "test",
    components: {
        Login,
        Header,
        Footer,
        GiftCard,
        Poster,
        PosterAdditional,
        ProductSlider,
        ServicesSlider,
        OffersSlider,
        PressNews,
        ContactUsInfo,
        ContactUsForm,
        NewsSlider,
        ServicesSliderSwitch,
        BrandsSlider,
        ProductOfferSliderLanding,
        ProductOfferSlider,
        PressSlider,
        DonationCharity,
        OurStory,
        RewardsSlider,
        GallerySlider,
        Franchize,
        PostPressNews,
        Gallery,
        JobsSlider,
        OngoingCauses,
        ProgramDonation,
        Programs,
        Catalogue,
        ServiceSpaConcept,
        TestimonialsSlider,
        ProjectsSlider,
        Quote,
        FAQ,
        BeforeAfterDuo,
        BeforeAfterTrio,
        SpaConceptProductPoster,
        ProgramsAcademy,
        PDFAcademySlider,
        UpcomingSeminar,
        PDFAcademyPoster,
        FormPosterAcademy,
        FormPosterAcademyCenter,
        EventsListing,
        SpaDistProducts,
        PDFAcademy,
        FormRequestPrice,
        FormConsultingSpa,
        FormMeetingSchedule,
        FormLearningAcademy,
        FormRequestColorTexture,
        PosterVideo,
        WhereWeComeFrom,
        BigServices,
        SingleBrand,
        ProductComponentFilter,
        StylistList,
        SingleProduct,
        WhatWeDo,
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
    },
    data() {
        return {
            singlebrand: {
                name: "Summer Vacation Fragrance Mist",
                text1:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atquecommodi blanditiis molestias. Saepe provident, iure inventore consequuntur omnis rem, commodi quod maxime ipsam, neque fugiat beatae fuga. Qui, itaque. Debitis.",
                text2:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atquecommodi blanditiis molestias. Saepe provident, iure inventore consequuntur omnis rem, commodi quod maxime ipsam, neque fugiat beatae fuga. Qui, itaque. Debitis.",
                img1: "/assets/img/poster.png",
                img2: "/assets/img/poster.png",
                slides: [
                    "/assets/img/pn.png",
                    "/assets/img/pressnews.png",
                    "/assets/img/pn.png",
                    "/assets/img/pressnews.png",
                    "/assets/img/pn.png",
                    "/assets/img/pressnews.png",
                ],
            },
            projectsList: [
                {
                    title: "Lorem ipsum dolor 1",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam nfacilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
                {
                    title: "Lorem ipsum dolor 2",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin accumsan elit ut ipsum venenatis lacinia. Praesent libero tellus, lobortis malesuada ala facilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
                {
                    title: "Lorem ipsum dolor 3",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin accumsan elit ut ipsum venenatis lacinia. Praesent libero tellus, lobortis malesuada aliquet sit amet, malesuada a libero. Nulla facilisi. Nunc sed risus aliquam, rutrum urna sed, convallis augue. Duis vulputate libero in consequat elementum. Fusce et eros at urna facilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
                {
                    title: "Lorem ipsum dolor 4",
                    capt: "que arcu vehicula ipsum",
                    desc:
                        "Nam gravida in nunc eu blandit. Etiam ornare sodales sem, vitae elementum neque imperdiet ac. In semper, quam non egestas eleifend, neque arcu vehicula ipsum, mattis varius mauris nisl quis magna. Proin accumsan elit ut ipsum venenatis lacinia. Praesent libero tellus, lobortis malesuada aliquet sit amet, malesuada a libero. Nulla facilisi. Nunc sed risus aliquam, rutrum urna sed, convallis augue. Duis vulputate libero in consequat elementum. Fusce et eros at urna facilisis tincidunt posuere a massa.",
                    img: "/assets/img/servicesp.png",
                    duration: "7-8 month",
                },
            ],
            posterData: {
                title: "natali group",
                tag: "natali group",
                buttonText: "Book or buy",
            },
            galleryList: [
                {
                    title: "Nataligroup 1",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://www.youtube.com/watch?v=Mysshd3GyDI",
                },
                {
                    title: "Nataligroup 2",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: false,
                    videoLink: "",
                },
                {
                    title: "Nataligroup 3",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://youtu.be/DE5AOOvFr7w",
                },
                {
                    title: "Nataligroup 4",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: false,
                    videoLink: "",
                },
                {
                    title: "Nataligroup 5",
                    tag: "smth idk",
                    bigImg: "/assets/img/gallery.png",
                    img: "/assets/img/gallery.png",
                    video: true,
                    videoLink: "https://youtu.be/DE5AOOvFr7w",
                },
            ],
            newslist: [
                {
                    title: "Title 1",
                    desc: "Desc 1",
                    img: "/assets/img/onenews.png",
                    // link: '' <- it should lead on the onePress Page
                },
                {
                    title: "Title 2",
                    desc:
                        "Desc 2 asdasd asd asd asd asd asd asd asd as ddasd asasdasas da sd asd asd asd as das das da as asd",
                    img: "/assets/img/pressnews.png",
                    // link: '' <- it should lead on the onePress Page
                },
                {
                    title: "Title 3",
                    desc: "Desc 3",
                    img: "/assets/img/onenews.png",
                    // link: '' <- it should lead on the onePress Page
                },
                {
                    title: "Title 4",
                    desc: "Desc 4",
                    img: "/assets/img/onenews.png",
                    // link: '' <- it should lead on the onePress Page
                },
                {
                    title: "Title 5",
                    desc: "Desc 5",
                    img: "/assets/img/onenews.png",
                    // link: '' <- it should lead on the onePress Page
                },
            ],
            brandlist: [
                {
                    brandImg: "/assets/img/logo_deka.png",
                    bigImg: "/assets/img/brandsImage.png",
                    title: "Test 1",
                    desc:
                        "Desc 1 slkdjfkjsdhfkjsdhfk slkdjfkjsdhfkjsdhfk slkdjfkjsdhfkjsdhfk slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                },
                {
                    brandImg: "/assets/img/logo_deka.png",
                    bigImg: "/assets/img/contactsandlivechat.png",
                    title: "Test 2",
                    desc:
                        "Desc 2 slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                },
                {
                    brandImg: "/assets/img/logo_deka.png",
                    bigImg: "/assets/img/brandsImage.png",
                    title: "Test 3",
                    desc:
                        "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                },
                {
                    brandImg: "/assets/img/logo_deka.png",
                    bigImg: "/assets/img/brandsImage.png",
                    title: "Test 4",
                    desc:
                        "Desc 4 slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                },
                {
                    brandImg: "/assets/img/logo_deka.png",
                    bigImg: "/assets/img/brandsImage.png",
                    title: "Test 5",
                    desc:
                        "Desc 5 slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                },
            ],
            sliderData: {
                allServices: [
                    {
                        key: 1,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test1 en",
                        name_ge: "test1 ge",
                        name_ru: "test1 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 1,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test2 en",
                        name_ge: "test2 ge",
                        name_ru: "test2 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 2,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test3 en",
                        name_ge: "test3 ge",
                        name_ru: "test3 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 3,
                        image: "/assets/img/services.png",
                        kind: "single",
                        name_en: "test4 en",
                        name_ge: "test4 ge",
                        name_ru: "test4 ru",
                        desc_en: "slkdjflsdjkflksdjf;lsddjfj en",
                        desc_ge:
                            "slkdjfkjsdhfkjsdhfk sdlfhldsfh dsjkf kdsjf lkdsf kljdsfl ds ge",
                        desc_ru:
                            "sldkjflsdkjf ldsjkfl;ksdjfl;kjdsfl;kj ds;fkj dsjk ru",
                        price: "10",
                    },
                    {
                        key: 1,
                        image: "/assets/img/services.png",
                        kind: "multi",
                        subGroups: [
                            {
                                group: "stylist",
                                subService: [
                                    { name: "short", time: "20", price: "20" },
                                    { name: "medium", time: "30", price: "25" },
                                    { name: "long", time: "40", price: "30" },
                                ],
                            },
                            {
                                group: "Top Stylist",
                                subService: [
                                    { name: "short", time: "22", price: "42" },
                                    {
                                        name: "medium",
                                        time: "30",
                                        price: "124",
                                    },
                                    { name: "long", time: "40", price: "1242" },
                                ],
                            },
                            {
                                group: "ART DIR",
                                subService: [
                                    {
                                        name: "short",
                                        time: "230",
                                        price: "21230",
                                    },
                                    {
                                        name: "medium",
                                        time: "230",
                                        price: "2235",
                                    },
                                    {
                                        name: "long",
                                        time: "1240",
                                        price: "3320",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        key: 4,
                        image: "/assets/img/services.png",
                        kind: "multi",
                        subGroups: [
                            {
                                group: "stylist",
                                subService: [
                                    { name: "short", time: "20", price: "20" },
                                    { name: "medium", time: "30", price: "25" },
                                    { name: "long", time: "40", price: "30" },
                                ],
                            },
                            {
                                group: "Top Stylist",
                                subService: [
                                    { name: "short", time: "22", price: "42" },
                                    {
                                        name: "medium",
                                        time: "30",
                                        price: "124",
                                    },
                                    { name: "long", time: "40", price: "1242" },
                                ],
                            },
                            {
                                group: "ART DIR",
                                subService: [
                                    {
                                        name: "short",
                                        time: "230",
                                        price: "21230",
                                    },
                                    {
                                        name: "medium",
                                        time: "230",
                                        price: "2235",
                                    },
                                    {
                                        name: "long",
                                        time: "1240",
                                        price: "3320",
                                    },
                                ],
                            },
                        ],
                    },
                ],
                serviceGroups: [
                    { name: "Hair cut", key: 1 },
                    { name: "cosmetology", key: 2 },
                    { name: "Skin care", key: 3 },
                    { name: "Makeup", key: 4 },
                ],
                // selectedService: [],
                // activeKey: '',
            },
        };
    },
};
</script>

<style scoped>
</style>
