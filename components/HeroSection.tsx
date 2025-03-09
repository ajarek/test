import { Button } from "@/components/ui/button";

const HeroSection=()=> {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 mt-20 md:mt-36">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Unlock Your Potential with Our Innovative Solutions
      </h1>
      <p className="text-lg text-gray-600 mb-8 mx-0 md:mx-44">
        We provide cutting-edge technology and expert guidance to help you
        overcome challenges and achieve remarkable success. Our team is
        dedicated to delivering exceptional results and empowering you to reach
        your full potential. Join us on a journey of growth and transformation.
      </p>
      <Button className="h-12">Explore Our Services</Button>
    </div>
  );
}
export default HeroSection