import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Category({ category }: any) {
  

  
  return (
    <div className="">
        <div className="inner">
            <Card
      className="p-2 gap-2  border-0 shadow-[0px_0px_0px_0_#4fa74f] hover:shadow-[1px_1px_10px_0_#4fa74f] duration-400 group cursor-pointer"
    >
      <CardHeader className="p-0 ">
        <Image
          width={300}
          height={300}
          className="object-cover object-center w-full h-[300px] overflow-hidden"
          src={category.image}
          alt={category.name}
        />
      </CardHeader>
      <CardContent className="p-0">
        <p className="font-bold text-green-500 mb-3 text-center text-2xl py-1">
          {category.name}
        </p>
      </CardContent>
    </Card>
        </div>
    </div>
  );
}