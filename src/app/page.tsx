'use client';

export default function Home() {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/log-click', {
        method: 'POST',
      });
      
      if (!response.ok) {
        console.error('Failed to log click');
      }
      
      // Navigate to example.com after logging
      window.open('https://example.com', '_blank');
    } catch (error) {
      console.error('Error logging click:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="text-center">
        <h1 className="text-2xl mb-2">Hello! My name is Sierra.</h1>
        <p>Click the button below to see my author page:</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Go!
      </button>
    </main>
  )
}
