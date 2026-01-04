export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-3">
        Yesterday’s traffic smoke = 3 cigarettes — here’s the cost
      </h1>

      <p className="mb-4">
        Yesterday Kampala’s air averaged 66 μg/m³ of fine soot (PM2.5) —
        3 times the WHO safe level. That’s the same as puffing 3 cigarettes
        (even if you don’t smoke). A boda rider breathing this for 8 hours
        inhales extra soot worth UGX 18,000 in lung damage each month —
        enough to buy 4 litres of cooking oil. The city doesn’t warn you;
        we just did.
      </p>

      <iframe
        title="Kampala air vs cigarettes"
        src="https://datawrapper.dwcdn.net/YOUR_ID/1/"
        scrolling="no"
        frameBorder="0"
        style={{ width: "100%", height: "320px", border: "none" }}
      />

      <div className="mt-6">
        <a
          href="https://wa.me/256XXXXXXXX?text=Yesterday%27s%20traffic%20smoke%20was%20equal%20to%203%20cigarettes."
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Share on WhatsApp
        </a>
      </div>
    </main>
  );
}
