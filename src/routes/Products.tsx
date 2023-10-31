import BreadcrumsContent from '@/components/atoms/BreadcrumsContent';
import ContentSection from '@/components/atoms/ContentSection';

export default function Products() {
  return (
    <>
      <BreadcrumsContent />
      <ContentSection>
        <h1 className="text-3xl md:text-4xl lg:text-6xl">products</h1>

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
          <div className="font-jost">Jost</div>
          <div className="font-jost font-bold">Jost Bold</div>
          <div className="font-jost font-extrabold">Jost Bolder</div>
          <div>Roboto</div>
          <div className="font-bold">Roboto Bold</div>
          <div className="font-extrabold">Roboto Bolder</div>
        </div>
      </ContentSection>
    </>
  );
}
