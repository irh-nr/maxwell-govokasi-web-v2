export function Banner(props: { title: string }) {
  return (
    <section
      id="banner"
      className="min-h-96 bg-primary flex justify-center items-center"
    >
      <div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-center">
          {props.title}
        </h1>
      </div>
    </section>
  );
}
