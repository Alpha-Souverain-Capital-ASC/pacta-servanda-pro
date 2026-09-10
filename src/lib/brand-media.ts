import heroImage from "@/assets/stock/patrick-fore-H5Lf0nGyetk-unsplash.jpg";
import legalDeskImage from "@/assets/stock/mikhail-pavstyuk-EKy2OTRPXdw-unsplash.jpg";
import corporateSupportImage from "@/assets/stock/trent-erwin-UgA3Xvi3SkA-unsplash.jpg";
import propertySupportImage from "@/assets/stock/erik-mclean-24ZOFLNY4hA-unsplash.jpg";
import litigationImage from "@/assets/stock/kateryna-hliznitsova--v2MxvXK9OU-unsplash.jpg";
import employmentImage from "@/assets/stock/150-billi-EtiHiyDkld0-unsplash.jpg";
import familySupportImage from "@/assets/stock/delaney-van-I0QAx3d6LKw-unsplash.jpg";
import financeSupportImage from "@/assets/stock/kevin-canlas-2XXz0JKTw0w-unsplash.jpg";
import publicLawImage from "@/assets/stock/albert-stoynov-kIM48Mpp9iY-unsplash.jpg";
import intellectualPropertySupportImage from "@/assets/stock/lydia-verbeke-UKNluy3eYiE-unsplash.jpg";
import taxSupportImage from "@/assets/stock/subhajit-saha-photography-V44Z2MmchVA-unsplash.jpg";
import heroGavelImage from "@/assets/stock/sasun-bughdaryan-YFz39MOmxnQ-unsplash.jpg";
import heroJusticeImage from "@/assets/stock/tingey-injury-law-firm-L4YGuSg0fxs-unsplash.jpg";
import heroPortraitImage from "@/assets/stock/tingey-injury-law-firm-LJhXYHxPfEY-unsplash.jpg";
import homeAboutImage from "@/assets/content/jordyn-montague-ZpkZulvFhvQ-unsplash.jpg";
import insightLandImage from "@/assets/content/rowen-smith-PLJGJah4x24-unsplash.jpg";
import insightCompanyImage from "@/assets/content/shannon-rowies-3RTR4Zt7E5c-unsplash.jpg";
import insightSuccessionImage from "@/assets/content/thomas-couillard-pvLm_O5sqPw-unsplash.jpg";
import corporateImage from "@/assets/practice/benjamin-child-GWe0dlVD9e0-unsplash.jpg";
import propertyImage from "@/assets/practice/erik-mclean-2c9n9d3JGyE-unsplash.jpg";
import familyImage from "@/assets/practice/luemen-rutkowski-ZWbBxZ6zTwM-unsplash.jpg";
import financeImage from "@/assets/practice/micheile-henderson-ZVprbBmT8QA-unsplash.jpg";
import intellectualPropertyImage from "@/assets/practice/leandro-hernandez-mnDYD_4hf7k-unsplash.jpg";
import taxImage from "@/assets/practice/markus-winkler-UGfFIrvCXVY-unsplash.jpg";

// Bundled stock imagery keeps production independent of the Lovable asset
// proxy and third-party image requests. These are temporary editorial images
// until the firm's own office, associate and team photographs are available.
export const STOCK_MEDIA = {
  hero: heroImage,
  legalDesk: legalDeskImage,
  corporate: corporateImage,
  property: propertyImage,
  litigation: litigationImage,
  employment: employmentImage,
  family: familyImage,
  finance: financeImage,
  publicLaw: publicLawImage,
  intellectualProperty: intellectualPropertyImage,
  tax: taxImage,
  heroGavel: heroGavelImage,
  heroJustice: heroJusticeImage,
  heroPortrait: heroPortraitImage,
} as const;

export const INSIGHT_MEDIA = {
  homeAbout: homeAboutImage,
  land: insightLandImage,
  employment: employmentImage,
  succession: insightSuccessionImage,
  company: insightCompanyImage,
  lease: propertySupportImage,
  litigation: litigationImage,
  finance: financeSupportImage,
  intellectualProperty: intellectualPropertySupportImage,
  tax: taxSupportImage,
} as const;
