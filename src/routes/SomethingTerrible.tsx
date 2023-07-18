export default function SomethingTerrible() {
  throw new Response('Terrible', { status: 403 });

  return <div>never reach this</div>;
}
