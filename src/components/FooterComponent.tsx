//FooterComponent.tsx
//show built with ❤️ on {nextJs version} by {nuzulfikrie@fikriesalam.dev} 
//show hire me button
//show contact me button
//show my social media button
//show my email button
//show my phone button
//show my address button
//show my website button


//detect nextJs version
import Image from 'next/image';

const NextJsLogo = () => {
  return (
    <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} priority />
  );
};

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">
          Built with ❤️ on {NextJsLogo()} by nuzulfikriesalam@fikriesalam.dev
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;