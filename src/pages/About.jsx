const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">About This Project</h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Head & Tail</strong> is a simple interactive application that allows users to submit choices between
          two outcomes: <span className="font-semibold text-blue-600">Heads</span> or{" "}
          <span className="font-semibold text-indigo-600">Tails</span>. Each submission is visually displayed in
          columns, creating a clear representation of user input over time.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          This project demonstrates core concepts of React like routing, form handling, and state management, while also
          emphasizing responsive layout and component reusability using Tailwind CSS.
        </p>


        <div className="text-center pt-4">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg">
            Made using React & Tailwind
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
