import getAllProducts from "./apis/allProducts";
import HomeCard from './_components/HomeCard/HomeCard';
import MainSlider from "./_components/MainSlider/MainSlider";
import CategorySlide from "./_components/CategorySlide/CategorySlide";
import { product } from "@/types/product.type";
import AddInputSearch from './_components/AddInputSearch/AddInputSearch';



export default async function Home() {


  const data = await getAllProducts()
  return (
    <>
      <head>
        <title>  Home </title>
      </head>
      <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto bg-white">
        <MainSlider />
        <CategorySlide />
        <div className="flex flex-wrap">
          <AddInputSearch products={data} />

        </div>

      </section>
    </>
  );
}
