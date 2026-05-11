import { HeroSection } from './components/HeroSection';
import { HomeHeader } from './components/HomeHeader';
import { ModelsFooter } from './components/ModelsFooter';
import { ProjectList } from './components/ProjectList';

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f1929]">
      <HomeHeader />
      <main className="flex-1">
        <HeroSection />
        <div className="border-t border-[#2a2a4a]" />
        <ProjectList />
      </main>
      <ModelsFooter />
    </div>
  );
}
