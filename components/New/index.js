export default function New({ navigateToPage }) {
  return (
    <div>
      <main>
        <h1>NEXT-CHROME-STARTER</h1>
        <p>
          This is an example of a Browser Extension built with NEXT.JS. Please
          refer to the GitHub repo for running instructions and documentation
        </p>
        <h1>New Page ./components/New/index.js</h1>
        <p>{"[ - This is New page content - ]"}</p>
        <p onClick={() => navigateToPage("index")}>{"< Go Back"}</p>
      </main>
    </div>
  );
}
