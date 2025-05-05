import { eventList } from '@/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  // Get the list of event IDs from your constants
  const eventIds = eventList.map(event => ({ eventId: event.id }));
  return eventIds;
}

export default function RegistrationForm({ params }) {
  const { eventId } = params;

  // Find the event with the matching ID
  const event = eventList.find((event) => event.id === eventId);

  // If event not found, return 404
  if (!event) {
    notFound();
  }

  // For static export, we'll redirect to an external Google Form
  // This is a simple placeholder that will show a message and a link to the form
  return (
    <div className="px-8 md:px-[160px] py-12 md:py-[100px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">{event.title} Registration</h1>
        <p className="text-center text-gray-600 mb-6">Please fill out the registration form on our external form</p>

        <div className="bg-white shadow-lg rounded-lg p-10 text-center">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Register for the {event.title}</h2>
          <p className="text-gray-600 mb-6">
            You are being redirected to our registration form. If you are not redirected automatically, please click the button below.
          </p>
          <div className="flex justify-center">
            <Link href="https://forms.gle/2r4NYYZwjVSLM5m37" target="_blank">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
                Go to Registration Form
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            For any inquiries, please contact:<br />
            <span className="font-semibold">{event.contactPerson}</span> at <a href={`mailto:${event.contactEmail}`} className="text-blue-600 hover:underline">{event.contactEmail}</a> or <a href={`tel:${event.contactPhone}`} className="text-blue-600 hover:underline">{event.contactPhone}</a>
          </p>
        </div>
      </div>
      <Footer />

      {/* Client-side redirect script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function() {
            window.location.href = "https://forms.gle/2r4NYYZwjVSLM5m37";
          }, 3000);
        `
      }} />
    </div>
  );
}
