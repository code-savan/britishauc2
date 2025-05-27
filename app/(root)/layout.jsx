export default function RootLayout({
  children,
}) {
  return (
    <div className='bg-[#faf9fb] w-full min-h-[100dvh] overflow-auto'>
      <main>
        {children}
      </main>
    </div>
  );
}
