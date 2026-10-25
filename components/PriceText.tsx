export default function PriceText({ value }: { value: string }) {
  const [range, unit] = value.split(' / ');
  return (
    <>
      <span className="price__range">{range}</span>
      {unit ? ` /\u00a0${unit}` : null}
    </>
  );
}
