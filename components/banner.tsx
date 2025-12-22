export function Banner(props: { title: string }) {
  return (
    <section
      id="banner"
      className="px-4 min-h-[45dvh] bg-gradient-to-br from-secondary/85 via-primary to-secondary flex justify-center items-center"
    >
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center mt-16">
          {props.title}
        </h1>
      </div>
    </section>
  );
}
