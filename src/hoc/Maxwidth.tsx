const Maxwidth = (WrappedComponent: any) => {
  return function EnhanceComponet(props: any) {
    return (
      <section className="flex justify-center items-center">
        <div className="max-w-[1800px]  w-full px-6 ">
          <WrappedComponent {...props} />
        </div>
      </section>
    );
  };
};

export default Maxwidth;
