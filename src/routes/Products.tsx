export default function Products() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-6xl">products</h1>;
      
      <h1 className="font-extrabold">Typography</h1>

      <div className="mt-2 rounded border p-2">Text in div</div>

      <div className="mt-2 rounded border p-2">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      <div className="mt-2 rounded border p-2">
        <p>Paragraph</p>
      </div>

      <div className="mt-2 rounded border p-2">
        <h6 className="font-bold">Jost Bold</h6>
        <h6 className="font-extrabold">Jost Bolder</h6>
        <div className="font-bold">Roboto Bold</div>
        <div className="font-extrabold">Roboto Bolder</div>
      </div>
    </>
  );
}
