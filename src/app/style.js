const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-center  sm:text-left text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[30.8px] text-center sm:text-left",

  flexCenter: "flex justify-center items-center",
  flexBetween: "flex justify-between items-center",
  flexStart: "flex justify-start items-center",

  paddingX: "sm:px-16 md:px-32 px-6 container mx-auto",
  paddingY: "py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  navbar: `${styles.flexBetween} ${styles.paddingX}  py-6`,
  ulDesktop: `${styles.flexCenter} gap-10 hidden sm:flex`,
  ulMobile: `sm:hidden absolute right-0 p-10 mx-6 rounded-lg top-20 bg-black-gradient ${styles.flexCenter} gap-5 flex-col`,

  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
