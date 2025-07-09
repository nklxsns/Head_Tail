import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Head & Tail 🎯</h1>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/head-tail"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Go to Head & Tail
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
