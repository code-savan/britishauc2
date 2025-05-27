import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function InternationalEducationLayout({
  children,
}) {
  return (
    <div className='bg-[#faf9fb] w-full min-h-[100dvh] overflow-auto'>
      <header>
        <Nav />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
