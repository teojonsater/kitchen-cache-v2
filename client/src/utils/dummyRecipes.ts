import type RecipeObject from "../interfaces/recipe/RecipeObject";
import asiatiskKyckling from "./recipes/Asiatisk kycklinggryta med pasta.json";
import linsBolognese from "./recipes/Billig linsbolognese.json";
import friedRice from "./recipes/Chicken fried rice.json";
import ciderKyckling from "./recipes/Ciderkyckling med dragon och ris.json";
import dragonFlask from "./recipes/Fläskytterfilé i dragonsås med pressad potatis.json";
import gulasch from "./recipes/Gulaschsoppa med köttfärs.json";
import friedChicken from "./recipes/Korean fried chicken    .json";
import korvGryta from "./recipes/Korvgryta med bönor och pesto.json";
import carbonara from "./recipes/Krämig carbonara.json";
import chiliKyckling from "./recipes/Krämig sweet chilikyckling i ugn.json";
import curryNudlar from "./recipes/Krämiga nudlar med röd curry och krispig färs.json";
import wokKyckling from "./recipes/Kyckling med woksås och nudlar.json";
import kycklingBaconGryta from "./recipes/Kyckling- och bacongryta med champinjoner.json";
import tomatKycklingGryta from "./recipes/Kycklinggryta med tomat och örter.json";
import puttanesca from "./recipes/One pot pasta puttanesca.json";
import rotfruktSoppa from "./recipes/Rostad rotfruktssoppa.json";
import torskDill from "./recipes/Torsk med ärter och dill.json";
import udonNudlar from "./recipes/Udonnudlar med kimchi.json";
import ugnspannkaka from "./recipes/Ugnspannkaka (grundrecept).json";
import vodkaPasta from "./recipes/Vodkapasta med bacon.json";

const dummyRecipes: RecipeObject[] = [
	asiatiskKyckling as unknown as RecipeObject,
	linsBolognese as unknown as RecipeObject,
	friedRice as unknown as RecipeObject,
	ciderKyckling as unknown as RecipeObject,
	dragonFlask as unknown as RecipeObject,
	gulasch as unknown as RecipeObject,
	friedChicken as unknown as RecipeObject,
	korvGryta as unknown as RecipeObject,
	carbonara as unknown as RecipeObject,
	chiliKyckling as unknown as RecipeObject,
	curryNudlar as unknown as RecipeObject,
	wokKyckling as unknown as RecipeObject,
	kycklingBaconGryta as unknown as RecipeObject,
	tomatKycklingGryta as unknown as RecipeObject,
	puttanesca as unknown as RecipeObject,
	rotfruktSoppa as unknown as RecipeObject,
	torskDill as unknown as RecipeObject,
	udonNudlar as unknown as RecipeObject,
	ugnspannkaka as unknown as RecipeObject,
	vodkaPasta as unknown as RecipeObject,
];

export default dummyRecipes;
