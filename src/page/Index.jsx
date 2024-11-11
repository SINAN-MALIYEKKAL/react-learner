import React from 'react'

export default function Index() {
  return (
   
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen">
      <header className="w-full text-center py-4 bg-gray-900 text-gray-400 text-lg">
        <p>Home • Welcome</p>
      </header>

      <main className="flex flex-col items-center w-full py-8">
        <div className="bg-gray-800 p-8 rounded-lg text-center max-w-md w-11/12">
          <div className="text-6xl text-gray-500 mb-4">🎬</div>
          <p className="text-gray-300 mb-6">Please help us by sharing this site with your friends. Thanks!</p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
            Browse All Movies & Series →
          </button>
        </div>

        <footer className="text-center mt-8 text-gray-400">
          <h2 className="text-xl font-semibold mb-4">Goku.to - Best website to Watch Free Movies Online</h2>
          <ul className="space-y-2 text-gray-300">
            <li>HD Quality</li>
            <li>Free Streaming without Signing-up</li>
            <li>One Click HD Streaming</li>
            <li>Fast and Secure Streaming Server</li>
            <li>Chromecast supported</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
