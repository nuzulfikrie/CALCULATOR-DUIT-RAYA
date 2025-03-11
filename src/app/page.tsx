import DuitRayaCalculator from '../components/DuitRayaCalculator';
import FooterComponent from '../components/FooterComponent';
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/** footer component and Duit Raya Calculator is in single card */}
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <DuitRayaCalculator />
        <FooterComponent />
      </div>
    </main>
  );
}