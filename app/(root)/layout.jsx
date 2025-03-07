import Nav from '@/components/Nav'




export default function HomeLayout({
  children,
}) {
  return (
    <div className=' bg-[#faf9fb] w-full h-[100dvh] overflow-scroll'>

      <header>
          <Nav />
      </header>
      <main
      >
        {children}
      </main>
      </div>
  );
}
