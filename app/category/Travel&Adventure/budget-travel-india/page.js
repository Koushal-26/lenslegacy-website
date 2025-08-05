
import Image from "next/image";


export const metadata = {
  title: "Budget Travel in India: Top Tips for Exploring Cheaply",
  description: "Discover simple and smart tips for budget travel in India. Learn how to explore India on a low budget and still enjoy its beauty.",
  keywords: "budget travel, India, travel tips, cheap travel, travel on a budget, explore India cheaply, travel hacks, backpacking India, affordable destinations, low cost travel, Indian hostels, travel guide India, saving money travel, solo travel India, public transport India, street food India, best places to visit India, travel planning, off-season travel, Indian guesthouses, travel deals India",
};

const BudgetTravelBlog = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
        Budget Travel in India: Explore More, Spend Less
      </h1>

      <Image
        src="/images/india-travel.jpg"
        alt="Budget Travel in India"
        width={800}
        height={400}
        className="rounded-xl shadow-lg mb-6"
      />

      <p className="text-xl text-gray-700 mb-4">
        India is a colorful land filled with culture, food, and adventure. But did you know you can explore it without spending too much money? Here&apos;s how to travel on a budget in India.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Choose Budget-Friendly Places</h2>
      <p className="mb-4 text-gray-700">
        Travel to places like Rishikesh, Varanasi, McLeod Ganj, and Hampi. These towns offer cheap stays and amazing experiences.
      </p>

      <Image
        src="/images/budget-destinations.jpg"
        alt="Budget Destinations in India"
        width={800}
        height={400}
        className="rounded-lg shadow-md mb-6"
      />

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. Stay in Hostels or Guesthouses</h2>
      <p className="mb-4 text-gray-700">
        Hostels and homestays are cheaper than hotels. Sites like Hostelworld and Airbnb help you find budget options.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. Eat Like a Local</h2>
      <p className="mb-4 text-gray-700">
        Street food in India is delicious and cheap. Try samosas, chole bhature, or dosa at local stalls to save money and enjoy local flavors.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Use Public Transport</h2>
      <p className="mb-4 text-gray-700">
        Trains and buses are very affordable in India. Apps like IRCTC and RedBus help book tickets easily.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Travel Off-Season</h2>
      <p className="mb-4 text-gray-700">
        Avoid holidays and peak seasons. Prices for travel and stays drop a lot during off-season times.
      </p>

      <Image
        src="/images/off-season-travel.jpg"
        alt="Travel in Off Season"
        width={800}
        height={400}
        className="rounded-lg shadow-md mb-6"
      />

      <p className="text-md text-gray-600 mt-6">
        🌏 <strong>Pro Tip:</strong> Always plan your budget before the trip. Keep a small emergency fund and enjoy India stress-free!
      </p>

      <div className="text-center mt-10">
        <p className="text-lg font-semibold">Ready to explore India on a budget? Start planning today!</p>
      </div>
    </main>
  );
}
export default BudgetTravelBlog;
